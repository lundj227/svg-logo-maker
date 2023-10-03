const fs = require('fs');
const inquirer = require('inquirer');
const generateLogo = require('./lib/shapes.js')

function writeSVG(){
    inquirer
        .prompt([
            {
                type: 'confirm',
                message: 'Welcome to the SVG logo creator please press confirm.',
                name: 'welcome'
            },
            {
                type: 'input',
                message: 'Enter in exactly 3 characters you would like to have in your logo.',
                name: 'logoChars'
            },
            {
                type: 'input',
                message: 'What color would you like the text to be? (Enter a keyword or hexadecimal number)',
                name: 'textColor'
            },
            {
                type: 'list',
                message: 'Please select a shape for your logo.',
                choices: [
                    'Circle', new inquirer.Separator(),
                    'Triangle', new inquirer.Separator(),
                    'Square'
                ],
                name: 'logoShape'
            },
            {
                type: 'input',
                message: 'What color would you like the shape to be? (Enter a keyword or hexadecimal number)',
                name: 'shapeColor'
            }
        ]).then((response) => fs.appendFile('./examples/logo.svg', generateLogo(response), (err) => {
            if(err) throw err;
            console.log('Your new SVG Logo has been created!')
        }));
    }
writeSVG();