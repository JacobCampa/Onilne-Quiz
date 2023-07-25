var timer = document.querySelector("#timer")
var score = document.querySelector("#score")
var question = document.querySelector("#question")
var quiz = document.querySelector("#displaybox")
var start = document.querySelector("#start")
var button = document.querySelector(".buttons")
var a = document.querySelector("#answer1")
var b = document.querySelector("#answer2")
var c = document.querySelector("#answer3")
var d = document.querySelector("#answer4")
var popUp = document.querySelector("#result")
var currentScore = 0
var secondsLeft = 60

var questions = ["How many strikes are in a perfect game?", "What is it called when your foot crosses the line?", "What is the hardet split to make?"]
var aChoices = ["10", "mulligan", "big four"]
var bChoices = ["11", "foul", "baby split"]
var cChoices = ["12", "strike", "7-10 plit"]
var dChoices = ["13", "spare", "washout"]

function questionOne () {
    question.textContent = questions[0]
    a.textContent  = aChoices[0]
    b.textContent  = bChoices[0]
    c.textContent  = cChoices[0]
    d.textContent  = dChoices[0]
}

function init() {
    document.getElementById("displaybox").hidden = true;
}

function runTest() {
    document.getElementById("displaybox").hidden = false;
    document.getElementById("welcome").hidden = true
    setTime()
    questionOne()
}

function correct() {
    currentScore++
    score.textContent = currentScore
    popUp.textContent = "Correct!"
}

function incorrect() {
    currentScore--
    score.textContent = currentScore
    popUp.textContent = "Incorrect!"
}

function setTime() {
    var timerInterval = setInterval(function() {
      secondsLeft--
      timer.textContent = secondsLeft + " seconds left"
  
      if(secondsLeft === 0) {
        clearInterval(timerInterval)
        
      }
  
    }, 1000);
  }


init()
start.addEventListener("click", runTest)

