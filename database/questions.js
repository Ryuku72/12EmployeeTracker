
const questions = [  
    {
        type: "list",
        name: "start",
        message: "What would you like today?",
        choices: ["View", "Add", "Delete", "Edit", "Budget", "EXIT", "Reset"],
        default: "View"
    },

    // view

    {
        when: (answers) => answers.start === "View",
        type: "list",
        name: "view",
        message: "Which area would you like to view",
        choices: ["Departments", "Roles", "Employees", "Managers", "EXIT"],
        default: "Departments"
    },
    {
        when: (answers) => answers.start === "Add",
        type: "list",
        name: "add",
        message: "Which area would you like to add",
        choices: ["Departments", "Roles", "Employees", "Managers", "EXIT"],
        default: "Departments"
    },
    {
        when: (answers) => answers.start === "Delete",
        type: "list",
        name: "delete",
        message: "Which area would you like to delete",
        choices: ["Departments", "Roles", "Employees", "Managers", "EXIT"],
        default: "Departments"
    },
    {
        when: (answers) => answers.start === "Edit",
        type: "list",
        name: "view",
        message: "Which area would you like to Edit",
        choices: ["Employee's Role", "Department Manager", "EXIT"],
        default: "Employee's Role"
    },
    {
        when: (answers) => answers.start === "Budget",
        type: "list",
        name: "budget",
        message: "Which department budget would you like to see?",
        choices: ["Department function", "EXIT"],
    },
    {
        when: (answers) => answers.start === "Reset",
        type: "list",
        name: "reset",
        message: "Are you sure you want to reset the entire Database?",
        choices: ["YES", "NO"],
    },
]

module.exports = questions;
