// Define quiz questions and answers
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
    // Add more questions here
];

let currentQuestionIndex = 0;
let score = 0;

// Select HTML elements
const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const resultContainer = document.getElementById('results-container');
const finalScoreElement = document.getElementById('final-score');

// Add event listeners
startButton.addEventListener('click', startQuiz);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
});

// Function to start the quiz
function startQuiz() {
    startButton.classList.add('hide');
    resultContainer.classList.add('hide');
    questionContainer.classList.remove('hide');
    currentQuestionIndex = 0;
    score = 0;
    setNextQuestion();
}

// Function to set the next question
function setNextQuestion() {
    resetState();
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
    } else {
        showResults();
    }
}

// Function to display a question
function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(answer.correct));
        answerButtonsElement.appendChild(button);
    });
}

// Function to reset the state of the quiz
function resetState() {
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

// Function to handle answer selection
function selectAnswer(correct) {
    if (correct) {
        score++;
    }
    if (currentQuestionIndex < questions.length - 1) {
        nextButton.classList.remove('hide');
    } else {
        showResults();
    }
}

// Function to display quiz results
function showResults() {
    questionContainer.classList.add('hide');
    resultContainer.classList.remove('hide');
    finalScoreElement.innerText = `Your Score: ${score} out of ${questions.length}`;
}

// Initialize the quiz
startQuiz();
