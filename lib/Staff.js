const { writeFile } = require('fs');
const inquirer = require('inquirer');

function Staff() {
    this.manager;
    this.engineers = [];
    this.interns = [];
}

Staff.prototype.getManagerInfo = function() {
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

    .then(this.displayMenu)
};

Staff.prototype.displayMenu = function() {
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
            this.getEngineerInfo();
        }
        else if (menu.menuSelection === 'Add an Intern') {
            this.getInternInfo();
        }
        else if (menu.menuSelection === 'Team is Complete') {
            return;
        }
    })
};

Staff.prototype.getEngineerInfo = function() {
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

    .then(this.displayMenu)
};

Staff.prototype.getInternInfo = function() {
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

    .then(this.displayMenu)
};

new Staff().getManagerInfo();