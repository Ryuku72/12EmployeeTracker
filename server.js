var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "foreign_toolboxDB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  connection.end();
});

//first need to make the arrays. For kicks I will order them alphabetically
//With this information you will be able to see all department, roles and employees
let departments = [];
let roles = [];
let employees = [];
let managers = [];

var getDepartmentNames = function (callback) {
  connection.query("SELECT name FROM department ORDER BY name", function (err, res) {
    if (err) {
      throw err;
    }
    if (res.length) {
      for (var i = 0; i < res.length; i++) {
        departments.push(res[i].name);
      }
    }
    callback (null, departments)
  })
}
  
var getRolesNames = function (callback) {
  connection.query("SELECT title FROM role ORDER BY title", function (err, res) {
    if (err) {
      throw err;
    }
    if (res.length) {
      for (var i = 0; i < res.length; i++) {
        roles.push(res[i].title);
      }
    }
    callback(null, roles)
  })
}

var getEmployeesName = function (callback) {

  connection.query("SELECT firstName, lastName FROM employee ORDER BY lastName", function (err, res) {
    if (err) {
      throw err;
    }
    if (res.length) {
      for (var i = 0; i < res.length; i++) {
        employees.push(res[i].firstName + " " + res[i].lastName);
      }
    }
    callback(null, employees)
  })
}

var getManagersName = function (callback) {

  connection.query("SELECT firstName, lastName FROM employee WHERE managerID = 1 OR managerID is null ORDER BY lastName", function (err, res) {
    if (err) {
      throw err;
    }
    if (res.length) {
      for (var i = 0; i < res.length; i++) {
        managers.push(res[i].firstName + " " + res[i].lastName);
      }
    }
    callback(null, managers)
  })
}

// Tests that the functions work 
console.log("Call Function");
getDepartmentNames(function (err, departments) {
  if (err) console.log("Database error!");
  else console.log(departments);
})

console.log("Call Function");
getRolesNames(function (err, roles) {
  if (err) console.log("Database error!");
  else console.log(roles);
})

console.log("Call Function");
getEmployeesName(function (err, employees) {
  if (err) console.log("Database error!");
  else console.log(employees);
})

console.log("Call Function");
getManagersName(function (err, managers) {
  if (err) console.log("Database error!");
  else console.log(managers);
})

