const questions = [
    {
    question: "What is the capital of France?",
    choices: ["Paris", "London", "Berlin", "Madrid"],
    answer: "Paris"
    },
    {
    question: "Which language runs in a web browser?",
    choices: ["Python", "Java", "C", "JavaScript"],
    answer: "JavaScript"
    },
    {
    question: "What year was JavaScript created?",
    choices: ["1995", "2000", "1990", "2005"],
    answer: "1995"
    },
    {
    question: "What does CSS stand for?",
    choices: [
        "Cascading Style Sheets",
        "Creative Style System",
        "Computer Style Sheet",
        "Colorful Style Sheet"
    ],
    answer: "Cascading Style Sheets"
    },
    {
    question: "Who invented the World Wide Web?",
    choices: [
        "Bill Gates",
        "Tim Berners-Lee",
        "Steve Jobs",
        "Mark Zuckerberg"
    ],
    answer: "Tim Berners-Lee"
    },
    {
    question: "What is the largest planet in our Solar System?",
    choices: ["Mars", "Earth", "Saturn", "Jupiter"],
    answer: "Jupiter"
    },
    {
    question: "Which HTML tag is used to define an image?",
    choices: ["<image>", "<img>", "<pic>", "<src>"],
    answer: "<img>"
    },
    {
    question: "Which programming language is known for its snake logo?",
    choices: ["Ruby", "Python", "Java", "PHP"],
    answer: "Python"
    },
    {
    question: "Which symbol is used for comments in JavaScript?",
    choices: ["//", "/* */", "#", "<!-- -->"],
    answer: "//"
    },
    {
    question: "What is the value of 2 + '2' in JavaScript?",
    choices: ["4", "22", "NaN", "undefined"],
    answer: "22"
    }
];

// DOM elements
const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");
const questionContainer = document.getElementById("question-container");
const resultContainer = document.getElementById("result-container");
const questionText = document.getElementById("quetion-text");
const choicesList = document.getElementById("choices-list");
const scoreDisplay = document.getElementById("score");

let currentQuestionIndex = 0;
let score = 0;

// Start quiz
startBtn.addEventListener("click", startQuiz);

function startQuiz() {
    startBtn.classList.add("hidden");
    questionContainer.classList.remove("hidden");
    resultContainer.classList.add("hidden");
    currentQuestionIndex = 0;
    score = 0;
    showQuestion();
}

// Show current question
function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
    choicesList.innerHTML = "";

    currentQuestion.choices.forEach(choice => {
    const li = document.createElement("li");
    li.textContent = choice;
    li.addEventListener("click", () => selectAnswer(choice));
    choicesList.appendChild(li);
    });

    nextBtn.classList.add("hidden");
}

// Select answer
function selectAnswer(choice) {
    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = choice === currentQuestion.answer;

    if (isCorrect) {
    score++;
    }

    Array.from(choicesList.children).forEach(li => {
    if (li.textContent === currentQuestion.answer) {
        li.style.backgroundColor = "green";
    } else {
        li.style.backgroundColor = "red";
    }
    li.style.pointerEvents = "none";
    });

    nextBtn.classList.remove("hidden");
}

// Next question
nextBtn.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
    showQuestion();
    } else {
    endQuiz();
    }
});

// End quiz
function endQuiz() {
    questionContainer.classList.add("hidden");
    resultContainer.classList.remove("hidden");
    scoreDisplay.textContent = `${score} out of ${questions.length}`;
}

// Restart quiz
restartBtn.addEventListener("click", startQuiz);
