const getResponses = require('./GetResponses');

class engineer extends getResponses {
    constructor(name, id, email, officeNumber) {
    super(name, id, email, officeNumber);
    }
    
    getRole() {
        return "Engineer";
    }
}

module.exports = engineer;