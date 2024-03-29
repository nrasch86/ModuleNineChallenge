// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// Array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Please enter a project title:',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please enter a project description:',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Please enter installation instructions:',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Please enter usage information:',
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'Please enter contribution guidelines:',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Please enter test instructions:',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Please choose a license for your project:',
        choices: ['MIT', 'BSD', 'Apache 2.0', 'GNU', 'ISC', 'None'],
      },
      {
        type: 'input',
        name: 'github',
        message: 'Please enter your GitHub username:',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address:',
      }
      
];

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Success! README.md Created!')
    );
}


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions) // corrected this line
    .then((answers) => {
        const markdownContent = generateMarkdown(answers);
        writeToFile('./output/README.md', markdownContent);
    });
}

// Function call to initialize app
init();
