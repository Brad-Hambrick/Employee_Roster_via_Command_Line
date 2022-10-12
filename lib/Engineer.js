// Engineer class that extends parent class GetResponses

const getResponses = require('./GetResponses');

class engineer extends getResponses {
    constructor(name, id, email, github) {
    super(name, id, email);

    this.github = github
    }
    
    getGitHub() {
        return this.github;
    }

    getRole() {
        return "Engineer";
    }
}

module.exports = engineer;