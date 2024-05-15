<script>
        document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('start-btn');
    const questionContainerElement = document.getElementById('question-container');
    const questionElement = document.getElementById('question');
    const answerButtonsElement = document.getElementById('answer-buttons');
    const resultsContainer = document.getElementById('results-container');
    const finalScoreElement = document.getElementById('final-score');

    let shuffledQuestions, currentQuestionIndex, score;

    // Expanded questions array
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
        // Add more questions as needed
    ];

    startButton.addEventListener('click', startQuiz);

    function startQuiz() {
        score = 0;
        startButton.classList.add('hide');
        shuffledQuestions = questions.sort(() => Math.random() - .5);
        currentQuestionIndex = 0;
        questionContainerElement.classList.remove('hide');
        setNextQuestion();
    }

    function setNextQuestion() {
        resetState();
        showQuestion(shuffledQuestions[currentQuestionIndex]);
    }

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

    function resetState() {
        while (answerButtonsElement.firstChild) {
            answerButtonsElement.removeChild(answerButtonsElement.firstChild);
        }
    }

    function selectAnswer(answer) {
        if (answer.correct) {
            score++;
            alert('Correct!');
        } else {
            alert('Wrong Answer!');
        }
        if (shuffledQuestions.length > currentQuestionIndex + 1) {
            currentQuestionIndex++;
            setNextQuestion();
        } else {
            gameOver();
        }
    }

    function gameOver() {
        questionContainerElement.classList.add('hide');
        resultsContainer.classList.remove('hide');
        finalScoreElement.innerText = `Quiz Completed! Your Score: ${score} out of ${questions.length}`;
        alert(`Game Over! Your Score: ${score} out of ${questions.length}`);
    }

    document.getElementById('restart-btn').addEventListener('click', restartQuiz);

    function restartQuiz() {
        resultsContainer.classList.add('hide');
        startButton.classList.remove('hide');
        resetState();
    }
});

    </script>