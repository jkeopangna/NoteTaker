const inquirer = require('inquirer');
const fs = require('fs');
// const util = require('utils')
const generateMarkdown = require('./Develop/utils/generateMarkdown');



// array of questions for user
// const questions = 
inquirer.prompt ([
    
    {
        type: 'input',
        message: 'What is the title of your application?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Description of application:',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Installation instructions:',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Usage information:',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Contributions:',
        name: 'contributions'
    },
    {
        type: 'input',
        message: 'Testing:',
        name: 'tests'
    },
    {
        type: 'list',
        message: 'Licenses:',
        choices: ['BSD', 'MIT', 'ISC'],
        name: 'license'
    },
    {
        type: 'input',
        message: 'Github username for questions:',
        name: 'github'
    },
    {
        type: 'input',
        message: 'Email for further questions:',
        name: 'email'
    },
])

.then((data) => {
    
    // const filename = `${data.name.toLowerCase().split(' ').join('')}.md`;

/////////////////////////////////////////////////////////////////////    

// function to write README file
function writeToFile() {
   const filename = `${data.title.toLowerCase().split(' ').join('')}.md`;
    fs.writeFile(filename, generateMarkdown(data), (err) =>
    err ? console.log(err) : console.log('Success!')
    )
    // generateMarkdown(data)
}
writeToFile();

//////////////////////////////////////////////////////////////////////////////

// function to initialize program
// function init() {
// }

// function call to initialize program
// init();


// generateMarkdown(data)
});