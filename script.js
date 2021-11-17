const endButton = document.getElementById('end-btn')
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
 
let shuffledQuestions, currentQuestionIndex

// endtButton.addEventListener('click', showResult)

startButton.addEventListener('click', startGame ,startTimer)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})


  var timer = document.getElementById("timer");
  var secondsLeft = 90;
  var timerInterval;
// timer function
function startTimer() {


  timerInterval = setInterval(function () {
    secondsLeft--;
    timer.textContent = "Time: " + secondsLeft;

    if (secondsLeft >= 0) {
      span = document.getElementById('timer');
      span.innerHTML = secondsLeft;
    }
    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      showScore();
      questionContainerElement.classList.add('hide')
    }
      // startButton.classList.add('hide');
      // gameoverDiv.classList.remove('hidden');
    //   else {
    //     clearInterval(timerInterval);
       
    

    // }
  }, 1000);
}
var startHeader = document.querySelector("h2");
var startBtn = document.getElementById("startQuiz");
// start game function
function startGame() {
  startButton.classList.add('hide')
  // startHeader.classList.add("hidden");
  // startBtn.classList.add("hidden");
  // i chang questions.sort to quizQuestions.sort test
  shuffledQuestions = quizQuestions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
  // call timer function
  startTimer()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
      
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    // startButton.innerText = 'Restart'
    endButton.classList.remove('hide')
  
    // startButton.classList.remove('hide')
  }
}
  endButton.addEventListener('click',hidEndBtn)

function hidEndBtn(){
  endButton.classList.add("hide")
  showScore()
}

