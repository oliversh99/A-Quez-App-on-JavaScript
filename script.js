const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
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
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}
// quiz questions object here will work with shuffel
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
        question: 'What does HTML stand for?',
        answers: [
          { text: 'Hypertext Medium Language', correct: true },
          { text: 'Hypertext Markup Lingo', correct: false  },
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