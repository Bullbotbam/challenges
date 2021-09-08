// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const { resolve } = require("path");

// TODO: Create an array of questions for user
const questions = () => {
  return inquirer.prompt([
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
      type: "confirm",
      name: "tableOfContent",
      message: "Please enter a table of content",
    },
    {
      type: "input",
      name: "installation",
      message: "How do you install this project?",
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
      choices: ["Apache", "GNU", "MIT", "Open Data Commons"],
    },
    {
      type: "input",
      name: "contributing",
      message: "Who aassisted or contributed to this project?",
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
  ]);
};

// TODO: Create a function to initialize app
function init() {
  //start inquirer
  inquirer.prompt(questions).then((response) => {
    writeFile(response);
    console.log("working");
  });
}
const writeFile = (data) => {
  return new Promise((resolve, reject) => {
    // TODO: Create a function to write README file
    fs.writeToFile("./dist/README.md", generateMarkdown(data), (err) => {
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
// Function call to initialize app
init();
