class Intern extends Employee {
    constructor(school = '') {
        this.school = school
    }

    getSchool() {
        return `School: ${ this.school }`

    }

    getRole() {

    }//Overridden to return 'Intern
}


module.exports = Intern;