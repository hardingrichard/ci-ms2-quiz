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
        question: "Which of these mountains are NOT in Colombia?",
        option1: "Pico Simón Bolívar",
        option2: "Ritacuba Blanco",
        option3: "Ben Nevis",
        option4: "Pico Cristóbal Colón",

        answer: 3
    }
]
