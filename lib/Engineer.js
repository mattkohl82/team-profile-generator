const Employee = require('./Employee')

class Engineer extends Employee{
    constructor(name, id, email, github) {
        super(name, id, email)
        //Github username
        this.github = github
        this.title = 'Engineer'
        this.icon = '<i class="fas fa-tools mr-2"></i>'
    }

    getGithub() {
        return this.github
    }

    getRole(){
        return this.title


    }//Overridden to return 'Engineer
}

module.exports = Engineer;