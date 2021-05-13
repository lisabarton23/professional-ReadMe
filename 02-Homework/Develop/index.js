// TODO: Include packages needed for this application
const inquirer = require ('inquirer');
const fs = require ('fs');
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
// inquirer.prompt ( [









// ])
const questions = [{ type: "input",
message : "What is your project name?",
name: "title",
},
{type: "input",
message: " Write a description regarding your project",
name: "description"

},
{type :"list",
message : "What license would you like to use?",
choices: ["MIT", "ISC", "GPL"],
name : "license",

},

];
//project name, project description, github user,name, linked url...
//build out questions with the inqurier and then im going to console log response. once i recive responses build out functionality to create readme file.
//how do i format this in a presentable way
// TODO: Create a function to write README file
function writeToFile(fileName, data) {



}

// TODO: Create a function to initialize app
function init() {

inquirer.prompt(questions)
.then((data) => {
    writeToFile("README.md", generateMarkdown(data))
})

}

// Function call to initialize app
init();
