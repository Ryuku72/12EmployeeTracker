//Reference folders

const connection = require("./database/connection");
const questions = require("./database/questions");
const logic = require("./database/logic");
const header = require("./database/header")
const foreignQ = require("./mySQL/ftReset")

// npm applications

const CLI = require('clui');
const Spinner = CLI.Spinner;
const clear = require("clear");
const chalk = require("chalk");
const inquirer = require("inquirer");



//mySQL connection

connection.connect(function (err) {
  if (err) throw err;
  console.log("Connected As ID# " + connection.threadId)
  header.startScreen()
  console.log(chalk.bold.yellow("Welcome to Foreign Toolbox Databse Homework W12 (14th May 2020) Project. Please select from the options below. \nIf there are any issues please remember to report them"), chalk.bold.red("foreigntoolbox@ftbox.com \n"));
  // connection.end();
  getAnswers()
})


// RESET INQUIRER

async function startQ() {
  inquirer.prompt({
    type: "list",
    name: "start",
    message: "Would you like to make another enquiry?",
    choices: ["Yes", "No"],
    default: "Yes",
  }).then(data => {
    if (data.start == "Yes") {
      header.startScreen()
      main()
    }
    if (data.start == "No") {
      console.log("")
      var countdown = new Spinner(chalk.bold.red('Exiting in 3 seconds...  '), ['⣾', '⣽', '⣻', '⢿', '⡿', '⣟', '⣯', '⣷']);
      countdown.start();
      var number = 3;
      setInterval(function () {
        number--;
        countdown.message(chalk.bold.red('Exiting in ' + number + ' seconds...  '));
        if (number === 0) {
          process.stdout.write('\n');
          process.exit(0);
        }
      }, 1000);
      connection.end();
    }
  })
}

// MAIN SWITCH

async function getAnswers() {
  return inquirer.prompt(questions)
}

async function main() {
  const prompt = await getAnswers();

  switch (prompt.action) {

    case "EXIT": {
      startQ();
      break;
    }

    case "View all DEPARTMENTS": {
      await logic.getDepartmentNames(connection,
        (err, departments) => {
          if (err) console.log("Database error!");
          else
            clear();
          header.startScreen();
          console.table(departments);
          startQ();
        })
      break;
    }

    case "View all ROLES": {
      await logic.getRoleNames(connection, (err, roles) => {
        if (err) console.log("Database error!");
        else
          clear();
        header.startScreen();
        console.table(roles);
        startQ();
      })
      break;
    }

    case "View all EMPLOYEES": {
      await logic.getEmployeeName(connection, (err, employees) => {
        if (err) console.log("Database error!");
        else
          clear();
        header.startScreen();
        console.table(employees);
        startQ();
      })
      break;
    }

    case "View all MANAGERS": {
      await logic.getManagerName(connection, (err, managers) => {
        if (err) console.log("Database error!");
        else
          clear();
        header.startScreen();
        console.table(managers);
        startQ();
      })
      break;
    };

  case "Add DEPARTMENT": {
    addDepartment();
    break;
  };

  case "Add ROLE": {
    addRole();
    break;
  }

  case "Add EMPLOYEE": {
    addEmployee();
    break;
  }

  case "Remove DEPARTMENT": {
    removeDepartment();
    break;
  }

  case "Remove ROLE": {
    removeRole();
    break;
  }

  case "Remove EMPLOYEE": {
    removeEmployee();
    break;
  }

  case "Update DEPARTMENT ROLE": {
    updateRole();
    break;
  }

  case "View BUDGET": {
    viewBudget();
    break;
  }

  case "Reset DATABASE": {
    resetRequest();
    break;
  }

  }
}


// add functions

const addDepartment = async function () {
  clear();
  header.startScreen();
  inquirer.prompt(
    [{
      type: "input",
      message: "What is the name of the new department?",
      name: "departmentName",
      validate: function (name) {
        const reg = /^\d+$/;
        if (name === '' || reg.test(name)) {
          return "Please enter CORRECT answer. BLANK and NUMBERS are not correct answers";
        }
        return true
      }
    }]).then(function (result) {

    var question = "INSERT INTO department SET ?"
    const inputDB = {
      sector: result.departmentName
    }
    connection.query(question, inputDB, function (err) {
      if (err) throw err;
    });

    logic.getDepartmentNames(connection, (err, departments) => {
      if (err) throw err;
      else clear();
      header.startScreen();
      console.table(departments);
      console.table(chalk.bold.red("* * ") + "Department: " + chalk.bold.green(result.departmentName) + " has been added" + chalk.bold.red(" * * \n"))
      startQ()
    })
  })
}


