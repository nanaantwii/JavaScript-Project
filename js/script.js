// Define quiz questions and answers
const quizData = [
    {
        question: "What is the capital of France?",
        answers: {
            a: "Paris",
            b: "Madrid",
            c: "Rome",
            d: "Berlin"
        },
        correctAnswer: "a"
    },
    {
        question: "What is 4 + 4?",
        answers: {
            a: "8",
            b: "12",
            c: "16",
            d: "10"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the chemical symbol for water?",
        answers: {
            a: "Wt",
            b: "Wa",
            c: "Wo",
            d: "H2O"
        },
        correctAnswer: "d"
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        answers: {
            a: "Harper Lee",
            b: "Mark Twain",
            c: "J.K. Rowling",
            d: "Stephen King"
        },
        correctAnswer: "a"
    },
    {
        question: "What year did the Titanic sink?",
        answers: {
            a: "1912",
            b: "1920",
            c: "1930",
            d: "1940"
        },
        correctAnswer: "a"
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: {
            a: "Jupiter",
            b: "Mars",
            c: "Venus",
            d: "Mercury"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the largest mammal in the world?",
        answers: {
            a: "Elephant",
            b: "Blue Whale",
            c: "Giraffe",
            d: "Hippopotamus"
        },
        correctAnswer: "b"
    },
    {
        question: "Who painted the Mona Lisa?",
        answers: {
            a: "Vincent van Gogh",
            b: "Leonardo da Vinci",
            c: "Pablo Picasso",
            d: "Michelangelo"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the tallest mountain in the world?",
        answers: {
            a: "Mount Kilimanjaro",
            b: "Mount Everest",
            c: "Mount Fuji",
            d: "Mount McKinley"
        },
        correctAnswer: "b"
    },
    {
        question: "Who was the first person to step on the moon?",
        answers: {
            a: "Buzz Aldrin",
            b: "Neil Armstrong",
            c: "Yuri Gagarin",
            d: "Alan Shepard"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the chemical symbol for gold?",
        answers: {
            a: "Au",
            b: "Ag",
            c: "Pb",
            d: "Fe"
        },
        correctAnswer: "a"
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        answers: {
            a: "William Shakespeare",
            b: "Jane Austen",
            c: "Charles Dickens",
            d: "F. Scott Fitzgerald"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the largest ocean on Earth?",
        answers: {
            a: "Atlantic Ocean",
            b: "Indian Ocean",
            c: "Arctic Ocean",
            d: "Pacific Ocean"
        },
        correctAnswer: "d"
    },
    {
        question: "What is the capital of Japan?",
        answers: {
            a: "Beijing",
            b: "Seoul",
            c: "Tokyo",
            d: "Bangkok"
        },
        correctAnswer: "c"
    },
    {
        question: "What is the powerhouse of the cell?",
        answers: {
            a: "Nucleus",
            b: "Mitochondrion",
            c: "Chloroplast",
            d: "Endoplasmic reticulum"
        },
        correctAnswer: "b"
    },
    {
        question: "Who developed the theory of relativity?",
        answers: {
            a: "Isaac Newton",
            b: "Albert Einstein",
            c: "Stephen Hawking",
            d: "Nikola Tesla"
        },
        correctAnswer: "b"
    },
    {
        question: "Which gas do plants use for photosynthesis?",
        answers: {
            a: "Oxygen",
            b: "Carbon Dioxide",
            c: "Nitrogen",
            d: "Helium"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the smallest prime number?",
        answers: {
            a: "0",
            b: "1",
            c: "2",
            d: "3"
        },
        correctAnswer: "c"
    },
    {
        question: "What is the largest desert in the world?",
        answers: {
            a: "Gobi Desert",
            b: "Sahara Desert",
            c: "Arabian Desert",
            d: "Antarctic Desert"
        },
        correctAnswer: "b"
    },
    {
        question: "Who wrote 'Harry Potter'?",
        answers: {
            a: "J.R.R. Tolkien",
            b: "C.S. Lewis",
            c: "J.K. Rowling",
            d: "Terry Pratchett"
        },
        correctAnswer: "c"
    }
]; // Add closing bracket here

// Select elements from the DOM
const quizContainer = document.getElementById("quiz-container");
const submitButton = document.getElementById("submit");

// Display quiz questions and answers
function buildQuiz() {
    const output = [];

    quizData.forEach((question, index) => {
        const answers = [];

        for (const letter in question.answers) {
            answers.push(
                `<label>
                    <input type="radio" name="question${index}" value="${letter}">
                    ${letter}: ${question.answers[letter]}
                </label>`
            );
        }

        output.push(
            `<div class="question"> ${question.question} </div>
            <div class="answers"> ${answers.join("")} </div>`
        );
    });

    quizContainer.innerHTML = output.join("");
}

// Show results
function showResults() {
    const answerContainers = quizContainer.querySelectorAll(".answers");

    let score = 0;

    quizData.forEach((question, index) => {
        const answerContainer = answerContainers[index];
        const selector = `input[name=question${index}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        if (userAnswer === question.correctAnswer) {
            score++;
        }
    });

    alert(`You scored ${score} out of ${quizData.length}`);
}

// Display quiz on page load
buildQuiz();

// Event listener for quiz submission
submitButton.addEventListener("click", showResults);
