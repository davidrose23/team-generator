const renderEmployeeCard = (employee) => {
    let icon;
    let specialProperty;

    if (employee.getRole() === "Manager") {
        icon = "coffee";
        specialProperty = `Office: ${employee.getOfficeNumber()}`;
    } else if (employee.getRole() === "Engineer") {
        icon = "cogs";
        specialProperty = `GitHub: <a href="https://github.com/${employee.getGithub()}" target="_blank">${employee.getGithub()}</a>`;
    } else if (employee.getRole() === "Intern") {
        icon = "user-graduate";
        specialProperty = `School: ${employee.getSchool()}`;
    }

    return `
    <div class="card col-md-3">
      <div class="card-header bg-primary text-white">
        <h3>${employee.getName()}</h3>
        <h4><i class="fas fa-${icon}"></i> ${employee.getRole()}</h4>
      </div>
      <div class="card-body">
        <ul class="list-group">
          <li class="list-group-item">ID: ${employee.getId()}</li>
          <li class="list-group-item">Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
          <li class="list-group-item">${specialProperty}</li>
        </ul>
      </div>
    </div>
    `;
};

const render = (employees) => {
    const employeeCards = employees.map((employee) => renderEmployeeCard(employee));
    return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>My Team</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
        <link rel="stylesheet" href="./style.css">
      </head>
      <body>
        <nav class="navbar navbar-dark bg-danger mb-5">
          <span class="navbar-brand mb-0 h1 w-100 text-center">My Team</span>
        </nav>
        <div class="container">
          <div class="row">
            ${employeeCards.join("")}
          </div>
        </div>
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
      </body>
    </html>
    `;
};

export default render;