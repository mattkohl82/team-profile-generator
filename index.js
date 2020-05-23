// Global Varibles
const fs = require("fs");
const inquirer = require("inquirer");
const Employee = require('./lib/Employee')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const generateHTML = require('./src/generateHtml')

//Portfolio questions
const questions = () => {
    return inquirer.prompt([

        {
            type: 'input',
            name: 'name',
            message : 'What is the project managers name?',
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('Please enter the project managers name!');
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'employeeID',
            message: 'What is the Employee ID?',
            validate: employeeIDInput => {
                if (employeeIDInput) {
                  return true;
                } else {
                  console.log('Please enter a valid employee ID!');
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is their email adress?',
            validate: emailInput => {
                if (emailInput) {
                  return true;
                } else {
                  console.log('Please enter a valid email!');
                  return false;
                }
              }

        },
        {
            type: 'input',
            name: 'office',
            message: 'What is the managers office number?',
            validate: officeInput => {
                if (officeInput) {
                  return true;
                } else {
                  console.log('Please enter a valid office number!');
                  return false;
                }
            }
        },
        {
            type: 'list',
            name: 'addToTeam',
            message: 'Would you like to add a Engineer or Intern?',
            choices: [
                'Engineer',
                'Intern'
            ]
        },
    ]);
    // .then(({ addToTeam }) => {
    //     if (addToTeam === 'Engineer') {

    //     } else ( 'Intern') {

    //     }
    // }

} 



// function to initialize program
const init = () => {
    console.log(`
=================
Create a Team Profolio!!
=================
`);
questions()
    .then(data => {
        fs.writeFile('./dist/index.html', generateHTML(data), err => {
            if (err) throw err;
            console.log('Your HTML file has been created in the "dist" folder')
        });
    })
}

// function call to initialize program
init();