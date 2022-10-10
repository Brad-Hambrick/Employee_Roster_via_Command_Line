//  Link required packages
const inquirer = require('inquirer');
const fs = require('fs');
const TeamLeader = require('./lib/TeamLeader');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generatePage = require('./src/generatePage');
const path = require('path');
const dirOutput = path.resolve(__dirname, 'output')
const joinPath = path.join(dirOutput, 'index.html');
const team = [];


//  Created an array of questions to call with inquirer

      const leaderQuestions =  [
        {
            type: 'input',
            message: 'What is the name of the team leader?',
            name: 'name',
        },
      
        {
            type: 'input',
            message: 'What is the team leader\'s employee id?',
            name: 'employeeId',
        },

        {
            type: 'input',
            message: 'What is the team leader\'s email address?',
            name: 'email',
        },
        
        {
            type: 'input',
            message: 'what is the team leader\'s office number?',
            name: 'officeNumber',
        },
    ]

    const pickNewEmployee = [

        {
            type: 'list',
            name: 'pickEmployee',
            message: 'Would you like to add an engineer or an intern to finish building?',
            choices: ['Add a new engineer', 'Add a new intern', 'Build my team'],
        },
    ]


    const engineerQuestions = [
        {
            type: 'input',
            message: 'What is the name of the engineer?',
            name: 'name',
        },
      
        {
            type: 'input',
            message: 'What is the engineer\'s employee id?',
            name: 'employeeId',
        },

        {
            type: 'input',
            message: 'What is the engineer\'s email address?',
            name: 'email',
        },
        
        {
            type: 'input',
            message: 'what is the engineer\'s office number?',
            name: 'officeNumber',
        },

    ]

    const internQuestions = [
        {
            type: 'input',
            message: 'What is the name of the intern?',
            name: 'name',
        },
      
        {
            type: 'input',
            message: 'What is the intern\'s employee id?',
            name: 'employeeId',
        },

        {
            type: 'input',
            message: 'What is the intern\'s email address?',
            name: 'email',
        },
        
        {
            type: 'input',
            message: 'what is the intern\'s office number?',
            name: 'officeNumber',
        },

    ]

    

// function in order to call inquirer prompts and then create the readme file
    function startQuestions() {
        return inquirer.prompt(leaderQuestions)
        .then((answers) => {
            // console.log(answers);
            console.log(team);
            const leaderAnswers = new TeamLeader(answers.name, answers.employeeId, answers.email, answers.officeNumber);
            team.push(leaderAnswers);
            newEmployee();
        }) 
    }

    function newEmployee() {
        return inquirer.prompt(pickNewEmployee)
        .then(answers => {
            switch (answers.pickEmployee) {
                case 'Add a new engineer': newEngineer();
                    break;
                case 'Add a new intern': newIntern();
                    break;
                default: createTeam();
            }
        })
    }
debugger
    function newIntern() {
        return inquirer.prompt(internQuestions)
        .then((answers) => {
            // console.log(answers);
            console.log(team);
            const internAnswers = new Intern(answers.name, answers.employeeId, answers.email, answers.officeNumber);
            team.push(internAnswers);
            newEmployee();
        })
    }

        function newEngineer() {
            return inquirer.prompt(engineerQuestions)
            .then((answers) => {
                // console.log(answers);
                console.log(team);
                const engineerAnswers = new Engineer(answers.name, answers.employeeId, answers.email, answers.officeNumber);
                team.push(engineerAnswers);
                newEmployee();  
            })
        }

        function createTeam() {
            if (!fs.existsSync(dirOutput)) {
                fs.mkdirSync(dirOutput)
            }
            fs.writeFileSync(joinPath, generatePage(team), 'utf-8')
            console.log('Thanks for building your team')
        }

    startQuestions();







  
   
   
     