const addRole = async function () {
  const getRole = "Select * FROM role";
  const getDepartment = "SELECT * FROM department;";
  connection.query(getRole, function (err, roles) {
    connection.query(getDepartment, function (err, departments) {

      if (err) throw err;

      inquirer.prompt([{
            name: "roleName",
            type: "input",
            message: "What is the title of the new role?",
            validate: function (name) {
              const reg = /^\d+$/;
              if (name === '' || reg.test(name)) {
                return "Please enter CORRECT answer. BLANK and NUMBERS are not correct answers";
              }
              return true
            }
          },
          {
            name: "roleSalary",
            type: "input",
            message: "What is the salary of the new role? (Maximum 8 figures",
            validate: function (name) {
              const reg = /^\d+$/;
              if ((name.length) > 7 || reg.test(!name)) {
                return "Please enter CORRECT answer. Numbers ONLY and MAX 8 characters";
              }
              return true
            }
          },
          {
            type: "list",
            pageSize: 15,
            choices: function () {
              let departmentNames = [];
              for (let i = 0; i < departments.length; i++) {
                departmentNames.push(departments[i].sector);
              }

              return departmentNames;
            },
            message: "Which department does this role belong to?",
            name: "roleDepartmentID",
          }
        ])
        .then(function (result) {

          for (var i = 0; i < departments.length; i++) {
            if (departments[i].sector === result.roleDepartmentID) {
              result.departmentID = departments[i].id; // changes result.departmentID into a number matching the department.
            }
          }

          var question = "INSERT INTO role SET ?"
          const inputDB = {
            title: result.roleName,
            salary: result.roleSalary,
            departmentID: result.departmentID
          }
          connection.query(question, inputDB, function (err) {
            if (err) throw err;
          });

          logic.getRoleNames(connection, (err, roles) => {
            if (err) throw err;
            else
              clear()
            header.startScreen()
            console.table(roles);
            console.table(chalk.bold.red("* * ") + "Role: " + chalk.bold.green(inputDB.title) + " has been added " + chalk.bold.red(" * * \n"))
            startQ();
          })
        })

    })
  })
}


const addEmployee = async function () {
  const getEmployee = "Select * FROM employee";
  const getRole = "Select * FROM role";
  const getDepartment = "SELECT * FROM department;";
  connection.query(getEmployee, function (err, employees) {
    connection.query(getRole, function (err, roles) {
      connection.query(getDepartment, function (err, departments) {
        if (err) throw err;
        else clear();
        header.startScreen();
        return inquirer
          .prompt([{
              type: "input",
              name: "firstName",
              message: "What is the employee's first name?",
              validate: function (name) {
                const reg = /^\d+$/;
                if (name === '' || reg.test(name)) {
                  return "Please enter CORRECT answer. BLANK and NUMBERS are not correct answers";
                }
                return true
              }
            },
            {
              type: "input",
              name: "lastName",
              message: "What is the employee's last name?",
              validate: function (name) {
                const reg = /^\d+$/;
                if (name === '' || reg.test(name)) {
                  return "Please enter CORRECT answer. BLANK and NUMBERS are not correct answers";
                }
                return true
              }
            },
            {
              type: "list",
              pageSize: 15,
              choices: function () {
                let roleNames = [];
                for (let i = 0; i < roles.length; i++) {
                  roleNames.push(roles[i].title);
                }

                return roleNames;
              },
              message: "What is the employee's role?",
              name: "role",
            },
          ]).then(function (result) {

            // changes result.role into roleID.

            function roleID() {
              let roleID = 0
              for (var i = 0; i < roles.length; i++) {
                if (roles[i].title == result.role) {
                  roleID = roles[i].id;
                }
              }
              return roleID;
            }

            function departmentID() {
              let departmentID = 0
              for (var i = 0; i < roles.length; i++) {
                if (roles[i].title == result.role) {
                  departmentID = roles[i].departmentID;
                }
              }
              return departmentID;
            }

            // get both department ID and sector using roleID

            function departmentName() {
              for (var i = 0; i < departments.length; i++) {
                if (departments[i].id == departmentID()) {
                  departmentName = departments[i].sector;
                }
              }
              return departmentName;
            }

            // get salary using role

            function roleSalary() {
              for (var i = 0; i < roles.length; i++) {
                if (roles[i].title == result.role) {
                  roleSalary = roles[i].salary
                }
              }
              return roleSalary;
            }

            // get ManagerID using role ID

            function managerID() {
              let managerID = 0;
              for (var i = 0; i < employees.length; i++) {
                if (employees[i].roleID == roleID()) {
                  managerID = employees[i].managerID
                }
              }
              return managerID;
            }

            function managerFirstName() {
              for (var i = 0; i < employees.length; i++) {
                if (employees[i].id == managerID()) {
                  managerFirstName = employees[i].firstName;
                }
              }
              return managerFirstName;
            }

            function managerLastName() {
              for (var i = 0; i < employees.length; i++) {
                if (employees[i].id == managerID()) {
                  managerLastName = employees[i].lastName;
                }
              }
              return managerLastName;
            }

            // console.log(roleID() + " " +
            // departmentID() + " " + 
            // departmentName() + " " +

            //   roleSalary() + " " +
            //   managerID() + " " +
            //   managerFirstName() + " " +
            //   managerLastName()
            // )

            var question = "INSERT INTO employee SET ?"
            const inputDB = {
              firstName: result.firstName,
              lastName: result.lastName,
              roleID: roleID(),
              managerID: managerID(),
            }
            connection.query(question, inputDB, function (err) {
              if (err) throw err;
            });

            logic.getEmployeeName(connection, (err, employees) => {
              if (err) throw err;
              else
                clear()
              header.startScreen()
              console.table(roles);
              console.table(chalk.bold.red("* * ") + "Employee: " + chalk.bold.green(inputDB.firstName + " " + inputDB.lastName) + " Role: " + chalk.bold.green(result.role) + " Salary: " + chalk.bold.green(roleSalary()) +
                " department: " + chalk.bold.green(departmentName()) + " Manager: " + chalk.bold.green(managerFirstName() + " " + managerLastName()) + " has been added " + chalk.bold.red(" * * \n"))
              startQ();
            })
          })
      })
    })
  })
}

