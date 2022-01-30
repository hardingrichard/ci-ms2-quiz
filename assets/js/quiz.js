/* File used by quiz.html in order to display a quiz which is made up of 10
questions for the user to answer. The quiz will be run with a progress bar and 
question count showing the progress of the quiz so that the user can guage how 
many questions are left. The score will increment at the top to give feedback
to the user on how well they are doing.
*/

// List of variables used for the Quiz

let quizProgressTitle = document.querySelector('#quiz-prog-title');
let quizScore = document.querySelector('#score');
let quizProgressMax = document.querySelector('#quiz-progress-max');

let question = document.querySelector('#question');
let 

// Array for questions to appear in quiz
var questions = 
[
    {
        // Question 1
        question: "Which of these mountains are NOT in Colombia?",
        options: ["Pico Simón Bolívar", "Ritacuba Blanco", "Ben Nevis", "Pico Cristóbal Colón"],
        answer: 3
    },
    {
        // Question 2
        question: "Colombia produces 60% of the world's supply of which precious stone?",
        options: ["Garnet", "Emerald", "Diamond", "Topaz"],
        answer: 2
    },
    {
        // Question 3
        question: "What is the capital city of Colombia?",
        options: ["Bogotá", "Medellin", "Cali", "Cartagena"],
        answer: 1
    },
    {
        // Question 4
        question: "Which waterfall can be found in the city of Bogotá?",
        options: ["Victoria Falls", "Tugela Falls", "Angel Falls", "Tequendama Falls"],
        answer: 4
    },
    {
        // Question 5
        question: "What is Cumbia?",
        options: ["A type of drink", "A type of music", "A type of bird", "A type of food"],
        answer: 2
    },
    {
        // Question 6
        question: "Which of these countries does NOT share a border with Colombia?",
        options: ["Peru", "Venezuela", "Mexico", "Ecuador"],
        answer: 3
    },
    {
        // Question 7
        question: "Which of these is the main river of Colombia?",
        options: ["Orinoco", "Amazonas", "Atrato", "Magdalena"],
        answer: 4
    },
    {
        // Question 8
        question: "What is the national animal of Colombia?",
        options: ["Condor", "Jaguar", "Toucan", "Giant Anteater"],
        answer: 1
    },
    {
        // Question 9
        question: "What material is the 'Sombrero vueltiao' made of?",
        options: ["Cotton", "Plastic", "Straw", "Paper"],
        answer: 3
    },
    {
        // Question 10
        question: "What is the official language of Colombia?",
        options: ["Portuguese", "Spanish", "English", "French"],
        answer: 2
    },
]
