const Employee = require('./Employee')

class Manager extends Employee{
    constructor(name, id, email, number) {
        super(name, id, email)
        this.number = number
        this.title = 'Manager'
        this.icon = '<i class="fas fa-clipboard mr-2"></i>'
    }

    getRole() {
        return this.title

    }//Overridden to return 'Manager'
}

module.exports = Manager;