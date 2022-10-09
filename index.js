//  Link required packages: inquirer, file system, generateMarkdown.js
const inquirer = require('inquirer');
const fs = require('fs');
const getResponses = require('./lib/generateEmployees');

const newEmpLoop = [];


//  Created an array of questions to call with inquirer

      const leaderQuestions =  [
        {
            type: 'input',
            message: 'What is the name of the team leader?',
            name: 'leaderName',
        },

        {
            type: 'input',
            message: 'What is the official title of the team leader?',
            name: 'leaderTitle',
        },
      
        {
            type: 'input',
            message: 'What is the team leader\'s employee id?',
            name: 'TLemployeeID',
        },

        {
            type: 'input',
            message: 'What is the team leader\'s email address?',
            name: 'TLemailAddress',
        },
        
        {
            type: 'input',
            message: 'what is the team leader\'s office number?',
            name: 'TLofficeNumber',
        },

       
 
    ]

    const pickNewEmployee = [

        {
            type: 'list',
            name: 'pickEmployee',
            message: 'Would you like to add an engineer or an intern to finish building?',
            choices: [
                { name: "Add a new engineer", value: "newEngineer"},
                { name: "Add a new intern", value: "newIntern"},
                { name: "Exit", value: "Exit"}
            ],
        },
    ]


    const engineerQuestions = [
        {
            type: 'input',
            message: 'What is the name of the engineer?',
            name: 'engineerName',
            value: `${newEmpLoop}`
        },

        {
            type: 'input',
            message: 'What is the engineer\'s official title?',
            name: 'title',
        },
      
        {
            type: 'input',
            message: 'What is the engineer\'s employee id?',
            name: 'engEmpId',
        },

        {
            type: 'input',
            message: 'What is the engineer\'s email address?',
            name: 'engEmailAddress',
        },
        
        {
            type: 'input',
            message: 'what is the engineer\'s office number?',
            name: 'engOfficeNumber',
        },

    ]

    const internQuestions = [
        {
            type: 'input',
            message: 'What is the name of the engineer?',
            name: 'internName',
            value: `${newEmpLoop}`
        },

        {
            type: 'input',
            message: 'What is the engineer\'s official title?',
            name: 'title',
        },
      
        {
            type: 'input',
            message: 'What is the engineer\'s employee id?',
            name: 'internEmployeeId',
        },

        {
            type: 'input',
            message: 'What is the engineer\'s email address?',
            name: 'internEmailAddress',
        },
        
        {
            type: 'input',
            message: 'what is the engineer\'s office number?',
            name: 'internOfficeNumber',
        },

    ]

    

// function in order to call inquirer prompts and then create the readme file
    function startQuestions() {
        return inquirer.prompt(leaderQuestions)
        .then((answers) => {
            makeChoice()
            const leaderAnswers = getResponses.makeHomepage(answers); 
            console.log(answers)
            return answers 
        }) 
    }

    function makeChoice() {
        if(answers) {
            newEmployee();
        }
    }



    function newEmployee() {
        return inquirer.prompt(pickNewEmployee)
        .then((answers) => {
            if(answers.pickEmployee === 'newEngineer') {
                newEngineer()
             } else if (answers.pickEmployee === 'newIntern') {
                newIntern()
             } else {
                createScript()
             }
        })
    }

        // function newEngineer() {
        //     return inquirer.prompt(engineerQuestions)
        //     .then((answers) => {
        //         newEmployee()
        //         const engineerAnswers = getResponses.makeHomepage(answers);
        //         console.log(answers)
        //         return answers    
        //     })
        // }

        // function newIntern() {
        //     return inquirer.prompt(internQuestions)
        //     .then((answers) => {
        //         newEmployee()
        //         const internAnswers = getResponses.makeHomepage(answers);
        //         console.log(answers)
        //         return answers
        //     })
        // }

        // function createScript() {
        //     fs.writeFile('script.js', answers, (err)=>{
        //         if(err){
        //             console.log(err)
        //         }
        //         console.log('Your homepage has been successfully created')
        //     })
        // }







    // } if (leaderQuestions) {
    //     addNewEmployee();
    // } 

    // function addNewEmployee() {
    //     for(let i = 0; i<newEmpLoop.length; i++) {
    //         newEmpLoop = i;
    //     }
    //     return inquirer.prompt(addEmployee)
    //     .then((answers) => {
    //         if (newEmpType == 'newEngineer') {
    //             return inquirer.prompt(engineerQuestions)
    //         } else if (newEmpType == 'newIntern'){
    //             return inquirer.prompt(internQuestions)
    //         } else {
    //             console.log('Thank you for building your team')
    //             process.exit;
    //         }
    //     }).then((answers) => {
    //         const newEmpInfo = getResponses.generateCard(answers);
    //         return answers
    //     }) 
   
     

    startQuestions();