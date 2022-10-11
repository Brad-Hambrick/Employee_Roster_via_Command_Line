const getResponses = require('./GetResponses');

class teamLeader extends getResponses {
    constructor(name, id, email, officeNumber,) {
    super(name, id, email);

    this.officeNumber = officeNumber
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return "Team Leader";
    }
}

module.exports = teamLeader;