/* File used by quiz.html in order to display a quiz which is made up of 10
questions for the user to answer. The quiz will be run with a progress bar and 
question count showing the progress of the quiz so that the user can guage how 
many questions are left. The score will increment at the top to give feedback
to the user on how well they are doing. 

Please see bottom of file for questions used for quiz.
*/

// List of variables used for the Quiz

// score variables
let quizScore = document.getElementById('score');
let points_score = 10;
let score = 0;

// progress bar variables - Resource used for help and adapted: https://javascript.plainenglish.io/building-a-progress-bar-in-css-js-html-from-scratch-6449da06042
let quizProgressTitle = document.getElementById('quiz-progress-title');
let quizProgressMax = document.getElementById('quiz-progress-max');
let questionCounter = 0;
let max_questions = 10;

// question variables
let question = document.getElementById('question');
let currentQuestion = {};
let questionOptions = [];

// answer variables
let options = Array.from(document.querySelectorAll('.answer-option'));
let correctAnswer = true

// Clicking on the start button will begin quiz
let startButton = document.getElementById('start-btn')
startButton.addEventListener('click', startQuiz)

/**
 *  Function used to start the quiz with a score of nil and picking up the first question
 */
function startQuiz () {
  console.log('Started quiz')
  score = 0;
  questionCounter = 0;
  questionOptions = [...questions];
  getNextQuestion();
}
  
// End of quiz variables and modals
let userScore = document.getElementById('user-score');
let overlayEnd = document.getElementById('end-overlay');
let endScreen = document.getElementById('end-screen-modal');
let restartQuiz = document.getElementById('restart');

/**
 * Function that displays the end of quiz modal and score
 */
function endQuiz() {
  overlayEnd.style.display = "block";
  endScreen.style.display = "block";
  userScore.innerText = quizScore.innerText;
}

// Restart quiz on user click
restartQuiz.addEventListener('click', function () {
  return location.assign('/quiz.html')
})

/**
 * getNextQuestion function used to keep track of the score returning the quiz page at the end 
 */
function getNextQuestion () {
    if (questionOptions.length === 0 || questionCounter > max_questions) {
        localStorage.setItem('mostRecentScore', score)
        // calls end of quiz modal
        endQuiz();
        return
    }

    // changes value of width property for progress bar relating to question number
    quizProgressMax.style.width = `${(questionCounter/max_questions) * 100}%`
    // changes the question number count out of 10 increasing by +1
    questionCounter++
    quizProgressTitle.innerText = `Question ${questionCounter} of ${max_questions}`

    // randomises the questions displayed to the user so that they don't repeat order
    let questionsIndex = Math.floor(Math.random() * questionOptions.length);
    currentQuestion = questionOptions[questionsIndex]
    question.innerText = currentQuestion.question
    
    // for loop to go through each question answer
    options.forEach(option => {
        let number = option.dataset['number']
        option.innerText = currentQuestion['option' + number]
    })
    
    // change content of array by removing previous question
    questionOptions.splice(questionsIndex, 1);
    correctAnswer = true;
}
  
  /* See readme for credits with code below. Tutorial used to get guidance for the following 
  arrow function, adapted and modified to my requirements */
  
  /* Loops through answer options and adds a user click event about the targeted option
  which is then referenced against the dataset */
  options.forEach(option => {
    option.addEventListener('click', event => {
        if(!correctAnswer) return

        correctAnswer = false
        let selectOption = event.target
        let selectAnswer = selectOption.dataset['number']

        /* Ternary operator for if user selection equal to true then toggle answer feedback 
        to show green or false change to red with .CSS style */
        let applyClass = selectAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        // Increases the score by +10 per correct answer
        if(applyClass === 'correct') {
          incrementScore(points_score)
        }

        /* arrow function controls the time between clicking and removing to present
        new set of questions displayed */
        selectOption.parentElement.classList.add(applyClass)
        
        setTimeout(() => {
          selectOption.parentElement.classList.remove(applyClass)
          getNextQuestion()
        }, 500)
    })
  })
  
  incrementScore = value => {
    score += value
    quizScore.innerText = score
  }

/* Array for list of questions to appear in quiz, this will get picked up and randomised 
through a Math object */
let questions = 
[
    {
        question: "Which of these mountains are NOT in Colombia?",
        option1: "Pico Simón Bolívar",
        option2: "Ritacuba Blanco",
        option3: "Ben Nevis",
        option4: "Pico Cristóbal Colón",
        answer: 3
    },
    {
        question: "Colombia produces 60% of the world's supply of which precious stone?",
        option1: "Garnet",
        option2: "Emerald",
        option3: "Diamond",
        option4: "Topaz",
        answer: 2
    },
    {
        question: "What is the capital city of Colombia?",
        option1: "Bogotá",
        option2: "Medellin",
        option3: "Cali",
        option4: "Cartagena",
        answer: 1
    },
    {
        question: "Which waterfall can be found in the city of Bogotá?",
        option1: "Victoria Falls",
        option2: "Tugela Falls",
        option3: "Angel Falls",
        option4: "Tequendama Falls",
        answer: 4
    },
    {
        question: "What is Cumbia?",
        option1: "A type of drink",
        option2: "A type of music",
        option3: "A type of bird",
        option4: "A type of food",
        answer: 2
    },
    {
        question: "Which of the following countries do not share a border with Colombia?",
        option1: "Peru",
        option2: "Venezuela",
        option3: "Mexico",
        option4: "Ecuador",
        answer: 3
    },
    {
        question: "Which of these is the main river of Colombia?",
        option1: "Orinoco",
        option2: "Amazonas", 
        option3: "Atrato",
        option4: "Magdalena",
        answer: 4
    },
    {
        question: "What is the national animal of Colombia?",
        option1: "Condor",
        option2: "Jaguar",
        option3: "Toucan",
        option4: "Giant Anteater",
        answer: 1
    },
    {
        question: "What material is the 'Sombrero vueltiao' made of?",
        option1: "Cotton", 
        option2: "Plastic",
        option3: "Straw",
        option4: "Paper",
        answer: 3
    },
    {
        question: "What is the official language of Colombia?",
        option1: "Portuguese",
        option2: "Spanish",
        option3: "English",
        option4: "French",
        answer: 2
    },
]

// Call function to display quiz
startQuiz ();