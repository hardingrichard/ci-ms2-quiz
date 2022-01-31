// /* File used by quiz.html in order to display a quiz which is made up of 10
// questions for the user to answer. The quiz will be run with a progress bar and 
// question count showing the progress of the quiz so that the user can guage how 
// many questions are left. The score will increment at the top to give feedback
// to the user on how well they are doing.
// */

// // List of variables used for the Quiz

// score variable
let quizScore = document.getElementById('score');
let points_score = 10;
let score = 0;

// progress bar variables - Resource used for help: https://javascript.plainenglish.io/building-a-progress-bar-in-css-js-html-from-scratch-6449da06042
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
 * startGame function used to start the quiz with a score of nil and picking up the first question
 */
  function startQuiz () {
    console.log('Started quiz')
    score = 0;
    questionCounter = 0;
    questionOptions = [...questions];
    getNextQuestion();
  }
  
  /**
   * getNextQuestion function used to keep track of the score returning the results page 
   */
  function getNextQuestion () {
      if (questionOptions.length === 0 || questionCounter > max_questions) {
          localStorage.setItem('mostRecentScore', score)
          return window.location.assign('scores.html')
      }
  
      questionCounter++
      // changes value of width property for progress bar relating to question number
      quizProgressMax.style.width = `${(questionCounter/max_questions) * 100}%`
      // changes the question number count out of 10
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
      
      // change content of array for answers
      questionOptions.splice(questionsIndex, 1);
      correctAnswer = true;
  }
  
  // See readme for tutorial used for guidance
  options.forEach(option => {
    option.addEventListener('click', e => {
        if(!correctAnswer) return

        correctAnswer = false
        let selectOption = e.target
        let selectAnswer = selectOption.dataset['number']
        let applyClass = selectAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if(applyClass === 'correct') {
          incrementScore(points_score)
        }

        selectOption.parentElement.classList.add(applyClass)

        setTimeout(() => {
          selectOption.parentElement.classList.remove(applyClass)
          getNextQuestion()
        }, 100)
    })
  })

  incrementScore = value => {
    score += value
    quizScore.innerText = score
  }
  
// Array for questions to appear in quiz
var questions = 
[
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


// Call function to display quiz
startQuiz ();