// color wrong and correct on chose answer and add score 
function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
    score++;
    console.log(score)
  } else {
    element.classList.add('wrong')
    // secondsLeft = secondsLeft - 10;
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

// my new test code
// some of global variables
var startPage = document.getElementById("startpage");
var quizBody = document.getElementById("quiz");

var questionsIn = document.getElementById("question");
var choicesEl = document.getElementById("choices");
var questionsEl = document.getElementById("question-placeholder");
var resultsEl = document.getElementById("result");
var gameoverDiv = document.getElementById("gameover");
var finalScoreEl = document.getElementById("finalScore");
var highscoreContainer = document.getElementById("highscoreContainer");
var highscoreDiv = document.getElementById("high-scorePage");
var highscoreInputName = document.getElementById("initials");
var highscoreDisplayName = document.getElementById("highscore-initials");
var submitScoreBtn = document.getElementById("submitScore");
var endGameBtns = document.getElementById("endGameBtns");
var highscoreDisplayScore = document.getElementById("highscore-score");
var highscoreHeader = document.getElementById("highscore-header");
var buttonA = document.getElementById("a");
var buttonB = document.getElementById("b");
var buttonC = document.getElementById("c");
var buttonD = document.getElementById("d");

// timer


// var finalQuestionIndex = quizQuestions.length;
// var currentQuestionIndex = 0;

var score = 0;
var correct;

// function generateQuestions() {
//   if (currentQuestionIndex === finalQuestionIndex) {
//     showScore();
//     return;
//   }
//   var currentQuestion = questions[currentQuestionIndex];
//   questionsEl.innerText = currentQuestion.question;
//   buttonA.innerText = currentQuestion.choiceA;
//   buttonB.innerText = currentQuestion.choiceB;
//   buttonC.innerText = currentQuestion.choiceC;
//   buttonD.innerText = currentQuestion.choiceD;
// }
function showScore() {
  console.log("showScore");
  // quizBody.classList.add("hidden");
  gameoverDiv.classList.remove("hidden");
  clearInterval(timerInterval);
  highscoreInputName.value = "";
  finalScoreEl.innerHTML =
    "You got " + score + " out of " + quizQuestions.length + " correct!";
    finalScoreEl.style.fontFamily = "Helvetica, sans-serif";
}
// This function will do checks the response to each answer
function checkAnswer(finalAnswer) {
  correct = quizQuestions[currentQuestionIndex].answer.correct;
  console.log(correct, finalAnswer);
  if (finalAnswer === correct) {
    score++;
  } else {
    secondsLeft = secondsLeft - 10;
  }
  currentQuestionIndex++;
  if (currentQuestionIndex < finalQuestionIndex) {
    console.log("more questions");
    generateQuestions();
  } else if (currentQuestionIndex >= finalQuestionIndex) {
    console.log("end of array");
    showScore();
  }
}

// submit score to local storage
submitScoreBtn.addEventListener("click", function highscore(){ 
  highscoreContainer.classList.remove('hidden');
  // here if no input will show alert
  if (highscoreInputName.value === "") {
      alert("Initials cannot be blank");
      return;
  } else {
      var savedhighScores = JSON.parse(localStorage.getItem('savedhighScores')) || [];
      var currentUser = highscoreInputName.value;
      var currentHighScore = {
          name: currentUser,
          score: score
      };
      savedhighScores.push(currentHighScore);
      console.log(currentHighScore);
      localStorage.setItem('savedhighScores', JSON.stringify(savedhighScores));
      generateHighScores();
  }
})
var roundSpan = document.createElement("ul");
var newNameScoreSpan = document.createElement("li");

// generate high scores from local storage
function generateHighScores(){
    var highscores = JSON.parse(localStorage.getItem("savedhighScores")) || [];
    var leaderBoard = document.getElementById('leader-board');
    for (i=0; i<highscores.length; i++) {
        var players = document.createElement("li");
        players.style.listStyle = "none";
        players.style.margin = "1em";
        players.textContent = `${highscores[i].name} ${highscores[i].score}`;
        leaderBoard.appendChild(players);
    }
}
// this is replay quiz and restart the start bottom
function replayQuiz () {
  highscoreContainer.classList.add('hidden');
  gameoverDiv.classList.add('hidden');
  startHeader.classList.remove('hidden');
  questionContainerElement.classList.add('hide')
  // startBtn.classList.remove('hidden');
  startButton.classList.remove('hide');
  secondsLeft = 90;
  score = 0;
  currentQuestionIndex = 0;
}
// this for clear storage from initial stored
function clearScore () {
  var leaderBoard = document.getElementById('leader-board');
  window.localStorage.clear();
  leaderBoard.textContent = "";
}
// startBtn.addEventListener("click", startQuiz);
// end of new test code
// quiz questions object here will work with shuffel

// quiz questions object
// var quizQuestions = [
  // const questions = [
//   {
//     question: "What does DOM stand for?",
//     text: "Document Object Model",
//     choiceB: "Display Object Management",
//     choiceC: "Desktop Oriented Mode",
//     choiceD: "Digital Ordinance Model",
//     answer: "a",
//   },


// {
//   question: "Inside which HTML element do we put the Javascript?",
//   answers: [
//   {choiceA: "<js>"},
//   {choiceB: "<javascript>"},
//   {choiceC: "<script>"},
//   {choiceD: "<scripting>"},
//   answer: "c",
// ]
// },
// ];
var quizQuestions = 

// const quizQuestions =
 [
    {
      question: 'Inside which HTML element do we put the JavaScript?',
      answers: [
        { text: '<script>', correct: true },
        { text: '<js>', correct: false },
        { text: '<scripting>', correct: false },
        { text: '<javascript>', correct: false }
      ]
    },
    {
      question: 'Where is the correct place to insert a JavaScript?',
      answers: [
        { text: 'The <body> section', correct: true },
        { text: 'The <head> section', correct: false },
        { text: 'The <Nav> section', correct: false },
        { text: 'Both The <body> section and The <head> section', correct: false }
      ]
    },
    {
      question: 'How do you write "Hello World" in an alert box?',
      answers: [
        { text: 'alert("Hello world");', correct: true },
        { text: 'alertBox("Hello world");', correct: false  },
        { text: 'msgtBox("Hello world");', correct: false },
        { text: 'msg("Hello world");', correct: false }
      ]
    },
    {
        question: 'What does HTML stand for?',
        answers: [
          { text: 'Hypertext Medium Language', correct: false },
          { text: 'Hypertext Markup Lingo', correct: true  },
          { text: 'Hippo Tries Making Licorice', correct: false },
          { text: 'Hypertext Markup Language', correct: false }
        ]
      },
      {
        question: "Name an element that doesn't have a closing tag?",
        answers: [
          { text: '<img>', correct: true },
          { text: '<body>', correct: false  },
          { text: '<head>', correct: false },
          { text: '<p>', correct: false }
        ]
      },
      {
        question: 'Arrays in Javascript can be used to store?',
        answers: [
          { text: 'booleans', correct: false },
          { text: 'strings', correct: true  },
          { text: 'umbers', correct: false },
          { text: 'alerts', correct: false }
        ]
      },
    {
      question: 'The external JavaScript file must contain the <script> tag.',
      answers: [
        { text: 'False', correct: false },
        { text: 'True', correct: true }
      ]
    }
  ]
  