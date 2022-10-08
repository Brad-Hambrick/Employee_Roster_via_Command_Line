const { add } = require("lodash");

class getResponses {
    renderLeaderInfo(leaderQuestions) {
        let leaderName = leaderQuestions.leaderName;
        let title = leaderQuestions.title;
        let leaderEmpId = leaderQuestions.TLemployeeID;
        let leaderEmail = leaderQuestions.TLemailAddress;
        let leaderOffice = leaderQuestions.TLofficeNumber;
    }

    renderAddEmployee(addEmployee) {
        let newEmpType = addEmployee.choices.value
    }

    renderEngineer(engineerQuestions) {
        let engName = engineerQuestions.engineerName;
        let engTitle = engineerQuestions.title;
        let engEmpId = engineerQuestions.engEmpId;
        let engEmailAddress = engineerQuestions.engEmailAddress;
        let engOfficeNumber = engineerQuestions.engOfficeNumber;
    }

    renderIntern(internQuestions) {
        let internName = internQuestions.internName;
        let internTitle = internQuestions.title;
        let internEmployeeId = internQuestions.internEmployeeId;
        let internEmailAddress = internQuestions.internEmailAddress;
        let internOfficeNumber = internQuestions.internOfficeNumber;
    }
    
}

module.exports = getResponses;