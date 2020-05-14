const logicDB = {

    //View 

    getDepartmentNames : async function (connection, callback) {
        let departments = [];
        const question = "SELECT * FROM department ORDER BY sector";
        const answer = function (err, res) {
          if (err) {
            throw err;
          } else {
            for (let i = 0; i < res.length; i++) {
              departments.push(res[i]);
            }
          }
          callback(null, departments)
        }
        await connection.query(question, answer);
      },
      
    getRoleNames : async function (connection, callback) {
        let roles = [];
        const question = "SELECT title, department.sector, salary FROM role INNER JOIN department ON departmentID = department.ID ORDER BY salary DESC";
        const answer = function (err, res) {
          if (err) {
            throw err;
          }
          if (res) {
            for (let i = 0; i < res.length; i++) {
              roles.push(res[i]);
            }
          }
          callback(null, roles)
        }
        await connection.query(question, answer)
      },
      
    getEmployeeName : async function (connection, callback) {
        let employees = [];
        const question = "SELECT firstName, lastName, roleID, ManagerID, department.sector FROM ((employee INNER JOIN role on roleID = role.id) Inner JOIN department ON departmentID = department.id) ORDER BY sector"
        const answer = function (err, res) {
          if (err) {
            throw err;
          }
          if (res) {
            for (let i = 0; i < res.length; i++) {
              employees.push(res[i]);
            }
          }
          callback(null, employees)
        }
        await connection.query(question, answer)
      },
      
    getManagerName : async function (connection, callback) {
        let managers = [];
        const question = "SELECT firstName, lastName, department.sector FROM ((employee INNER JOIN role on roleID = role.id) Inner JOIN department ON departmentID = department.id) WHERE managerID = 1";
        const answer = function (err, res) {
          if (err) {
            throw err;
          }
          if (res) {
            for (let i = 0; i < res.length; i++) {
              managers.push(res[i]);
            }
          }
          callback(null, managers)
        }
        await connection.query(question, answer)
      },
      
      
   
    // View by ID
     
    getDepartmentID : async function (connection, callback) {
        let departmentID = [];
        const question = "SELECT * FROM department WHERE id = ?";
        const input = [2];
        const answer = function (err, res) {
          if (err) {
            throw err;
          }
          if (res) {
            departmentID.push(res[0].sector);
          }
          callback(null, departmentID)
        }
      
        await connection.query(question, input, answer)
      },
      
      
    getRoleID : async function (connection, callback) {
        let roleID = [];
        const inputDB = [2]
        const question = "SELECT * FROM role WHERE id = ?";
        const answer = function (err, res) {
          if (err) {
            throw err;
          }
          if (res) {
            roleID.push(res[0].title);
          }
          callback(null, roleID)
        }
        await connection.q,uery(question, inputDB, answer)
      },
      
    getEmployeeID : async function (connection, callback) {
        let employeeID = [];
        const inputDB = [12]
        const question = "SELECT firstName, lastName FROM employee WHERE id = ?";
        const answer = function (err, res) {
          if (err) {
            throw err;
          }
          if (res) {
            employeeID.push(res[0].firstName + " " + res[0].lastName);
          }
          callback(null, employeeID)
        }
        await connection.query(question, inputDB, answer)
      },
       
    getManagerID : async function (connection, callback) {
        let managerID = [];
        const inputDB = 2;
        const question = "SELECT id, firstName, lastName FROM employee WHERE managerID = 1";
      
        const answer = function (err, res) {
          if (err) {
            throw err;
          }
          if (res) {
            managerID.push(res[inputDB - 1].firstName + " " + res[inputDB - 1].lastName);
          }
          callback(null, managerID)
        }
        await connection.query(question, answer)
      },
      
    //Inner join questions
      
    getEmployeeByDepartment : async function (connection, callback) {
        let employeeByDepartment = [];
        const inputDB = [1];
        const question = "SELECT firstName, lastName, department.sector FROM ((employee INNER JOIN role on roleID = role.id) Inner JOIN department ON departmentID = department.id) WHERE department.id = ?";
        const answer = function (err, res) {
          if (err) {
            throw err;
          }
          if (res) {
            for (let i = 0; i < res.length; i++) {
              employeeByDepartment.push(res[i].firstName + " " + res[i].lastName);
            }
          }
          callback(null, employeeByDepartment)
        }
        await connection.query(question, inputDB, answer)
      },
      
      
    getRoleByDepartment : async function (connection, callback) {
        let roleByDepartment = [];
        const inputDB = [3];
        const question = "SELECT title, salary, department.sector FROM role INNER JOIN department on departmentID = department.ID WHERE department.id = ?";
        const answer = function (err, res) {
          if (err) {
            throw err;
          }
          if (res) {
            for (let i = 0; i < res.length; i++) {
              roleByDepartment.push(res[i].sector + " " + res[i].title + " " + res[i].salary);
            }
          }
          callback(null, roleByDepartment)
        }
        await connection.query(question, inputDB, answer)
      },
      
      
    // add
      

addByDepartment : async function(connection,) {
        const question = "INSERT INTO department SET ?";
        const inputDB = {sector: "Special Department"};
        const answer = function (err, res) {
          if (err) throw err;
          if (res) console.log("Department " + inputDB.sector + " added");       
          }
        connection.query(question, inputDB, answer)
      },
      
addByRole : async function(connection, ){
        const question = "INSERT INTO role SET ?";
        const inputDB = {title: "Art Student", salary: 42000.00, departmentID: 2};
        const answer = function (err, res) {
          if (err) throw err; 
          if (res) console.log("role " + inputDB.title + " added");     
          }
          connection.query(question, inputDB, answer)
      },
      
addByEmployee : async function(connection, ) {
        const question = "INSERT INTO employee SET ?";
        const inputDB = {firstName: "Aki", lastName: "Bader", roleID: "8", managerID: "7"};
        const answer = function (err, res) {
          if (err) throw err; 
          if (res) console.log("employee " + inputDB.firstName + " " + inputDB.lastName + " added");     
          }
          connection.query(question, inputDB, answer)
      },

      
      // remove 
      
removeByDepartment : async function(connection, ) {
        const question = "DELETE from department WHERE sector = ?";
        const inputDB = ["Special Department"];
        const answer = function (err, res) {
          if (err) throw err;
          if (res) console.log("Department " + inputDB + " has been removed");       
          }
          connection.query(question, inputDB, answer)
      },
      
removeByRole : async function(connection, ) {
        const question = "DELETE from role WHERE title = ?";
        const inputDB = ["Art Student"];
        const answer = function (err, res) {
          if (err) throw err;
          if (res) console.log("Role " + inputDB + " has been removed");       
          }
          connection.query(question, inputDB, answer)
      },
  
      
removeByEmployee : async function(connection, ) {
        const question = "DELETE from employee WHERE firstName = ? AND lastName = ?";
        const inputDB = ["Aki", "Bader"];
        const answer = function (err, res) {
          if (err) throw err; 
          if (res) console.log("employee " + inputDB[0] + " " + inputDB[1] + " removed");     
          }
          connection.query(question, inputDB, answer)
      },
      
}

module.exports = logicDB;