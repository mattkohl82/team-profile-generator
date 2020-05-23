// function to generate markdown for README
const generateHTML = data => {
    return `

    ${ data.name }
    ${ data.employeeID }
    ${ data.email }
    ${ data.office }

    
    
    
    `
  }
  
  module.exports = generateHTML;