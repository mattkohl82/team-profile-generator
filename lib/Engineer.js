class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        //Github username
        this.github = github
        this.title = 'Engineer'
    }

    getGithub() {
        return `Github: ${ this.github }`
    }

    getRole(){
        return this.title


    }//Overridden to return 'Engineer
}

module.exports = Engineer;