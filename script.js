
// Here a variable startButton is declared where were manipulating the DOM by getting elements by ID
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')

const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')


let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', ()=> {
  currentQuestionIndex++
  setNextQuestion()
})


function startGame() {
console.log('Started')
startButton.classList.add('hide')
shuffledQuestions = question.sort(() => Math.random () - .5)
currentQuestionIndex = 0
questionContainerElement.classList.remove('hide')
setNextQuestion()
}


function setNextQuestion() {
  resetState()
 showQuestion(shuffledQuestions[currentQuestionIndex])
}


function showQuestion(question){
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
  button.classList.add('btn')
  if(answer.correct){
    button.dataset.correct = answer.correct
  }
  button.addEventListener('click', selectAnswer)
  answerButtonsElement.appendChild(button)
  })

}

function resetState (){
clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while(answerButtonsElement.firstChild){
    answerButtonsElement.removeChild
    (answerButtonsElement.firstChild)
  }

}




// This function takes my event as a parameter 
function selectAnswer(e) {
const selectButton = e.target 
const correct = selectButton.dataset.correct
setStatusClass(document.body, correct)
Array.from(answerButtonsElement.children).forEach(button => {
  setStatusClass(button, button.dataset.correct)
})
if(shuffledQuestions.length > currentQuestionIndex + 1){
  nextButton.classList.remove('hide')
}else{
  startButton.innerText = 'Restart'
  startButton.classList.remove('hide')
}
}


function setStatusClass(element, correct){
  clearStatusClass(element)
  if(correct){
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass (element){
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const question = [
  {
    question: 'What is 2 + 2',
    answers:[
      {text: '4', correct: true},
      {text: '23', correct: false}

    ]
  }, 
  {
    question: 'What is the capital of Haiti',
    answers:[
      {text: 'Okap', correct:false},
      {text: 'Jacmel', correct: false},
      {text: 'Port-au-Prince', correct: true},
      {text: 'Inche', correct: false},


    ]
  }, 
  {
    question: 'When did Haiti took its independence',
    answers:[
      {text: 'May 18 1779', correct: false},
      {text: 'January 1 1804', correct: true}

    ]
  }, 
  {
    question: 'When did the Roswell UFO incident occurred',
    answers:[
      {text: 'June 7 1996', correct: false},
      {text: 'July 8 1947', correct: true}

    ]
  }, 

]