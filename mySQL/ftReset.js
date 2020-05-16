const chalk = require("chalk")
const clear = require("clear")
const connection = require("../database/connection")


const foreignQ = {

        resetServer: async function () {

            clear();

            await connection.query("DROP DATABASE IF EXISTS foreign_toolboxDB", function (err, res) {
                if (err) throw err;
                if (res) console.log(chalk.bold.red("DATA BASE DROPPED"));
            });
            await connection.query("create database foreign_toolboxDB;", function (err, res) {
                if (err) throw err;
                if (res) console.log(chalk.bold.yellow("foreign_toolboxDB database created"));
            });
            await connection.query("use foreign_toolboxDB;", function (err, res) {
                if (err) throw err;
                if (res) console.log(chalk.bold.white("foreign_toolboxDB database created"));
            });

            const tableD = `create table department (
            id INT NOT NULL AUTO_INCREMENT,
            sector VARCHAR(30),
            PRIMARY KEY (id)
            )`;

            await connection.query(tableD, function (err, res) {
                if (err) throw err;
                if (res) console.log(chalk.bold.red("DEPARTMENT") + chalk.bold.white(" table created!"));
            });

            const tableR = `create table role (
            id INT NOT NULL AUTO_INCREMENT,
            title VARCHAR(30),
            salary Decimal(8,2),
            departmentID INT,
            PRIMARY KEY (id),
            FOREIGN KEY (departmentID) references department(id)
            )`;

            await connection.query(tableR, function (err, res) {
                if (err) throw err;
                if (res) console.log(chalk.bold.red("ROLE") + chalk.bold.white(" table created!"));
            });

            const tableE = `create table employee (
            id INT NOT NULL AUTO_INCREMENT,
            firstName varchar(30),
            lastName varchar(30),
            roleID INT,
            managerID INT,
            PRIMARY KEY(id),
            FOREIGN KEY (roleID)references role(id),
            FOREIGN KEY (managerID) references role(id)
            )`;

            await connection.query(tableE, function (err, res) {
                if (err) throw err;
                if (res) console.log(chalk.bold.red("EMPLOYEE") + chalk.bold.white(" table created!"));
            });

            await connection.query(`INSERT INTO department(sector) VALUES("CEO")`, function (err, res) {
                if (err) throw err;
                if (res) console.log(chalk.bold.blue("CEO") + chalk.bold.white(" department added"));
            });

            await connection.query(`INSERT INTO department(sector) VALUES("Marketing")`, function (err, res) {
                if (err) throw err;
                if (res) console.log(chalk.bold.blue("MARKETING") + chalk.bold.white(" department added"));
            });

            await connection.query(`INSERT INTO department(sector) VALUES("Legal")`, function (err, res) {
                if (err) throw err;
                if (res) console.log(chalk.bold.blue("LEGAL") + chalk.bold.white(" department added"));
            });

            await connection.query(`INSERT INTO department(sector) VALUES("Research and Development")`, function (err, res) {
                if (err) throw err;
                if (res) console.log(chalk.bold.blue("RESEARCH AND DEVELOPMENT") + chalk.bold.white(" department added"));
            });

            await connection.query(`INSERT INTO department(sector) VALUES("Information Technology")`, function (err, res) {
                if (err) throw err;
                if (res) console.log(chalk.bold.blue("INFORMATION TECHNOLOGY") + chalk.bold.white(" department added"));
            });

            await connection.query(`INSERT INTO department(sector) VALUES("Enquiries")`, function (err, res) {
                if (err) throw err;
                if (res) console.log(chalk.bold.blue("ENQUIRIES") + chalk.bold.white(" department added"));
            });

            await connection.query(`INSERT INTO department(sector) VALUES("Security")`, function (err, res) {
                if (err) throw err;
                if (res) console.log(chalk.bold.blue("SECURITY") + chalk.bold.white(" department added"));
            });

            await connection.query(`INSERT INTO role(title, salary, departmentID) VALUES("Director", 520000.00, 1)`, function (err, res) {
                if (err) throw err;
                if (res) console.log(chalk.bold.yellow("DIRECTOR") + chalk.bold.white(" position added"));
            });

            await connection.query(`INSERT INTO role(title, salary, departmentID) VALUES("Marketing Manager", 165000.50, 2)`, function (err, res) {
                if (err) throw err;
                if (res) console.log(chalk.bold.yellow("MARKETING MANAGER") + chalk.bold.white(" position added"));
            });

            await connection.query(`INSERT INTO role(title, salary, departmentID) VALUES("Sales", 122322.00, 2)`, function (err, res) {
                if (err) throw err;
                if (res) console.log(chalk.bold.yellow("SALES") + chalk.bold.white(" position added"));
            });

            await connection.query(`INSERT INTO role(title, salary, departmentID) VALUES("Public Relations", 118009.28, 2)`, function (err, res) {
                if (err) throw err;
                if (res) console.log(chalk.bold.yellow("PUBLIC RELATIONS") + chalk.bold.white(" position added"));
            });

            await connection.query(`INSERT INTO role(title, salary, departmentID) VALUES("Graphic Design", 92000, 2)`, function (err, res) {
                if (err) throw err;
                if (res) console.log(chalk.bold.yellow("GRAPHIC DESIGN") + chalk.bold.white(" position added"));
            });

            await connection.query(`INSERT INTO role(title, salary, departmentID) VALUES("Analyst", 102890.19, 2)`, function (err, res) {
                if (err) throw err;
                if (res) console.log(chalk.bold.yellow("ANALYST") + chalk.bold.white(" position added"));
            });

            await connection.query(`INSERT INTO role(title, salary, departmentID) VALUES("Law Office Manager", 135000.50, 3)`, function (err, res) {
                if (err) throw err;
                if (res) console.log(chalk.bold.yellow("LAW OFFICE MANAGER") + chalk.bold.white(" position added"));
            });

            await connection.query(`INSERT INTO role(title, salary, departmentID) VALUES("Consultant", 102105.00, 3)`, function (err, res) {
                if (err) throw err;
                if (res) console.log(chalk.bold.yellow("CONSULTANT") + chalk.bold.white(" position added"));
            });

            await connection.query(`INSERT INTO role(title, salary, departmentID) VALUES("Accountant", 100371.93, 3)`, function (err, res) {
                if (err) throw err;
                if (res) console.log(chalk.bold.yellow("ACCOUNTANT") + chalk.bold.white(" position added"));
            });

            await connection.query(`INSERT INTO role(title, salary, departmentID) VALUES("Corperate Lawyer", 120220.99, 3)`, function (err, res) {
                if (err) throw err;
                if (res) console.log(chalk.bold.yellow("CORPERATE LAWYER") + chalk.bold.white(" position added"));
            });

            await connection.query(`INSERT INTO role(title, salary, departmentID) VALUES("Paralegal", 108013.50, 3)`, function (err, res) {
                if (err) throw err;
                if (res) console.log(chalk.bold.yellow("PARALEGAL") + chalk.bold.white(" position added"));
            });

            await connection.query(`INSERT INTO role(title, salary, departmentID) VALUES("Research Manager", 205000.50, 4)`, function (err, res) {
                if (err) throw err;
                if (res) console.log(chalk.bold.yellow("PARALEGAL") + chalk.bold.white(" position added"));
            });

            await connection.query(`INSERT INTO role(title, salary, departmentID) VALUES("Robotics Engineer", 322070.35, 4)`, function (err, res) {
                if (err) throw err;
                if (res) console.log(chalk.bold.yellow("ROBOTICS ENGINEER") + chalk.bold.white(" position added"));
            });

            await connection.query(`INSERT INTO role(title, salary, departmentID) VALUES("Mechanical Engineer", 272108.33, 4)`, function (err, res) {
                if (err) throw err;
                if (res) console.log(chalk.bold.yellow("MECHANICAL ENGINEER") + chalk.bold.white(" position added"));
            });

            await connection.query(`INSERT INTO role(title, salary, departmentID) VALUES("Physicist", 302040.22, 4)`, function (err, res) {
                if (err) throw err;
                if (res) console.log(chalk.bold.yellow("PHYSICIST") + chalk.bold.white(" position added"));
            });

            await connection.query(`INSERT INTO role(title, salary, departmentID) VALUES("Electronics Engineer", 199222.22, 4)`, function (err, res) {
                if (err) throw err;
                if (res) console.log(chalk.bold.yellow("ELECTRONIC ENGINEER") + chalk.bold.white(" position added"));
            });

            await connection.query(`INSERT INTO role(title, salary, departmentID) VALUES("IT Manager", 105000.50, 5)`, function (err, res) {
                if (err) throw err;
                if (res) console.log(chalk.bold.yellow("IT MANAGER") + chalk.bold.white(" position added"));
            });

            await connection.query(`INSERT INTO role(title, salary, departmentID) VALUES("Software Engineer", 87000.20, 5)`, function (err, res) {
                if (err) throw err;
                if (res) console.log(chalk.bold.yellow("SOFTWARE ENGINEER") + chalk.bold.white(" position added"));
            });

            await connection.query(`INSERT INTO role(title, salary, departmentID) VALUES("Network Engineer", 92021.87, 5)`, function (err, res) {
                if (err) throw err;
                if (res) console.log(chalk.bold.yellow("NETWORK ENGINEER") + chalk.bold.white(" position added"));
            });

            await connection.query(`INSERT INTO role(title, salary, departmentID) VALUES("Adminstration", 102001.01, 5)`, function (err, res) {
                if (err) throw err;
                if (res) console.log(chalk.bold.yellow("ADMINSTRATION") + chalk.bold.white(" position added"));
            });

            await connection.query(`INSERT INTO role(title, salary, departmentID) VALUES("Network Architect", 87333.19, 5)`, function (err, res) {
                if (err) throw err;
                if (res) console.log(chalk.bold.yellow("NETWORK ARCHITECT") + chalk.bold.white(" position added"));
            });

            await connection.query(`INSERT INTO role(title, salary, departmentID) VALUES("CC Manager", 165000.50, 6)`, function (err, res) {
                if (err) throw err;
                if (res) console.log(chalk.bold.yellow("CC MANAGER") + chalk.bold.white(" position added"));
            });

            await connection.query(`INSERT INTO role(title, salary, departmentID) VALUES("Feedback administration", 51081.22, 6)`, function (err, res) {
                if (err) throw err;
                if (res) console.log(chalk.bold.yellow("FEEDBACK ADMINISTRATION") + chalk.bold.white(" position added"));
            });

            await connection.query(`INSERT INTO role(title, salary, departmentID) VALUES("Systems specialist", 42992.17, 6)`, function (err, res) {
                if (err) throw err;
                if (res) console.log(chalk.bold.yellow("SYSTEMS SPECIALIST") + chalk.bold.white(" position added"));
            });

            await connection.query(`INSERT INTO role(title, salary, departmentID) VALUES("Customer Service Representive", 39988.78, 6)`, function (err, res) {
                if (err) throw err;
                if (res) console.log(chalk.bold.yellow("CUSTOMER SERVICE REPRESENTIVE") + chalk.bold.white(" position added"));
            });

            await connection.query(`INSERT INTO role(title, salary, departmentID) VALUES("Security Manager", 75200.50, 7)`, function (err, res) {
                if (err) throw err;
                if (res) console.log(chalk.bold.yellow("SECURITY MANAGER") + chalk.bold.white(" position added"));
            });

            await connection.query(`INSERT INTO role(title, salary, departmentID) VALUES("Security Officer", 64118.21, 7)`, function (err, res) {
                if (err) throw err;
                if (res) console.log(chalk.bold.yellow("SECURITY OFFICER") + chalk.bold.white(" position added"));
            });

            await connection.query(`INSERT INTO role(title, salary, departmentID) VALUES("Surveillance", 58128.92, 7)`, function (err, res) {
                if (err) throw err;
                if (res) console.log(chalk.bold.yellow("SURVEILLANCE") + chalk.bold.white(" position added"));
            });

            await connection.query(`INSERT INTO role(title, salary, departmentID) VALUES("Security Guard", 62118.21, 7)`, function (err, res) {
                if (err) throw err;
                if (res) console.log(chalk.bold.yellow("SECURITY GUARD") + chalk.bold.white(" position added"));
            });

            await connection.query(`INSERT INTO role(title, salary, departmentID) VALUES("Unknown", 420871.22, 1)`, function (err, res) {
                if (err) throw err;
                if (res) console.log(chalk.bold.yellow("UNKNOWN") + chalk.bold.white(" position added"));
            });

            await connection.query(`INSERT INTO employee(firstName, lastName, roleID, managerID) VALUES("Joshua K", "Bader", 1, 1)`, function (err, res) {
                if (err) throw err;
                if (res) console.log(chalk.bold.green("Employee added"));
            });

            await connection.query(`INSERT INTO employee(firstName, lastName, roleID, managerID) VALUES("Jarrad", "Vennett", 2, 1)`, function (err, res) {
                if (err) throw err;
                if (res) console.log(chalk.bold.green("Employee added"));
            });

            await connection.query(`INSERT INTO employee(firstName, lastName, roleID, managerID) VALUES("Michael", "Burry", 5, 2)`, function (err, res) {
                if (err) throw err;
                if (res) console.log(chalk.bold.green("Employee added"));
            });

            await connection.query(`INSERT INTO employee(firstName, lastName, roleID, managerID) VALUES("Mark", "Baum", 3, 2)`, function (err, res) {
                if (err) throw err;
                if (res) console.log(chalk.bold.green("Employee added"));
            });

            await connection.query(`INSERT INTO employee(firstName, lastName, roleID, managerID) VALUES("Cynthia", "Baum", 3, 2)`, function (err, res) {
                if (err) throw err;
                if (res) console.log(chalk.bold.green("Employee added"));
            });

            await connection.query(`INSERT INTO employee(firstName, lastName, roleID, managerID) VALUES("Ben", "Rickert", 4, 2)`, function (err, res) {
                if (err) throw err;
                if (res) console.log(chalk.bold.green("Employee added"));
            });

            await connection.query(`INSERT INTO employee(firstName, lastName, roleID, managerID) VALUES("Lewis", "Ranieri", 6, 2)`, function (err, res) {
                if (err) throw err;
                if (res) console.log(chalk.bold.green("Employee added"));
            });

            await connection.query(`INSERT INTO employee(firstName, lastName, roleID, managerID) VALUES("Mitch", "McDeere", 7, 1)`, function (err, res) {
                if (err) throw err;
                if (res) console.log(chalk.bold.green("Employee added"));
            });

            await connection.query(`INSERT INTO employee(firstName, lastName, roleID, managerID) VALUES("Abby", "McDeere", 8, 7)`, function (err, res) {
                if (err) throw err;
                if (res) console.log(chalk.bold.green("Employee added"));
            });

            await connection.query(`INSERT INTO employee(firstName, lastName, roleID, managerID) VALUES("Avery", "Tolar", 9, 7)`, function (err, res) {
                if (err) throw err;
                if (res) console.log(chalk.bold.green("Employee added"));
            });

            await connection.query(`INSERT INTO employee(firstName, lastName, roleID, managerID) VALUES("Oliver", "Lambert", 9, 7)`, function (err, res) {
                if (err) throw err;
                if (res) console.log(chalk.bold.green("Employee added"));
            });

            await connection.query(`INSERT INTO employee(firstName, lastName, roleID, managerID) VALUES("Lamar", "Quinn", 10, 7)`, function (err, res) {
                if (err) throw err;
                if (res) console.log(chalk.bold.green("Employee added"));
            });

            await connection.query(`INSERT INTO employee(firstName, lastName, roleID, managerID) VALUES("William", "Devasher", 11, 7)`, function (err, res) {
                if (err) throw err;
                if (res) console.log(chalk.bold.green("Employee added"));
            });

            await connection.query(`INSERT INTO employee(firstName, lastName, roleID, managerID) VALUES("Tammy", "Hemphill", 11, 7)`, function (err, res) {
                if (err) throw err;
                if (res) console.log(chalk.bold.green("Employee added"));
            });

            await connection.query(`INSERT INTO employee(firstName, lastName, roleID, managerID) VALUES("Neil", "Armstrong", 12, 1)`, function (err, res) {
                if (err) throw err;
                if (res) console.log(chalk.bold.green("Employee added"));
            });

            await connection.query(`INSERT INTO employee(firstName, lastName, roleID, managerID) VALUES("Ed", "White", 14, 12)`, function (err, res) {
                if (err) throw err;
                if (res) console.log(chalk.bold.green("Employee added"));
            });

            await connection.query(`INSERT INTO employee(firstName, lastName, roleID, managerID) VALUES("Deke", "Slayton", 13, 12)`, function (err, res) {
                if (err) throw err;
                if (res) console.log(chalk.bold.green("Employee added"));
            });

            await connection.query(`INSERT INTO employee(firstName, lastName, roleID, managerID) VALUES("Buzz", "Aldrin", 14, 12)`, function (err, res) {
                if (err) throw err;
                if (res) console.log(chalk.bold.green("Employee added"));
            });

            await connection.query(`INSERT INTO employee(firstName, lastName, roleID, managerID) VALUES("Janet", "Armstrong", 16, 12)`, function (err, res) {
                if (err) throw err;
                if (res) console.log(chalk.bold.green("Employee added"));
            });

            await connection.query(`INSERT INTO employee(firstName, lastName, roleID, managerID) VALUES("Elliot", "See", 15, 12)`, function (err, res) {
                if (err) throw err;
                if (res) console.log(chalk.bold.green("Employee added"));
            });

            await connection.query(`INSERT INTO employee(firstName, lastName, roleID, managerID) VALUES("Patrick", "White", 13, 12)`, function (err, res) {
                if (err) throw err;
                if (res) console.log(chalk.bold.green("Employee added"));
            });

            await connection.query(`INSERT INTO employee(firstName, lastName, roleID, managerID) VALUES("Robert", "Gilruth", 16, 12)`, function (err, res) {
                if (err) throw err;
                if (res) console.log(chalk.bold.green("Employee added"));
            });

            await connection.query(`INSERT INTO employee(firstName, lastName, roleID, managerID) VALUES("Douglas", "Rayholm", 17, 1)`, function (err, res) {
                if (err) throw err;
                if (res) console.log(chalk.bold.green("Employee added"));
            });

            await connection.query(`INSERT INTO employee(firstName, lastName, roleID, managerID) VALUES("Roy", "Trenneman", 19, 17)`, function (err, res) {
                if (err) throw err;
                if (res) console.log(chalk.bold.green("Employee added"));
            });

            await connection.query(`INSERT INTO employee(firstName, lastName, roleID, managerID) VALUES("Jennifer", "Barber", 20, 17)`, function (err, res) {
                if (err) throw err;
                if (res) console.log(chalk.bold.green("Employee added"));
            });

            await connection.query(`INSERT INTO employee(firstName, lastName, roleID, managerID) VALUES("Maurice", "Moss", 18, 17)`, function (err, res) {
                if (err) throw err;
                if (res) console.log(chalk.bold.green("Employee added"));
            });

            await connection.query(`INSERT INTO employee(firstName, lastName, roleID, managerID) VALUES("Denholm", "Reyholm", 20, 17)`, function (err, res) {
                if (err) throw err;
                if (res) console.log(chalk.bold.green("Employee added"));
            });

            await connection.query(`INSERT INTO employee(firstName, lastName, roleID, managerID) VALUES("Richmond", "Dracula", 21, 17)`, function (err, res) {
                if (err) throw err;
                if (res) console.log(chalk.bold.green("Employee added"));
            });

            await connection.query(`INSERT INTO employee(firstName, lastName, roleID, managerID) VALUES("Michael", "Scott", 22, 1)`, function (err, res) {
                if (err) throw err;
                if (res) console.log(chalk.bold.green("Employee added"));
            });

            await connection.query(`INSERT INTO employee(firstName, lastName, roleID, managerID) VALUES("Dwight", "Schrute", 23, 22)`, function (err, res) {
                if (err) throw err;
                if (res) console.log(chalk.bold.green("Employee added"));
            });

            await connection.query(`INSERT INTO employee(firstName, lastName, roleID, managerID) VALUES("Jim", "Halpert", 25, 22)`, function (err, res) {
                if (err) throw err;
                if (res) console.log(chalk.bold.green("Employee added"));
            });

            await connection.query(`INSERT INTO employee(firstName, lastName, roleID, managerID) VALUES("Pam", "Beesly", 25, 22)`, function (err, res) {
                if (err) throw err;
                if (res) console.log(chalk.bold.green("Employee added"));
            });

            await connection.query(`INSERT INTO employee(firstName, lastName, roleID, managerID) VALUES("Kelly", "Kapoor", 24, 22)`, function (err, res) {
                if (err) throw err;
                if (res) console.log(chalk.bold.green("Employee added"));
            });

            await connection.query(`INSERT INTO employee(firstName, lastName, roleID, managerID) VALUES("Stanley", "Hudson", 25, 22)`, function (err, res) {
                if (err) throw err;
                if (res) console.log(chalk.bold.green("Employee added"));
            });

            await connection.query(`INSERT INTO employee(firstName, lastName, roleID, managerID) VALUES("Angela", "Martin", 23, 22)`, function (err, res) {
                if (err) throw err;
                if (res) console.log(chalk.bold.green("Employee added"));
            });

            await connection.query(`INSERT INTO employee(firstName, lastName, roleID, managerID) VALUES("Kevin", "Malone", 23, 22)`, function (err, res) {
                if (err) throw err;
                if (res) console.log(chalk.bold.green("Employee added"));
            });

            await connection.query(`INSERT INTO employee(firstName, lastName, roleID, managerID) VALUES("Phyllis", "Vance", 24, 22)`, function (err, res) {
                if (err) throw err;
                if (res) console.log(chalk.bold.green("Employee added"));
            });

            await connection.query(`INSERT INTO employee(firstName, lastName, roleID, managerID) VALUES("Creed", "Bratton", 23, 22)`, function (err, res) {
                if (err) throw err;
                if (res) console.log(chalk.bold.green("Employee added"));
            });

            await connection.query(`INSERT INTO employee(firstName, lastName, roleID, managerID) VALUES("Meredith", "Palmer", 25, 22)`, function (err, res) {
                if (err) throw err;
                if (res) console.log(chalk.bold.green("Employee added"));
            });

            await connection.query(`INSERT INTO employee(firstName, lastName, roleID, managerID) VALUES("Nick", "Fury", 26, 1)`, function (err, res) {
                if (err) throw err;
                if (res) console.log(chalk.bold.green("Employee added"));
            });

            await connection.query(`INSERT INTO employee(firstName, lastName, roleID, managerID) VALUES("Tony", "Stark", 29, 1)`, function (err, res) {
                if (err) throw err;
                if (res) console.log(chalk.bold.green("Employee added"));
            });

            await connection.query(`INSERT INTO employee(firstName, lastName, roleID, managerID) VALUES("Bruce", "Banner", 29, 26)`, function (err, res) {
                if (err) throw err;
                if (res) console.log(chalk.bold.green("Employee added"));
            });

            await connection.query(`INSERT INTO employee(firstName, lastName, roleID, managerID) VALUES("Thor", "OdinSon", 29, 26)`, function (err, res) {
                if (err) throw err;
                if (res) console.log(chalk.bold.green("Employee added"));
            });

            await connection.query(`INSERT INTO employee(firstName, lastName, roleID, managerID) VALUES("Steve", "Rogers", 27, 26)`, function (err, res) {
                if (err) throw err;
                if (res) console.log(chalk.bold.green("Employee added"));
            });

            await connection.query(`INSERT INTO employee(firstName, lastName, roleID, managerID) VALUES("Natasha", "Romanoff", 28, 26)`, function (err, res) {
                if (err) throw err;
                if (res) console.log(chalk.bold.green("Employee added"));
            });

            await connection.query(`INSERT INTO employee(firstName, lastName, roleID, managerID) VALUES("Clint", "Barton", 28, 26)`, function (err, res) {
                if (err) throw err;
                if (res) console.log(chalk.bold.green("Employee added"));
            });

            await connection.query(`INSERT INTO employee(firstName, lastName, roleID, managerID) VALUES("Clint", "Barton", 28, 26)`, function (err, res) {
                if (err) throw err;
                if (res) console.log(chalk.bold.green("Employee added"));
            });

            await connection.query(`INSERT INTO employee(firstName, lastName, roleID, managerID) VALUES("Phil", "Coulson", 28, 26)`, function (err, res) {
                if (err) throw err;
                if (res) console.log(chalk.bold.green("Employee added"));
            });

            await connection.query(`INSERT INTO employee(firstName, lastName, roleID, managerID) VALUES("Maria", "Hill", 28, 26)`, function (err, res) {
                if (err) throw err;
                if (res) console.log(chalk.bold.green("Employee added"));
            });

            await connection.query(`INSERT INTO employee(firstName, lastName, roleID, managerID) VALUES("Kokomi", "Bader", 30, 1)`, function (err, res) {
                if (err) throw err;
                if (res) console.log(chalk.bold.green("Employee added. \n\n") + chalk.bold.yellow("DATABASE HAS BEEN RESET. LEAVING DATABASE"));
            });
            
            await connection.end(function(err,res){
                if (err) throw err;
                if (res) return console.log("Thank you")
            })
        },

        }

        module.exports = foreignQ