// Remove functions. 
// Only works on departments, roles and employees newly added or without foreign keys attached

const removeDepartment = async function () {
  const getDepartment = "SELECT * FROM department;";
  connection.query(getDepartment, function (err, departments) {
    if (err) throw err;
    else clear();
    header.startScreen();
    inquirer.prompt(
        [{
          type: "list",
          pageSize: 15,
          choices: function () {
            let departmentNames = [];
            for (let i = 0; i < departments.length; i++) {
              departmentNames.push(departments[i].sector);
            }

            return departmentNames;
          },
          message: "Which DEPARTMENT do you wish to remove?",
          name: "removeDepartment",
        }])
      .then(function (results) {

        function departmentID() {
          let departmentID = 0
          for (var i = 0; i < departments.length; i++) {
            if (departments[i].sector == results.removeDepartment) {
              departmentID = departments[i].id;
            }
          }
          return departmentID;
        }

        const question = "DELETE FROM department WHERE id = ?"
        connection.query(question, departmentID(), function (err) {
          if (err) throw err;
        });

        logic.getDepartmentNames(connection, (err, departments) => {
          if (err) throw err;
          else clear();
          header.startScreen();
          console.table(departments);
          console.table(chalk.bold.blue("* * ") + "Department: " + chalk.bold.red(results.removeDepartment) + " has been removed" + chalk.bold.blue(" * * \n"))
          startQ()
        })
      })
  })
}

const removeRole = async function () {
  const getRoles = "SELECT * FROM role;";
  connection.query(getRoles, function (err, roles) {
    if (err) throw err;
    else clear();
    header.startScreen();
    inquirer.prompt(
        [{
          type: "list",
          pageSize: 15,
          choices: function () {
            let roleNames = [];
            for (let i = 0; i < roles.length; i++) {
              roleNames.push(roles[i].title);
            }

            return roleNames;
          },
          message: "Which ROLE do you wish to remove?",
          name: "removeRole",
        }])
      .then(function (results) {

        function roleID() {
          let roleD = 0
          for (var i = 0; i < roles.length; i++) {
            if (roles[i].title == results.removeRole) {
              roleID = roles[i].id;
            }
          }
          return roleID;
        }

        const question = "DELETE FROM role WHERE id = ?"
        const inputDB = results.removeDepartment;
        connection.query(question, roleID(), function (err) {
          if (err) throw err;
        });

        logic.getRoleNames(connection, (err, roles) => {
          if (err) throw err;
          else clear();
          header.startScreen();
          console.table(roles);
          console.table(chalk.bold.blue("* * ") + "Role: " + chalk.bold.red(results.removeRole) + " has been removed" + chalk.bold.blue(" * * \n"))
          startQ()
        })
      })
  })
}


const removeEmployee = async function () {
  const getEmployee = "SELECT * FROM employee;";
  connection.query(getEmployee, function (err, employees) {
    if (err) throw err;
    else clear();
    header.startScreen();
    inquirer.prompt(
        [{
          type: "list",
          pageSize: 20,
          choices: function () {
            let employeeNames = [];
            for (let i = 0; i < employees.length; i++) {
              employeeNames.push(employees[i].firstName + " " + employees[i].lastName);
            }

            return employeeNames;
          },
          message: "Which EMPLOYEE do you wish to remove?",
          name: "removeEmployee",
        }])
      .then(function (results) {

        function employeeID() {
          let employeeID = 0
          for (var i = 0; i < employees.length; i++) {
            if (employees[i].firstName && employees[i].lastName == results.removeEmployee) {
              employeeID = employee[i].id;
            }
          }
          return employeeID;
        }

        const question = "DELETE FROM role WHERE id = ?"
        connection.query(question, employeeID(), function (err) {
          if (err) throw err;
        });

        logic.getEmployeeName(connection, (err, employees) => {
          if (err) throw err;
          else clear();
          header.startScreen();
          console.table(employees);
          console.table(chalk.bold.blue("* * ") + "Employee: " + chalk.bold.red(results.removeEmployee) + " has been removed" + chalk.bold.blue(" * * \n"))
          startQ()
        })
      })
  })
}


