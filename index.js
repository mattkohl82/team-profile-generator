// Global Varibles
const fs = require("fs");
const inquirer = require("inquirer");
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const generateHTML = require('./src/generateHtml')

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
            name: 'office',
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
const engQuestions = (typeData) => {
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
    .then(engData => {
        const engineer = new Engineer(engData.name, engData.id, engData.email, engData.github)
        employees.push(engineer)
        typeQuestion()
    })
}

//Questions for an Intern
const intQuestion = (typeData) => {
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
    .then(intData => {
        const intern = new Intern(intData.name, intData.id, intData.email, intData.school)
        employees.push(intern)
        typeQuestion()
    })
}

//Question to add a Engineer or an Intern
const typeQuestion = (data) => {
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
    ]).then(typeData => {
        if (typeData.addToTeam === 'Engineer') {
            engQuestions()
        } else if (typeData.addToTeam === 'Intern') {
            intQuestion()
        }
    })
}




//Array containing the employees made
const employees = []

// // function call to initialize program
managerQuestions()
  .then(employees => {
    return (employees);
  })