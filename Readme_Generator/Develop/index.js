// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input

const questions = [{
    type: 'input',
    message: 'Enter readme file name: ',
    name: 'fileName'
},{
    type: 'input',
    message: 'Enter project title: ',
    name: 'pTitle'
},{
    type: 'input',
    message: 'Enter project description: ',
    name: 'pDescription'
},{
    type: 'input',
    message: 'Enter installation instructions: ',
    name: 'pInstallInstructions'
},{
    type: 'input',
    message: 'Enter usage infromation: ',
    name: 'pUsageInfo'
},{
    type: 'input',
    message: 'Enter contribution guidelines: ',
    name: 'pContribution'
},{
    type: 'input',
    message: 'Enter test instructions: ',
    name: 'pTestInstructions'
},{
    type: 'list',
    name: 'license',
    message: 'Choose a license: ',
    choices:["NONE","Appache 2.0","GPL 3.0","MIT"]
}
];



// TODO: Create a function to write README file

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log(err);
        }
        console.log('Successful');
    })
    console.log(writeToFile(fileName, data))
}

// TODO: Create a function to initialize app



function init() {
    inquirer.prompt([...questions])

    .then((data) => {return fileName, data}).then(writeToFile(fileName,data)).then(generateMarkdown(data))
    // .catch(err => {
    //     console.log(err);
    // })
    
    // generateMarkdown(data)
    // writeToFile(fileName, data)
}

// Function call to initialize app
init();
