const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

const writeFile = require('./generateFile');

// create conditional Eningeer section by looping through engineers array

const generateEngineers = engineers => {

    for (let i = 0; i < engineers.length; i++) {

        return `
        <article class="card">
            <div class="card-body">
                <h2 class="card-title .bg-primary">${engineers[0].name}</h2>
                <h3 class="card-subtitle .bg-primary">Engineer</h3
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${engineers[0].id}</li>
                    <li class="list-group-item">Email: ${engineers[0].email}</li>
                    <li class="list-group-item">Github: ${engineers[0].github}</li>
                </ul>

            </div>
        </article>

        `;
    }
}


// create conditional Intern section by looping through interns array

const generateInterns = interns => {

    for (let i = 0; i < interns.length; i++) {

        return `
        <article class="card">
            <div class="card-body">
                <h2 class="card-title .bg-primary">${interns[0].name}</h2>
                <h3 class="card-subtitle .bg-primary">Intern</h3
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${interns[0].id}</li>
                    <li class="list-group-item">Email: ${interns[0].email}</li>
                    <li class="list-group-item">School: ${interns[0].school}</li>
                </ul>

            </div>
        </article>

        `;
    }
}


module.exports = (manager, engineers, interns) => {


    return `
    <!DOCTYPE html>
    <html lang="en">
  
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Team Info</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
      <link rel="stylesheet" href="./style.css">
    </head>

    <body>
        <header>
        <div class=".bg-danger header container flex-row justify-space-between align-center py-3">
            <h1 class="page-title text-secondary bg-dark py-2 px-3">My Team</h1>
        </div>
        </header>

        <main class="container my-5">

            <article class="card">
                <div class="card-body">
                    <h2 class="card-title .bg-primary">${manager[0].name}</h2>
                    <h3 class="card-subtitle .bg-primary">Manager</h3>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${manager[0].id}</li>
                        <li class="list-group-item">Email: ${manager[0].email}</li>
                        <li class="list-group-item">Office number: ${manager[0].officeNumber}</li>
                    </ul>

                </div>
            </article>

            ${generateEngineers(engineers)}

            ${generateInterns(interns)}
        

        </main>


    </body>
    </html>
    
    `

}