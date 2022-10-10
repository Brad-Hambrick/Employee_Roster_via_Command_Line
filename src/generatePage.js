const engineer = require("../lib/Engineer");
const teamLeader = require("../lib/TeamLeader");
const intern = require("../lib/Intern");

const generateTeam = (team) => {
    console.log(team)
    const homepage = [];

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
                    <li>Office Number: ${intern.officeNumber}</li>
                </ul>
            </div>
        </div>
        `;
        homepage.push(internHtml);
    }

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
                    <li>Office Number: ${engineer.officeNumber}</li>
                </ul>
            </div>
        </div>
        `;
        homepage.push(engineerHtml);
    }

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

