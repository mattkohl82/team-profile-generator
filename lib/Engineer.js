class Engineer extends Employee {
    constructor(github = '') {
        //Github username
        this.github = github
    }

    getGithub() {
        return `Github: ${ this.github }`
    }

    getRole(){

    }//Overridden to return 'Engineer
}

module.exports = Engineer;