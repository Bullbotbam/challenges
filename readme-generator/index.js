// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
// const { resolve } = require("path");
// const path = require("path");

// let getUserRepos = function (user) {
//   // format the github api url
//   const apiUrl = "https://api.github.com/users/" + user + "/repos";

//   // make a get request to url
//   fetch(apiUrl)
//     .then(function (response) {
//       // request was successful
//       if (response.ok) {
//         console.log(response);
//         response.json().then(function (data) {
//           console.log(data);
//           displayRepos(data, user);
//         });
//       } else {
//         alert("Error: " + response.statusText);
//       }
//     })
//     .catch(function (error) {
//       alert("Unable to connect to GitHub");
//     });
// };

// TODO: Create an array of questions for user
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the name of this project?",
  },
  {
    type: "input",
    name: "userName",
    message: "What is your name?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
  {
    type: "input",
    name: "description",
    message: "Please describe this project.",
  },
  {
    type: "confirm",
    name: "tableOfContent",
    message: "Please enter a table of content",
  },
  {
    type: "input",
    name: "installation",
    message: "How is this project installed?",
  },
  {
    type: "input",
    name: "purpose",
    message: "What is the purpose of this project?",
  },
  {
    type: "list",
    name: "license",
    message: "What licenses are required for this project?",
    choices: ["None", "MIT", "Apache", "GNU", "Open Data Commons"],
  },
  {
    type: "input",
    name: "contributing",
    message: "Who assisted or contributed to this project?",
  },
  {
    type: "input",
    name: "issues",
    message: "Any noted issues with this project?",
  },
  {
    type: "confirm",
    name: "testing",
    message: "Are tests included for this project?",
  },
  {
    name: "link",
    message: "What is the link for this project?",
  },
];
const writeFile = (response) => {
  return new Promise((resolve, reject) => {
    // TODO: Create a function to write README file
    fs.writeFileSync("./dist/README.md", generateMarkdown(response), (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: "file created",
      });
    });
  });
};
// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(
      /* Pass your questions in here */
      questions
    )
    .then((generateMarkdown) => {
      writeFile(generateMarkdown);
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
}

// Function call to initialize app
init();
