// Wait for the DOM content to load
document.addEventListener('DOMContentLoaded', () => {

    // DOM elements
    const startButton = document.getElementById('start-btn');
    const questionContainerElement = document.getElementById('question-container');
    const questionElement = document.getElementById('question');
    const answerButtonsElement = document.getElementById('answer-buttons');
    const resultsContainer = document.getElementById('results-container');
    const finalScoreElement = document.getElementById('final-score');
    const restartButton = document.getElementById('restart-btn');

    // Initialize variables
    let shuffledQuestions, currentQuestionIndex, score;

    // Quiz questions array
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
        // Add more questions below
        {
            question: 'What is the capital of Japan?',
            answers: [
                { text: 'Beijing', correct: false },
                { text: 'Tokyo', correct: true },
                { text: 'Seoul', correct: false },
                { text: 'Bangkok', correct: false }
            ]
        },
        {
            question: 'What is the tallest mountain in the world?',
            answers: [
                { text: 'Mount Kilimanjaro', correct: false },
                { text: 'Mount Everest', correct: true },
                { text: 'Mount Fuji', correct: false },
                { text: 'Mount McKinley', correct: false }
            ]
        },
        {
            question: 'Who painted the Mona Lisa?',
            answers: [
                { text: 'Pablo Picasso', correct: false },
                { text: 'Leonardo da Vinci', correct: true },
                { text: 'Vincent van Gogh', correct: false },
                { text: 'Michelangelo', correct: false }
            ]
        },
        {
            question: 'Which planet is known as the Red Planet?',
            answers: [
                { text: 'Jupiter', correct: false },
                { text: 'Mars', correct: true },
                { text: 'Venus', correct: false },
                { text: 'Saturn', correct: false }
            ]
        }
    ];

    // Event listener for start button
    startButton.addEventListener('click', startQuiz);

    // Start the quiz
    function startQuiz() {
        score = 0;
        startButton.classList.add('hide'); // Hide start button
        shuffledQuestions = questions.sort(() => Math.random() - .5); // Shuffle questions
        currentQuestionIndex = 0;
        questionContainerElement.classList.remove('hide'); // Show question container
        setNextQuestion(); // Set first question
    }

    // Set next question
    function setNextQuestion() {
        resetState(); // Reset state
        showQuestion(shuffledQuestions[currentQuestionIndex]); // Show next question
    }

    // Show question and answers
    function showQuestion(question) {
        questionElement.innerText = question.question; // Display question
        question.answers.forEach(answer => {
            const button = document.createElement('button'); // Create button for each answer
            button.innerText = answer.text; // Set button text
            button.classList.add('btn'); // Add button class
            button.addEventListener('click', () => selectAnswer(answer)); // Add click event listener
            answerButtonsElement.appendChild(button); // Append button to answer buttons container
        });
    }

    // Reset answer buttons
    function resetState() {
        while (answerButtonsElement.firstChild) {
            answerButtonsElement.removeChild(answerButtonsElement.firstChild); // Remove all answer buttons
        }
    }

    // Handle answer selection
    function selectAnswer(answer) {
        if (answer.correct) {
            score++; // Increment score for correct answer
        }
        if (shuffledQuestions.length > currentQuestionIndex + 1) {
            currentQuestionIndex++; // Move to next question
            setNextQuestion(); // Set next question
        } else {
            showResults(); // Show quiz results
        }
    }

    // Show quiz results
    function showResults() {
        questionContainerElement.classList.add('hide'); // Hide question container
        resultsContainer.classList.remove('hide'); // Show results container
        finalScoreElement.innerText = `Quiz Completed! Your Score: ${score} out of ${questions.length}`; // Display final score
    }

    // Event listener for restart button
    restartButton.addEventListener('click', restartQuiz);

    // Restart the quiz
    function restartQuiz() {
        resultsContainer.classList.add('hide'); // Hide results container
        startButton.classList.remove('hide'); // Show start button
        resetState(); // Reset answer buttons
    }
});
