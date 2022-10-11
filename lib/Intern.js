const getResponses = require('./GetResponses');

class intern extends getResponses {
    constructor(name, id, email, school) {
        super(name, id, email);

        this.school = school
        
        }

        getSchool() {
            return this.school;
        }

    getRole() {
        return "Intern";
    }
}

module.exports = intern;