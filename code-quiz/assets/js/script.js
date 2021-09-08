// const startButton = document.getElementById("beginBtn");
// startButton.addEventListener("click", function () {
//   alert("did something");
// });

// var sec = 10;
// var time = setInterval(myTimer, 1000);
// function myTimer() {
//   document.getElementById("timerBtn").innerHTML = sec + " seconds remaining";
//   sec--;
//   if (sec == -1) {
//     clearInterval(time);
//     alert("Times up!!");
//   }
// }

function buildQuiz() {
  // variable to store the HTML output
  const output = [];
  console.log(output);
  // for each question...
  myQuestions.forEach((currentQuestion, questionNumber) => {
    // variable to store the list of pisssible answers
    const answers = [];
    console.log(myQuestions);
    // to keep track of each available answer
    for (letter in currentQuestion.answers) {
      //   // 1. Create the button
      //   var button = document.createElement("button");
      //   button.innerHTML = output.value;

      //   // 2. Append somewhere
      //   var body = document.getElementsByTagName("body")[0];
      //   body.appendChild(button);

      //   // 3. Add event handler
      //   button.addEventListener("click", function () {
      //     alert("did something");
      //   });

      // ...add an html radio button
      answers.push(`<label>
          <input type="radio" name="question${questionNumber}" value="${letter}">
          ${letter} :
          ${currentQuestion.answers[letter]}
        </label>`);
    }

    // add this question and answer to the output
    output.push(
      `<div class="question"> ${currentQuestion.question} </div>
          <div class="answer"> ${answers.join("")} </div>`
    );
    console.log(output);
  });

  // combine our output list into one string of HTML and put it on the page
  // quizContainer.innerHTML = output.join("");
  quizQuestions.innerHTML = myQuestions;
}
var finalScore;
function showResults() {
  // gather answer containers from our quiz
  const answerContainers = quizContainer.querySelectorAll(".answers");

  // keep track of user's answers
  let numCorrect = 0;

  // for each question...
  myQuestions.forEach((currentQuestion, questionNumber) => {
    // find selected answer
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    // if answer is correct
    if (userAnswer === currentQuestion.correctAnswer) {
      // add to the number of correct answers
      numCorrect++;

      // color the answers green
      answerContainers[questionNumber].style.color = "lightgreen";
    }
    // if answer is wrong or blank
    else {
      // color the answers red
      answerContainers[questionNumber].style.color = "red";
    }
  });

  // show number of correct answers out of total
  resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
}

let timerKeeper = document.getElementById("timer");

const quizContainer = document.getElementById("quiz");
const quizQuestions = document.getElementsByClassName("questions");
const quizAnswers = document.getElementsByClassName("answers");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");

const myQuestions = [
  {
    question: "When was JavaScript first introduced?",
    answers: {
      a: "1961",
      b: "1999",
      c: "1995",
    },
    correctAnswer: "c",
  },
  {
    question: "JavaScript is derived from Java.",
    answer: {
      a: "True",
      b: "False",
      c: "Only part of the structure was derived from Java",
    },
    correctAnswer: "b",
  },
  {
    question: "Which of the following is not a data type",
    answer: {
      a: "boolean",
      b: "script",
      c: "number",
    },
    correctAnswer: "b",
  },
  {
    question: "Which of these are not used in a string?",
    answer: {
      a: "numbers",
      b: " letters",
      c: "array",
    },
    correctAnswer: "c",
  },
  {
    question: "What does null or undefined stand for?",
    answer: {
      a: "empty",
      b: "an error",
      c: "data type",
    },
    correctAnswer: "a",
  },
];

// display quiz right away
buildQuiz();
// on submit, show results
submitButton.addEventListener("click", showResults);
