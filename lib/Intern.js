class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school
        this.title = 'Intern'
    }

    getSchool() {
        return `School: ${ this.school }`

    }

    getRole() {
        return this.title

    }//Overridden to return 'Intern
}


module.exports = Intern;

