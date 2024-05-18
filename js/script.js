document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('start-btn');
    const questionContainerElement = document.getElementById('question-container');
    const questionElement = document.getElementById('question');
    const answerButtonsElement = document.getElementById('answer-buttons');
    const resultsContainer = document.getElementById('results-container');
    const finalScoreElement = document.getElementById('final-score');
    const progressBar = document.getElementById('progress');
    
    let shuffledQuestions, currentQuestionIndex, score;

    // Array containing quiz questions and answers
    const questions = [
        {
            question: 'What is 2 + 2?',
            answers: [
                { text: '4', correct: true },
                { text: '22', correct: false },
                { text: '3', correct: false },
                { text: '5', correct: false }
            ]
        },
        {
            question: 'Capital of France?',
            answers: [
                { text: 'Paris', correct: true },
                { text: 'London', correct: false },
                { text: 'Berlin', correct: false },
                { text: 'Madrid', correct: false }
            ]
        },
        {
            question: 'Largest planet in our solar system?',
            answers: [
                { text: 'Jupiter', correct: true },
                { text: 'Mars', correct: false },
                { text: 'Earth', correct: false },
                { text: 'Saturn', correct: false }
            ]
        },
        {
            question: 'Fastest land animal?',
            answers: [
                { text: 'Cheetah', correct: true },
                { text: 'Lion', correct: false },
                { text: 'Horse', correct: false },
                { text: 'Ostrich', correct: false }
            ]
        },
        {
            question: 'H2O is the chemical formula for?',
            answers: [
                { text: 'Water', correct: true },
                { text: 'Hydrogen Peroxide', correct: false },
                { text: 'Salt', correct: false },
                { text: 'Oxygen', correct: false }
            ]
        },
        {
            question: 'Who wrote "To Kill a Mockingbird"?',
            answers: [
                { text: 'Harper Lee', correct: true },
                { text: 'Mark Twain', correct: false },
                { text: 'Ernest Hemingway', correct: false },
                { text: 'F. Scott Fitzgerald', correct: false }
            ]
        },
        {
            question: 'The Great Wall of China is visible from?',
            answers: [
                { text: 'Space', correct: false },
                { text: 'Moon', correct: false },
                { text: 'Mount Everest', correct: false },
                { text: 'None of the above', correct: true }
            ]
        },
        {
            question: 'Which planet is known as the Red Planet?',
            answers: [
                { text: 'Mars', correct: true },
                { text: 'Venus', correct: false },
                { text: 'Jupiter', correct: false },
                { text: 'Saturn', correct: false }
            ]
        },
        {
            question: 'What is the speed of light?',
            answers: [
                { text: '299,792,458 meters per second', correct: true },
                { text: '150,000,000 meters per second', correct: false },
                { text: '300,000,000 meters per second', correct: false },
                { text: '299,792,459 meters per second', correct: false }
            ]
        },
        {
            question: 'Who painted the Mona Lisa?',
            answers: [
                { text: 'Leonardo da Vinci', correct: true },
                { text: 'Vincent van Gogh', correct: false },
                { text: 'Pablo Picasso', correct: false },
                { text: 'Claude Monet', correct: false }
            ]
        }
    ];

    // Sound effects for correct and incorrect answers
    const correctSound = new Audio('sounds/correct.mp3');
    const wrongSound = new Audio('sounds/wrong.mp3');

    // Event listener for start button click
    startButton.addEventListener('click', startQuiz);

    // Function to start the quiz
    function startQuiz() {
        score = 0;
        startButton.classList.add('hide');
        shuffledQuestions = questions.sort(() => Math.random() - .5);
        currentQuestionIndex = 0;
        questionContainerElement.classList.remove('hide');
        setNextQuestion();
    }

    // Function to set the next question
    function setNextQuestion() {
        resetState();
        showQuestion(shuffledQuestions[currentQuestionIndex]);
        updateProgressBar();
    }

    // Function to display the current question and answers
    function showQuestion(question) {
        questionElement.innerText = question.question;
        question.answers.forEach(answer => {
            const button = document.createElement('button');
            button.innerText = answer.text;
            button.classList.add('btn');
            button.addEventListener('click', () => selectAnswer(answer));
            answerButtonsElement.appendChild(button);
        });
    }

    // Function to reset the answer buttons
    function resetState() {
        while (answerButtonsElement.firstChild) {
            answerButtonsElement.removeChild(answerButtonsElement.firstChild);
        }
    }

    // Function to handle answer selection
    function selectAnswer(answer) {
        const selectedButton = event.target;
        const correct = answer.correct;

        if (correct) {
            score++;
            selectedButton.classList.add('correct');
            correctSound.play();
        } else {
            selectedButton.classList.add('wrong');
            wrongSound.play();
        }

        Array.from(answerButtonsElement.children).forEach(button => {
            button.disabled = true;
            if (button.innerText === answer.text && answer.correct) {
                button.classList.add('correct');
            } else if (button.innerText === answer.text) {
                button.classList.add('wrong');
            }
        });

        setTimeout(() => {
            if (shuffledQuestions.length > currentQuestionIndex + 1) {
                currentQuestionIndex++;
                setNextQuestion();
            } else {
                gameOver();
            }
        }, 1000);
    }

    // Function to handle the end of the quiz
    function gameOver() {
        questionContainerElement.classList.add('hide');
        resultsContainer.classList.remove('hide');
        finalScoreElement.innerHTML = `<span>Quiz Completed!</span><br>Your Score: ${score} out of ${questions.length}`;
    }

    // Function to update the progress bar
    function updateProgressBar() {
        const progressPercentage = ((currentQuestionIndex + 1) / questions.length) * 100;
        progressBar.style.width = progressPercentage + '%';
    }

    // Event listener for restart button click
    document.getElementById('restart-btn').addEventListener('click', restartQuiz);

    // Function to restart the quiz
    function restartQuiz() {
        resultsContainer.classList.add('hide');
        startButton.classList.remove('hide');
        resetState();
    }
});
