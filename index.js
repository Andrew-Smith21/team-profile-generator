const inquirer = require('inquirer');
const generatePage = require('./src/page-template');
const writeFile = require('./src/generateFile');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

let manager = [];
let engineers = [];
let interns = [];

const getManagerInfo = () => {
    return inquirer.prompt([
    {
        type: 'input',
        name: 'managerName',
        message: 'What is the name of the Team Manager?',
        validate: managerName => {
            if (managerName) {
              return true;
            } else {
              console.log('Please enter the name of the Team Manager!');
              return false;
            }
        }
    },
    {
        type: 'input',
        name: 'managerID',
        message: "What is the Team Manager's employee ID?",
        validate: managerID => {
            if (managerID) {
              return true;
            } else {
              console.log('Please enter the employee ID of the Team Manager!');
              return false;
            }
        }
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: "What is the Team Manager's email address?",
        validate: managerEmail => {
            if (managerEmail) {
              return true;
            } else {
              console.log("Please enter the Team Manager's email address!");
              return false;
            }
        }
    },
    {
        type: 'input',
        name: 'managerOfficeNumber',
        message: "What is the Team Manager's office number?",
        validate: managerOfficeNumber => {
            if (managerOfficeNumber) {
              return true;
            } else {
              console.log('Please enter the office number of the Team Manager!');
              return false;
            }
        }
    }
    ])

    .then(({ managerName, managerID, managerEmail, managerOfficeNumber }) => {
        manager.push(new Manager(managerName, managerID, managerEmail, managerOfficeNumber));
    })
    .then(displayMenu)
};

const displayMenu = () => {
    return inquirer.prompt([
    {
        type: 'list',
        name: 'menuSelection',
        message: "Add a team member",
        choices: ['Add an Engineer', 'Add an Intern', 'Team is Complete'],
        validate: menu => {
            if (menu) {
              return true;
            } else {
              console.log('Please choose an option!');
              return false;
            }
        }
    }
    ])

    .then(menu => {
        if (menu.menuSelection === 'Add an Engineer') {
            getEngineerInfo();
        }
        else if (menu.menuSelection === 'Add an Intern') {
            getInternInfo();
        }
        else if (menu.menuSelection === 'Team is Complete') {
            pageHTML = generatePage(manager, engineers, interns);
            writeFile(pageHTML);
        }
    })
};

const getEngineerInfo = () => {
    return inquirer.prompt([
    {
        type: 'input',
        name: 'engineerName',
        message: 'What is the name of the Engineer?',
        validate: engineerName => {
            if (engineerName) {
                return true;
            } else {
                console.log('Please enter the name of the Engineer!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'engineerID',
        message: "What is the Engineer's employee ID?",
        validate: engineerID => {
            if (engineerID) {
                return true;
            } else {
                console.log('Please enter the employee ID of the Engineer!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'engineerEmail',
        message: "What is the Engineer's email address?",
        validate: engineerEmail => {
            if (engineerEmail) {
                return true;
            } else {
                console.log("Please enter the Engineer's email address!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'engineerGithub',
        message: "What is the Engineer's Github username?",
        validate: engineerGithub => {
            if (engineerGithub) {
              return true;
            } else {
              console.log('Please enter the Github username of the Engineer!');
              return false;
            }
        }
    }
    ])

    .then(({ engineerName, engineerID, engineerEmail, engineerGithub }) => {
        engineers.push(new Engineer(engineerName, engineerID, engineerEmail, engineerGithub));
    })
    .then(displayMenu)
};

const getInternInfo = () => {
    return inquirer.prompt([
    {
        type: 'input',
        name: 'internName',
        message: 'What is the name of the Intern?',
        validate: internName => {
            if (internName) {
                return true;
            } else {
                console.log('Please enter the name of the Intern!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'internID',
        message: "What is the Intern's employee ID?",
        validate: internID => {
            if (internID) {
                return true;
            } else {
                console.log('Please enter the employee ID of the Intern!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'internEmail',
        message: "What is the Intern's email address?",
        validate: internEmail => {
            if (internEmail) {
                return true;
            } else {
                console.log("Please enter the Intern's email address!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'internSchool',
        message: "What is the name of the Intern's school?",
        validate: internSchool => {
            if (internSchool) {
              return true;
            } else {
              console.log("Please enter the name of the Intern's school");
              return false;
            }
        }
    }
    ])

    .then(({ internName, internID, internEmail, internSchool }) => {
        interns.push(new Intern(internName, internID, internEmail, internSchool));
    })
    .then(displayMenu)
};

getManagerInfo();
    // .then(teamData => {
    //    generatePage(teamData);
    // });
    // .then(pageHTML => {
    //    writeFile(pageHTML);
    // })
    // .catch(err => {
    //    console.log(err);
    // });