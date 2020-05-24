const Employee = require('./Employee')

class Manager extends Employee{
    constructor(name, id, email, number) {
        super(name, id, email)
        this.number = number
        this.title = 'Manager'
    }

    getRole() {
        return this.title

    }//Overridden to return 'Manager'
}

module.exports = Manager;