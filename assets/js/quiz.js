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

// Array for questions to appear in quiz
let questions = [
    {
        // Question 1
        question: "Which of these mountains are NOT in Colombia?",

        option1: "Pico Simón Bolívar",
        option2: "Ritacuba Blanco",
        option3: "Ben Nevis",
        option4: "Pico Cristóbal Colón",

        answer: 3
    },
    {
        // Question 2
        question: "Colombia produces 60% of the world's supply of which precious stone?",

        option1: "Garnet",
        option2: "Emerald",
        option3: "Diamond",
        option4: "Topaz",

        answer: 2
    },
    {
        // Question 3
        question: "What is the capital city of Colombia?",

        option1: "Bogotá",
        option2: "Medellin",
        option3: "Cali",
        option4: "Cartagena",

        answer: 1
    },
    {
        // Question 4
        question: "Which waterfall can be found in the city of Bogotá?",

        option1: "Victoria Falls",
        option2: "Tugela Falls",
        option3: "Angel Falls",
        option4: "Tequendama Falls",

        answer: 4
    },
    {
        // Question 5
        question: "What is Cumbia?",

        option1: "A type of drink",
        option2: "A type of music",
        option3: "A type of bird",
        option4: "A type of food",

        answer: 2
    },
    {
        // Question 6
        question: "Which of these countries does NOT share a border with Colombia?",

        option1: "Peru",
        option2: "Venezuela",
        option3: "Mexico",
        option4: "Ecuador",

        answer: 3
    },
    {
        // Question 7
        question: "Which of these is the main river of Colombia?",

        option1: "Orinoco",
        option2: "Amazonas",
        option3: "Atrato",
        option4: "Magdalena",

        answer: 4
    },
    {
        // Question 8
        question: "What is the national animal of Colombia?",

        option1: "Condor",
        option2: "Jaguar",
        option3: "Toucan",
        option4: "Giant Anteater",

        answer: 1
    },
    {
        // Question 9
        question: "What material is the 'Sombrero vueltiao' made of?",

        option1: "Cotton",
        option2: "Plastic",
        option3: "Straw",
        option4: "Paper",

        answer: 3
    },
    {
        // Question 10
        question: "What is the official language of Colombia?",

        option1: "Portuguese",
        option2: "Spanish",
        option3: "English",
        option4: "French",

        answer: 2
    },
]
