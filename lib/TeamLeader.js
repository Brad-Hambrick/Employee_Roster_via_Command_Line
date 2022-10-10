const getResponses = require('./GetResponses');

class teamLeader extends getResponses {
    constructor(name, id, email, officeNumber) {
    super(name, id, email, officeNumber);
    }

    getRole() {
        return "Team Leader";
    }
}

module.exports = teamLeader;