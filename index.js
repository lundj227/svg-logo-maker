const fs = require('fs');
const inquirer = require('inquirer');
const { Circle, Triangle, Square } = require('./lib/shapes.js');

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
        ]).then((response) => fs.appendFile('./examples/logo.svg', (response) =>{
            var svg;
            if(response.logoShape === 'Circle'){
                svg = new Circle();
            }else if (response.logoShape === 'Triangle'){
                svg = new Triangle();
            }else if (response.logoShape === 'Square'){
                svg =  new Square();
            }
            svg.createLogoChars(response.logoChars);
            svg.createTextColor(response.textColor);
            svg.createLogoShape(response.logoShape);
            svg.createShapeColor(response.shapeColor);
            svg.makeShape();
        }, (err) => {
            if(err) throw err;
            console.log('Your new SVG Logo has been created!')
        }));
    }
writeSVG();