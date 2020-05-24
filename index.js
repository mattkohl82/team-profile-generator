// Global Varibles
const fs = require("fs");
const inquirer = require("inquirer");
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const generateHTML = require('./src/generateHtml')


const employees = []

//Manager questions
const managerQuestions = () => {
    console.log(`
=================
Create a Team Profolio!!
=================
    `)
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
            name: 'id',
            message: 'What is the Project Managers Employee ID?',
            validate: idInput => {
                if (idInput) {
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
            message: 'What is Project Managers email adress?',
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
            name: 'number',
            message: 'What is the Project Managers office number?',
            validate: officeInput => {
                if (officeInput) {
                  return true;
                } else {
                  console.log('Please enter a valid office number!');
                  return false;
                }
            }
        }, 
    ])
    .then(data => {
    const manager = new Manager(data.name, data.id, data.email, data.officeNumber)
    employees.push(manager)
    typeQuestion()
    })
}

//Questions for an Engineer
const engQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message : 'What is the Enginners name?',
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('Please enter a name for the Engineer!');
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is Engineers email adress?',
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
            name: 'id',
            message: 'What is the Project Managers Employee ID?',
            validate: idInput => {
                if (idInput) {
                  return true;
                } else {
                  console.log('Please enter a valid employee ID!');
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is the Engineers Github?',
            validate: idInput => {
                if (idInput) {
                  return true;
                } else {
                  console.log('Please enter a valid github!');
                  return false;
                }
              }
        }
    ])
    .then(data => {
        const engineer = new Engineer(data.name, data.id, data.email, data.github)
        employees.push(engineer)
        typeQuestion()
    })
}

//Questions for an Intern
const intQuestion = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message : "What is the Intern's name?",
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('Please enter a name for the Intern!');
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is Intern's email adress?",
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
            name: 'id',
            message: "What is the Intern's Employee ID?",
            validate: idInput => {
                if (idInput) {
                  return true;
                } else {
                  console.log('Please enter a valid employee ID!');
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'school',
            message: 'What school did the Intern attend?',
            validate: idInput => {
                if (idInput) {
                  return true;
                } else {
                  console.log('Please enter a valid school!');
                  return false;
                }
              }
        }
    ])
    .then(data => {
        const intern = new Intern(data.name, data.id, data.email, data.school)
        employees.push(intern)
        typeQuestion()
    })
}

//Question to add a Engineer or an Intern
const typeQuestion = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'addToTeam',
            message: 'Would you like to add a Engineer or Intern?',
            choices: [
                'Engineer',
                'Intern',
                'no more'
                ]
        }
      ]).then(data => {
        switch(data.addToTeam) {
            case 'Engineer':
                engQuestions();
                break;
            case 'Intern':
                intQuestion();
                break;
            case 'I don\'t want to add any other members':
                return console.table(employees)
                //generateHTML(employees);
                
                break;
            //default: 
                //generateHTML);
        }
    });
}

// function call to initialize program
const init = () => {
  console.log(`
==========================
Lets make a Team Portfolio
==========================
`);
managerQuestions()
}

// function call to initialize program
init();

