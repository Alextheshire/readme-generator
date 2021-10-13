const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your project called?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Give a detailed description of your project.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license would you like to use?',
        choices: ['MIT', 'Apache-2.0', 'AGPL-3.0', 'GPL-3.0', 'LGPL-3.0', 'MPL-2.0', 'BSL-1.0', 'Unlicense']
    },
    {
        type: 'input',
        name: 'install',
        message: 'What are the installation instructions for your project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What are the usage instructions for your project?'
    },
    {
        type: 'input',
        name: 'graphic',
        message: 'Please type the relative file path or URL for a screenshot or gif of your project'
    },
    {
        type: 'input',
        name: 'livelink',
        message: 'What is the url to the deployed application?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your Github username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    }
];

// TODO: Create a function to write README file
const generateReadme = ({name, description, license, install, usage, graphic, livelink, github, email}) =>
`# ${name}

## Description

${description}

![badge](https://img.shields.io/badge/license-${license}-green)


## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Questions](#questions)
  * [License](#license)
    
    
## Installation
    
  _Follow these steps to install this application:_

  ${install}
      
## Usage

  _Instructions for use:_

  ${usage}
  
  ![Media of application](${graphic})
        
  [Link to deployed project](${livelink})  
## Questions
      
  If you have any questions, please reach out via Github or my email.
  
  _Contact Info:_

  GitHub: [${github}](https://github.com/${github})

  Email: [${email}](mailto:${email})
    
## License

      
  _This application has the ${license} License._
      
  For more information please view the [license description](https://choosealicense.com/licenses/${license}).
  
  
`

// TODO: Create a function to initialize app
const init = () => {
    inquirer.prompt(questions)
        .then((data) => fs.writeFileSync("Readme.md", generateReadme(data)))
        .then(() => console.log("success"))
        .catch((error) => console.error(error));
}

// Function call to initialize app
init();
