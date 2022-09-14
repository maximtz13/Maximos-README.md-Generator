// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of the project? (required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter a project name!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project. (required)',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please enter a project description!');
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmInstallation',
        message: 'Does your project require installation? (required)',
        default: false,
        validate: confirmInstallation => {
            if (confirmInstallation) {
                return true;
            } else {
                console.log('Please make a selection!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions.',
        when: ({ confirmInstallation }) => {
            if (confirmInstallation) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmUsage',
        message: 'Does you need to provide usage information? (required)',
        default: false,
        validate: confirmUsage => {
            if (confirmUsage) {
                return true;
            } else {
                console.log('Please make a selection!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage information.',
        when: ({ confirmUsage }) => {
            if (confirmUsage) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmContribution',
        message: 'Does you need to provide contribution guidelines? (required)',
        default: false,
        validate: confirmContribution => {
            if (confirmContribution) {
                return true;
            } else {
                console.log('Please make a selection!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please provide contribution guidelines.',
        when: ({ confirmContribution }) => {
            if (confirmContribution) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmTest',
        message: 'Does you need to provide test instructions? (required)',
        default: false,
        validate: confirmTest => {
            if (confirmTest) {
                return true;
            } else {
                console.log('Please make a selection!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please provide test instructions.',
        when: ({ confirmTest }) => {
            if (confirmTest) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmLicense',
        message: 'Is your project covered by a license? (required)',
        default: false,
        validate: confirmLicense => {
            if (confirmLicense) {
                return true;
            } else {
                console.log('Please make a selection!');
                return false;
            }
        }
    },
    {
        type: 'rawlist',
        name: 'license',
        message: "Please select your projects' license.",
        choices: ['Apache 2.0', 'BSD 3', 'GPL', 'LGPL', 'MIT', 'Mozilla Public License 2.0', 'ISC'],
        when: ({ confirmLicense }) => {
            if (confirmLicense) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username? (Required)',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address? (Required)',
        // refer to https://gist.github.com/Amitabh-K/ae073eea3d5207efaddffde19b1618e8
        validate: emailInput => {
            let valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput)
            if (emailInput && valid) {
                return true;
            } else if (emailInput && !valid) {
                console.log('.  Please enter a valid email');
                return false;
            } else {
                console.log('Please enter your email address!');
                return false;
            }
        }
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'README created!'
            });
        });
    });
};

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
        .then(answers => {
            return generateMarkdown(answers);
        })
        .then(readmeContent => {
            return writeToFile('./dist/README.md', readmeContent);
        })
        .then(writeToFileResponse => {
            console.log(writeToFileResponse);
        })
        .catch(err => {
            console.log(err);
        });
};

// Function call to initialize app
init();
