// Import required classes
const engineer = require("../lib/Engineer");
const teamLeader = require("../lib/TeamLeader");
const intern = require("../lib/Intern");

// Function to generate the team member cards
const generateTeam = (team) => {
    console.log(team)
    // Empty array to push the different aspects of the html file into
    const homepage = [];
    // Generate team leader card
    const generateTeamLeader = teamLeader => {
        let leaderHtml = `
        <div class="empCard">
            <div class="empName">${teamLeader.name} <br>
                <div class="empTitle">Team Leader</div>
            </div>
            <div class="attributes">
                <ul class="listItems">
                    <li>Employee ID: ${teamLeader.id}</li>
                    <li>Email: <a href="mailto:${teamLeader.email}">${teamLeader.email}</a></li>
                    <li>Office Number: ${teamLeader.officeNumber}</li>
                </ul>
            </div>
        </div>
        `;
        homepage.push(leaderHtml);
    }
    // Generate intern cards
    const generateIntern = intern => {
        let internHtml = `
        <div class="empCard">
            <div class="empName">${intern.name} <br>
                <div class="empTitle">Intern</div>
            </div>
            <div class="attributes">
                <ul class="listItems">
                    <li>Employee ID: ${intern.id}</li>
                    <li>Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
                    <li>School: ${intern.school}</li>
                </ul>
            </div>
        </div>
        `;
        homepage.push(internHtml);
    }
    // Generate engineer cards
    const generateEngineer = engineer => {
        let engineerHtml = `
        <div class="empCard">
            <div class="empName">${engineer.name} <br>
                <div class="empTitle">Engineer</div>
            </div>
            <div class="attributes">
                <ul class="listItems">
                    <li>Employee ID: ${engineer.id}</li>
                    <li>Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
                    <li>GitHub Username: <a href="https://github.com/${engineer.github}">${engineer.github}</a></li>
                </ul>
            </div>
        </div>
        `;
        homepage.push(engineerHtml);
    }

    // for loop in order to add multiple interns and engineers
    for (let i=0; i<team.length; i++) {
        if (team[i].getRole() === 'Team Leader') {
            generateTeamLeader(team[i]);
        }
        if (team[i].getRole() === 'Intern') {
            generateIntern(team[i]);
        }
        if (team[i].getRole() === 'Engineer') {
            generateEngineer(team[i]);
        }
        
    }
    return homepage.join('');
    
}

// Function to generate the html file and add the team member cards into the main container
module.exports = team => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Roster</title>
        <link rel="stylesheet" href="/public/style.css">
    </head>
    <body>
    <h1 class="header">MyTeam</h1>
    <main class="mainContainer">
        ${generateTeam(team)}
    </main> 
</body>
</html>
    `
}

