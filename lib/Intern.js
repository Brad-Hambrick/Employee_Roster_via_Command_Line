const getResponses = require('./GetResponses');

class intern extends getResponses {
    constructor(name, id, email, officeNumber) {
        super(name, id, email, officeNumber);
        }

    getRole() {
        return "Intern";
    }
}

module.exports = intern;