class Employee {
    constructor(name = '', id = Number , email = '') {
        this.name = name
        this.id = id
        this.email = email
    }

    getName() {
        return `${ this.name }`
    }

    getId() {
        return `ID: ${ this.id }`

    }

    getEmail() {
        return `Email: ${ this.email }`

    }

    getRole(){

    }//Returms 'Employee'
}

module.exports = Employee;