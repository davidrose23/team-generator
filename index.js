import inquirer from 'inquirer';
import  Manager  from './lib/Manager.js';
import  Engineer  from './lib/Engineer.js';
import  Intern  from './lib/Intern.js';
import render from './src/template.js';
import fs from 'fs';



// Array to hold team members
const team = [];

// Prompt for manager information
function promptManager() {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Enter the manager's name:",
    },
    {
      type: "input",
      name: "id",
      message: "Enter the manager's ID:",
    },
    {
      type: "input",
      name: "email",
      message: "Enter the manager's email:",
    },
    {
      type: "input",
      name: "officeNumber",
      message: "Enter the manager's office number:",
    },
  ]);
}

// Prompt for engineer information
function promptEngineer() {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Enter the engineer's name:",
    },
    {
      type: "input",
      name: "id",
      message: "Enter the engineer's ID:",
    },
    {
      type: "input",
      name: "email",
      message: "Enter the engineer's email:",
    },
    {
      type: "input",
      name: "github",
      message: "Enter the engineer's GitHub username:",
    },
  ]);
}

// Prompt for intern information
function promptIntern() {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Enter the intern's name:",
    },
    {
      type: "input",
      name: "id",
      message: "Enter the intern's ID:",
    },
    {
      type: "input",
      name: "email",
      message: "Enter the intern's email:",
    },
    {
      type: "input",
      name: "school",
      message: "Enter the intern's school:",
    },
  ]);
}

// Prompt for adding a team member
function promptTeamMember() {
  return inquirer.prompt([
    {
      type: "list",
      name: "role",
      message: "Add a team member:",
      choices: ["Engineer", "Intern", "Finish"],
    },
  ]);
}

init();

async function init() {
  try {
    // Prompt for manager information
    const { name, id, email, officeNumber } = await promptManager();
    const manager = new Manager(name, id, email, officeNumber);
    team.push(manager);

    // Prompt for team member information
    let teamMember = await promptTeamMember();

    // Keep prompting for team member information until user chooses to Finish
    while (teamMember.role !== "Finish") {
      if (teamMember.role === "Engineer") {
        const { name, id, email, github } = await promptEngineer();
        const engineer = new Engineer(name, id, email, github);
        team.push(engineer);
      } else if (teamMember.role === "Intern") {
        const { name, id, email, school } = await promptIntern();
        const intern = new Intern(name, id, email, school);
        team.push(intern);
      }
      teamMember = await promptTeamMember();
    }

    // Render HTML
    const html = render(team);

    // Write HTML file
    fs.writeFile("./dist/index.html", html, (err) => {
      if (err) throw err;
      console.log("Successfully wrote to index.html");
    });

  } catch (err) {
    console.error(err);
  }
}