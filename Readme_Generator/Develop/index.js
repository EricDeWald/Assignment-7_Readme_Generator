
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')


const questions = [{
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
},{
    type: 'input',
    message: 'Enter contact email: ',
    name: 'pEmail'
},{
    type: 'input',
    message: 'Enter GitHub: ',
    name: 'pGitHub'
}]

function writeToFile(data) {
    fs.writeFile("ReadMe.md", generateMarkdown(data), (err) => {
        
        if (err) {
            console.log(err);
        }
        console.log('Successful');
    })
}
function init() {
    inquirer.prompt(questions).then((data)=>{writeToFile(data)})
}

init();
