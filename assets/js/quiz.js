/* File used by quiz.html in order to display a quiz which is made up of 10
questions for the user to answer. The quiz will be run with a progress bar and 
question count showing the progress of the quiz so that the user can guage how 
many questions are left. The score will increment at the top to give feedback
to the user on how well they are doing.
*/

// List of variables used for the Quiz

// score variable
let quizScore = document.getElementById('#score');
let points_score = 10;
let score = 0;

// progress bar variables - Resource used for help: https://javascript.plainenglish.io/building-a-progress-bar-in-css-js-html-from-scratch-6449da06042
let quizProgressTitle = document.getElementById('#quiz-prog-title');
let quizProgressMax = document.getElementById('#quiz-progress-max');
let questionCounter = 0;
let max_questions = 10;

// question variables
let question = document.getElementbyId('#question');
let currentQuestion = {};
let questionCounter = 0;
let questionOptions = [];

// answer variables
let options = Array.from(document.getElementsByClassName('.answer-option'));
let correctAnswer = true

/**
 * startGame function used to start the quiz with a score of nil and picking up the first question
 */
 function startQuiz () {
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
      quizProgressMax.style.width = `${(questionCounter / max_questions) * 100}%`;
      // changes the question number count out of 10
      quizProgressTitle.innerText = `Question ${questionCounter} of ${max_questions}`;

      // randomises the questions displayed to the user so that they don't repeat order
      let questionsIndex = Math.floor(Math.random() * questionOptions.length);
      currentQuestion = questionOptions[questionIndex]
      question.innerText = currentQuestion.question
      
      // for loop to go through each question answer
      answerOptions.forEach(option => {
          let value = option.dataset['value']
          option.innerText = currentQuestion['option' + value]
      })
      
      // change content of array for correct answer
      questionOptions.splice(questionsIndex, 1);
      correctAnswer = true;
  }

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


// Call function to display quiz
startQuiz ()