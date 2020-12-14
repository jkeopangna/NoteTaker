// const index = require('../index')

// function to generate markdown for README
function generateMarkdown(data) {
  return ` # ${data.title}

  ---

  ## Description

  ${data.description}

  ## Goals
  1. Using Inquirer NPM, the prompt function provides a template to generate readme files
  2. Executing through the terminal provides a series of prompts from objects containing questions that can be edited for personalization
  3. A screenshot and link are provided to preview the application

  ![Preview](assets/preview.jpg)

  ## Technology Used

  * Node JS
  * Inquirer
  * Javascript

  ## Table of Contents

  [Installation](#installation)<br>
  [Usage](#usage)<br>
  [Contributions](#contributions)<br>
  [Description](#description)<br>

  ## Installation
  
  ${data.installation}

  ## Usage

  ${data.usage}

  ## Contributions

  ${data.contributions}

  ## Testing

  ${data.tests}

  ## License
  
  [![License: ${data.license}](https://img.shields.io/badge/License-${data.license}-blue.svg)](https://opensource.org/licenses/MIT)<br>
  For more information use the link provided.

  ## Contact For Questions

  Github: [${data.github}](https://github.com/jkeopangna/readMeGenerator)<br>
  Email: [${data.email}](https://gmail.com)`

 
}

module.exports = generateMarkdown;
