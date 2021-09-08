const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const saveScoreButton = document.querySelector("#save-score");

let shuffleQuestions, currentQuestionIndex;
startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestion();
});
// const resetGame = nextButton.addEventListener("click", startGame);

// gameOver = startButton.innerText("Reset Game");

var timerEl = document.getElementById("countdown");
function countdown() {
  var timeLeft = 25;

  // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
    if (timeLeft >= 1) {
      timeLeft--;
      timerEl.textContent = timeLeft + " secs left...";
    } else {
      timerEl.textContent = " ";
      nextButton.innerText = "What's Next?";

      questionContainerElement.classList.add("hide");

      document.getElementById("countdown").innerHTML = "Out of Time!";
      document.getElementById("score").innerHTML = "Your Score: " + scoreCounter;
      postGameReset();
      clearInterval(timeInterval);

      nextButton.classList.remove("hide");
      resetState();
    }
  }, 1000);
}
// startBtn.onclick = countdown;
// timerId = setInterval(clockTick, 1000);
var wrongAnswerTime = function () {
  timeInterval = timeInterval - 10;
};

function startGame() {
  startButton.classList.add("hide");
  shuffleQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove("hide");
  setNextQuestion();
  countdown();
}
function questOver() {
  resetState();
  showQuestion(shuffleQuestions[currentQuestionIndex]);
}
function setNextQuestion() {
  resetState();
  showQuestion(shuffleQuestions[currentQuestionIndex]);
}


function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

function postGameReset() {
  clearStatusClass(document.body);
  nextButton.classList.remove("hide");
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}
function resetState() {
  clearStatusClass(document.body);
  nextButton.classList.add("hide");
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}
function selectAnswer(e) {
  // const timeClockDown = timeClock - 20;
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerButtonsElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });

  if (shuffleQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide");
  } else {
    startButton.innerText = "Restart";
    startButton.classList.remove("hide");    
    clearInterval(timeInterval);
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
     scoreCounter++;
    console.log(scoreCounter);
  } else {
    element.classList.add("wrong");
  }
}
function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

const questions = [
  {
    question: "When was JavaScript first introduced?",
    answers: [
      { text: "1995", correct: true },
      { text: "1972", correct: false },
      { text: "1999", correct: false },
      { text: "1964", correct: false },
    ],
  },
  {
    question: "JavaScript is derived from Java.",
    answers: [
      { text: "True", correct: false },
      { text: "False", correct: true },
      {
        text: "Only part of the structure was derived from Java",
        correct: false,
      },
      { text: "All of the above", correct: false },
    ],
  },
  {
    question: "What does null or undefined stand for?",
    answers: [
      { text: "a string", correct: false },
      { text: "an error", correct: false },
      { text: "data type", correct: false },
      { text: "empty", correct: true },
    ],
  },
  {
    question: "Which of the following is not a data type",
    answers: [
      { text: "boolean", correct: false },
      { text: "float", correct: false },
      { text: "script", correct: true },
      { text: "number", correct: false },
    ],
  },
  {
    question: "Which of these are not used in a string?",
    answers: [
      { text: "number", correct: false },
      { text: "an array", correct: true },
      { text: "letters", correct: false },
      { text: "code", correct: false },
    ],
  },
];
const finalChoices = [
  {
    question: "What would you like to do next?",
    answers: [
      { Choice: "Play again", option: true },
      { Choice: "Save score", option: true },
      { Choice: "High scores", option: true },
      { Choice: "Exit", option: true },
    ],
  },
  {
    question: "Which of these are not used in a string?",
    answers: [
      { text: "number", correct: false },
      { text: "an array", correct: true },
      { text: "letters", correct: false },
      { text: "code", correct: false },
    ],
  },
];

let scoreCounter = document.querySelector("#score").innerHTML;
localStorage.setItem("Your score", scoreCounter);
scoreCounter = 0;
// const output = [];
// console.log(output);
// // for each question...
// questions.forEach((currentQuestion, questionNumber) => {
//   // variable to store the list of pisssible answers
//   const answers = [];
//   console.log(questions);
//   // and for each available answer...
//   for (letter in currentQuestion.answers) {
//     // 1. Create the button
//     var button = document.createElement("button");
//     button.innerHTML = output.value;

//     // 2. Append somewhere
//     var body = document.getElementsByTagName("body")[0];
//     body.appendChild(button);

//     // 3. Add event handler
//     button.addEventListener("click", function () {
//       alert("did something");
//     });
// const restart = setInterval;

// TODO: Save email and password to localStorage
// localStorage.setItem("email", uesrEmail);
// localStorage.setItem("password", userPassword);
var msgDiv = document.querySelector("#msg");
function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute("class", type);
}

saveScoreButton.addEventListener("click", function (event) {
  event.preventDefault();

});
