var startButton = document.getElementById('start-btn');
var questionContainerElement = document.getElementById('question-container');


 startButton.addEventListener('click', startGame);


function startGame(){
    console.log('Started');
    startButton.classList.add('hide');

}

function setNextQuestion(){


}

function selectAnswer(){

}

const questions = [
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
      question: 'The external JavaScript file must contain the <script> tag.',
      answers: [
        { text: 'False', correct: false },
        { text: 'True', correct: true }
      ]
    }
  ]