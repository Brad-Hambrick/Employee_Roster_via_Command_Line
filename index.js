//  Link required packages and classes
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


//  Create an array of questions for the team leader attributes
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
//  Create the menu after the team leader is generated to add engineers and interns
    const pickNewEmployee = [

        {
            type: 'list',
            name: 'pickEmployee',
            message: 'Would you like to add an engineer or an intern to finish building?',
            choices: ['Add a new engineer', 'Add a new intern', 'Build my team'],
        },
    ]

//  Create an array of questions for the engineer attributes
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
            message: 'what is the engineer\'s GitHub username?',
            name: 'github',
        },

    ]

//  Create an array of questions for the intern attributes
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
            message: 'what is the intern\'s current school?',
            name: 'school',
        },

    ]

    

// function in order to call inquirer prompts and then generate and push the responses
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

    function newIntern() {
        return inquirer.prompt(internQuestions)
        .then((answers) => {
            // console.log(answers);
            console.log(team);
            const internAnswers = new Intern(answers.name, answers.employeeId, answers.email, answers.school);
            team.push(internAnswers);
            newEmployee();
        })
    }

        function newEngineer() {
            return inquirer.prompt(engineerQuestions)
            .then((answers) => {
                // console.log(answers);
                console.log(team);
                const engineerAnswers = new Engineer(answers.name, answers.employeeId, answers.email, answers.github);
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
// Call function to begin the prompts
    startQuestions();







  
   
   
     

