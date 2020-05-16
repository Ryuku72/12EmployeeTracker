
const questions = [ { 
    type: "list",
    pageSize: 13,
    message: "What would you like to do?",
    name: "action",
    choices: [
      "View all DEPARTMENTS",
      "View all ROLES",
      "View all EMPLOYEES",
      "View all MANAGERS",
      "Add DEPARTMENT",
      "Add ROLE",
      "Add EMPLOYEE",
      "Remove DEPARTMENT",
      "Remove ROLE",
      "Remove EMPLOYEE",
      "Update DEPARTMENT ROLE",
      "View BUDGET",
      "Reset DATABASE",
      "EXIT",
    ]
}]

module.exports = questions;
