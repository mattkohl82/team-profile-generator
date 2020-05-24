const fs = require('fs');
const employees = require('../index');

const generateHTML = (data) => {
    for (let i = 0; i < employees.length; i++) {
        return `
        <h1> ${ this.name } </h1>
        <h1> ${ this.title } </h1>
        <h1> ${ this.id } </h1>
        <h1> ${ this.school } </h1>
        <h1> ${ this.github } </h1>
        <h1> ${ this.number } </h1>
        <h1> ${ this.email } </h1>
        `
        
    }
    fs.writeFile('./dist/index.html', err => {
            if (err) throw err;
            console.log('Team Profile created! Check out index.html in dist directory to see it!')
    })
}

module.exports = { generateHTML };