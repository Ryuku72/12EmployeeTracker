const connection = require("./database/connection")
const questions = require("./database/questions")
const logic = require("./database/logic")
const chalk = require("chalk");
const figlet = require("figlet");
const clear = require("clear");
const inquirer = require("inquirer");
const cTable = require('console.table');


connection.connect(function (err) {
  if (err) throw err;
  console.log("Connected As ID# " + connection.threadId)
  console.log(chalk.bold.yellow("Welcome to Foreign Toolbox Databse Homework W12 (14th May 2020) Project. Please select from the options below. \nIf there are any issues please remember to report them"), chalk.bold.red("foreigntoolbox@ftbox.com \n"));
  // connection.end();
  startScreen()
  getAnswers()
})


const startScreen = function () {
  clear();
  console.log(
  chalk.blue("\n\n  <<--------------------------------------------------------------------------------------------------------------------------------------------------\n\n"))

console.log(
    chalk.bold.magenta(figlet.textSync('Employement', {
      font: 'Isometric4',
      horizontalLayout: 'full',
      verticalLayout: 'full'
    }))),
  console.log(
    chalk.bold.green(figlet.textSync('Tracker API', {
      font: 'Isometric1',
      horizontalLayout: 'full',
      verticalLayout: 'full'
    }))),
  console.log(
    chalk.blue("\n\n  -------------------------------------------------------------   FOREIGN TOOLKIT DATABASE HOMEWORK W12  ---------  14th May 2020   ------------>>\n"));

  }


const startQ = () => inquirer.prompt(  
    {
        type: "list",
        name: "start",
        message: "Would you like to make another enquiry?",
        choices: ["Yes", "No"],
        default: "Yes",
    }).then(data => {
        if (data.start == "Yes") {
          startScreen()
          getAnswers()
        }
        if (data.start == "No") {
          console.log(chalk.bold.red("\n You are now leaving the database... "))
          connection.end();
        }
    })

const getAnswers = async () => inquirer.prompt(questions)
  .then((data => {
    //data

    if (data.start == "EXIT") {
      startQ();
    }


    //data.view
    if (data.view == "Departments") {
      logic.getDepartmentNames(connection, (err, departments) => {
        if (err) console.log("Database error!");
        else console.table(departments);
        startQ();
      })
      
    }

    if (data.view == "Roles") {
      logic.getRoleNames(connection, (err, roles) => {
        if (err) console.log("Database error!");
        else console.table(roles);
        startQ();
      })
    }

    if (data.view == "Employees") {
      logic.getEmployeeName(connection, (err, employees) => {
        if (err) console.log("Database error!");
        else console.table(employees);
        startQ();
      })
    }

    if (data.view == "Managers") {
      logic.getManagerName(connection, (err, managers) => {
        if (err) console.log("Database error!");
        else console.table(managers);
        startQ();
      })
    }

    if (data.view == "EXIT") {
      startQ();    
    }
    
  }))

  .catch(error => {
    if (error.isTtyError) {
      // Prompts can't be rendered in the current environment
    } else {
      console.error(error)
    }
    inquirer.prompt(questions);
  })
