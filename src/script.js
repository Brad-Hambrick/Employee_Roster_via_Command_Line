console.log('hello world')

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
    let position = document.createElement('div')
    position.setAttribute('class', 'position')
    let empId = document.createElement('div')
    empId.setAttribute('class', 'empId')
    let empEmail = document.createElement('div')
    empEmail.setAttribute('class', 'empEmail')
    let empOfficeNum = document.createElement('div')
    empOfficeNum.setAttribute('class', 'empOfficeNum')
    
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

