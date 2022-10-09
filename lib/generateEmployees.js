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

    static makeHomepage(answers) { 
        return `
    
    const mainContainer = document.querySelector('main')
    
    var newEmp = [];
    
    function generatePage() {
        let header = document.createElement('h1')
        header.setAttribute('class', 'header')
        header.innerHTML = 'My Team'
        let empCard = document.createElement('div')
        empCard.setAttribute('class', 'empCard')
        let empName = document.createElement('div')
        empName.setAttribute('class', 'empName')
        empName.innerHTML = '${answers.leaderName}'
        let position = document.createElement('div')
        position.setAttribute('class', 'position')
        position.innerHTML = '${answers.leaderTitle}'
        let empId = document.createElement('div')
        empId.setAttribute('class', 'empId')
        empId.innerHTML = ' Employee ID: ${answers.TLemployeeID}'
        let empEmail = document.createElement('div')
        empEmail.setAttribute('class', 'empEmail')
        empEmail.innerHTML = '  Email address: ${answers.TLemailAddress}'
        let empOfficeNum = document.createElement('div')
        empOfficeNum.setAttribute('class', 'empOfficeNum')
        empOfficeNum.innerHTML = '  Office Number${answers.TLofficeNumber}'
        
        mainContainer.appendChild(header)
        mainContainer.appendChild(empCard)
        empCard.appendChild(empName)
        empName.appendChild(position)
        empCard.appendChild(empId)
        empCard.appendChild(empEmail)
        empCard.appendChild(empOfficeNum)
        if(newEmp.length > 0) {
            newCard()
        }
        
    }
    generatePage();
    
    function newCard() {
        
        for(let i = 0; i<newEmp.length; i++) {
            let empCard = document.createElement('div')
            empCard.setAttribute('class', 'empCard')
            let empName = document.createElement('div')
            empName.setAttribute('class', 'empName')
            let position = document.createElement('div')
            position.setAttribute('class', 'position')
            let empId = document.createElement('div')
            empId.setAttribute('class', 'empId')
            let empEmail = document.createElement('div')
            empEmail.setAttribute('class', 'empEmail')
            let empOfficeNum = document.createElement('div')
            empOfficeNum.setAttribute('class', 'empOfficeNum')
            mainContainer.appendChild(empCard)
            empCard.appendChild(empName)
            empName.appendChild(position)
            empCard.appendChild(empId)
            empCard.appendChild(empEmail)
            empCard.appendChild(empOfficeNum)
        }
    }
    
    `
    }
    
}

module.exports = getResponses;