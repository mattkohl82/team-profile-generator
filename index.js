// Global Varibles
const fs = require("fs");
const inquirer = require("inquirer");
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
//const generateHTML = require('./src/generateHtml')

//Array for employees
const employees = []

//Manager questions
const managerQuestions = () => {
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
    const manager = new Manager(data.name, data.id, data.email, data.number, data.icon)
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
            message : "What is the Engineer's name?",
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
            message: "What is Engineer's email adress?",
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
            message: "What is the Engineer's Employee ID?",
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
            message: "What is the Engineer's Github?",
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
        const engineer = new Engineer(data.name, data.id, data.email, data.github, data.icon)
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
        const intern = new Intern(data.name, data.id, data.email, data.school, data.icon)
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
                'No more employees to add'
                ]
        }
      ]).then(data => {
        switch(data.addToTeam) {
            case 'Engineer':
                engQuestions()
                break;
            case 'Intern':
                intQuestion()
                break;
            case 'No more employees to add':
                generateHTML()
                break;
        }
    });
}

function generateHTML ()  {
  const html = [];
  const startHtml =`
<!DOCTYPE html> 
<html lang="en"> 
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<title>My Team</title>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
<link rel="stylesheet" href="style.css">
</head>
<body>
<header class="bg-success">
  <div class="container flex-row justify-space-between align-center py-3">
      <h1 class="page-title text-dark text-center">The Team</h1>
  </div>
</header>
  <div class="container mt-5">
  <div class="row mx-auto d-flex justify-content-center">
`
html.push(startHtml);
  for (let i = 0; i < employees.length; i++) {
      let person = `
      <div class="col-sm-3 mb-5">
      <div class="card bg-light" style="max-width: 18rem; min-width: 14rem;">
      <div class="card-header text-dark text-center bg-success mb-3">
          <h2>${ employees[i].name }</h2>
          <h3>${ employees[i].icon }${ employees[i].title }</h3>
      </div>
      <div>
          <p class="card-text m-3 border border-dark text-center"><i class="far fa-id-badge mr-2"></i>Employee ID: ${ employees[i].id }</p>
          <p class="card-text m-3 border border-dark text-center"><i class="fas fa-at mr-2"></i>Email: <a href= "mailto:${employees[i].email}"> ${ employees[i].email } </a></p>
      `
      
      if (employees[i].number){
          person += `
          <p class="card-text m-3 border border-dark text-center"><i class="fas fa-door-open mr-2"></i>Office number: ${ employees[i].number }</p>
          `
      }
      if (employees[i].github){
          person += `
          <p class="card-text m-3 border border-dark text-center"><i class="fab fa-github mr-2"></i>GitHub: <a href="https://github.com/${ employees[i].github }" target="_blank">${ employees[i].github }</a></p>
          `
      }
      if (employees[i].school){
          person += `
          <p class="card-text m-3 border border-dark text-center"><i class="fas fa-graduation-cap mr-2"></i>School: ${ employees[i].school }</p>
          `
      }
      
      person +=
      `
      </div>
      </div>
      </div>
      `;
      html.push(person)
  }
  
const endHTML = `
      </div>
      </div>
      <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
  </body>
</html>
`
html.push(endHTML);

fs.writeFile('./dist/index.html', html.join(""), err => {
  if (err) throw err;
  console.log('Team Profile created! Check out index.html in dist directory to see it!')
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