// UPDATE ROLES


function updateRole() {
  var getRole = "SELECT * FROM role;";
  var getDepartment = "SELECT * FROM department;";
  connection.query(getRole, function (err, roles) {
    connection.query(getDepartment, function (err, departments) {
      if (err) throw err;
      else clear();
      header.startScreen();
      inquirer.prompt([

        {
          name: "newRole",
          pageSize: 15,
          type: "list",
          choices: function () {
            var roleNames = [];
            for (var i = 0; i < roles.length; i++) {
              roleNames.push(roles[i].title);
            }

            return roleNames;
          },
          message: "Which Role would you like to update?"
        },
        {
          name: "newSalary",
          type: "input",
          message: "What is the new salary for this role? Max. 8 figures",
          validate: function (name) {
            const reg = /^\d+$/;
            if ((name.length) > 7 || reg.test(name)) {
              return "Please enter CORRECT answer. Numbers ONLY and MAX 8 characters";
            }
            return true
          }
        },
        {
          name: "choice",
          type: "list",
          pageSize: 15,
          choices: function () {
            var departmentNames = [];
            for (var i = 0; i < departments.length; i++) {
              departmentNames.push(departments[i].sector);
            }
            return departmentNames;
          },
          message: "Which department does this role belongs to?"
        },
      ]).then(function (result) {

        for (var i = 0; i < departments.length; i++) {
          if (departments[i].sector === result.choice) {
            result.departmentID = departments[i].id;
          }
        }
        let question = "UPDATE role SET title= ?, salary = ? WHERE departmentID = ?"
        const inputDB = [result.newRole, result.newSalary, result.departmentID]
        connection.query(question, inputDB, function (err) {
          if (err) throw err;
        });

        logic.getRoleNames(connection, (err, roles) => {
          if (err) throw err;
          else clear();
          header.startScreen();
          console.table(roles);
          console.table(chalk.bold.magenta("* * ") + "Role: " + chalk.bold.yellow(result.newRole) + " has been updated" + chalk.bold.magenta(" * * \n"))
          startQ()
        })
      })

    })
  })
}

// BUDGET 


const viewBudget = async function () {
  const getDepartment = "SELECT * FROM department";
  connection.query(getDepartment, function (err, departments) {
    if (err) throw err;
    else clear();
    header.startScreen();
    inquirer.prompt([{
      name: "choiceDept",
      pageSize: 15,
      type: "list",
      choices: function () {
        var departmentNames = [];
        for (var i = 0; i < departments.length; i++) {
          departmentNames.push(departments[i].sector);
        }

        return departmentNames;
      },
      message: "Which Department budget would you like to see?"
    }, ]).then(function (result) {

      for (var i = 0; i < departments.length; i++) {
        if (departments[i].sector == result.choiceDept) {
          departmentID = departments[i].id;
        }
      }
      let answerTotal = []
      const question = "Select sum(salary) as total FROM role WHERE departmentID = ?"
      const inputDB = departmentID;
      connection.query(question, inputDB, function (err, response, ) {
        if (err) throw err;
        else
          total = response
        for (var i = 0; i < total.length; i++) {
          answerTotal.push(total[i].total)
        }
        console.log(chalk.bold.red("* * ") + "Department: " + chalk.bold.yellow(result.choiceDept) + " total budget is " +
          chalk.bold.green("$" + JSON.parse(answerTotal)) + chalk.bold.red(" * * \n"))
        startQ()
      });
    })
  })
}

// RESET DATABASE FUNCTION

const resetRequest = async function () {
  clear();
    header.startScreen();
      inquirer.prompt([{
        name: "reset",
        type: "list",
        message: "WARNING!!! WARNING!!! WARNING!!!\nAre you sure you want to reset the database?\nThis will wipe the mySQL database back to the original state!!!\n\nIf this is the first time using EMPLOYMENT TRACKER API then 'YES' option will populate your database for you\n",
        default: "NO",
        choices: ["YES", "NO"]

      }]).then(data => {
        if (data.reset == "NO") {  
          clear()
          header.startScreen()
          main()
        }
        if (data.reset == "YES") {
          foreignQ.resetServer()
        }
      })
    }

      main();
