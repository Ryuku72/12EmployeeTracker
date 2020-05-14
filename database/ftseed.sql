-- Database of Departments, Roles and Employees --
INSERT INTO department (sector) VALUES ("CEO");
INSERT INTO department (sector) VALUES ("Marketing");
INSERT INTO department (sector) VALUES ("Legal");
INSERT INTO department (sector) VALUES ("Research and Development");
INSERT INTO department (sector) VALUES ("Information Technology");
INSERT INTO department (sector) VALUES ("Enquiries");
INSERT INTO department (sector) VALUES ("Security");

INSERT INTO role (title, salary, departmentID) VALUES ("Director", 520000.00, 1);
INSERT INTO role (title, salary, departmentID) VALUES ("Marketing Manager", 165000.50, 2);
INSERT INTO role (title, salary, departmentID) VALUES ("Sales", 122322.00, 2);
INSERT INTO role (title, salary, departmentID) VALUES ("Public Relations", 118009.28, 2);
INSERT INTO role (title, salary, departmentID) VALUES ("Graphic Design", 92000, 2);
INSERT INTO role (title, salary, departmentID) VALUES ("Analyst", 102890.19, 2);
INSERT INTO role (title, salary, departmentID) VALUES ("Law Office Manager", 135000.50, 3);
INSERT INTO role (title, salary, departmentID) VALUES ("Consultant", 102105.00, 3);
INSERT INTO role (title, salary, departmentID) VALUES ("Accounting", 100371.93, 3);
INSERT INTO role (title, salary, departmentID) VALUES ("Corperate Lawyer", 120220.99, 3);
INSERT INTO role (title, salary, departmentID) VALUES ("Paralegal", 108013.50, 3);
INSERT INTO role (title, salary, departmentID) VALUES ("Research Manager", 205000.50, 4);
INSERT INTO role (title, salary, departmentID) VALUES ("Robotics Engineer", 322070.35, 4);
INSERT INTO role (title, salary, departmentID) VALUES ("Mechanical Engineer", 272108.33, 4);
INSERT INTO role (title, salary, departmentID) VALUES ("Physicist", 302040.22, 4);
INSERT INTO role (title, salary, departmentID) VALUES ("Electronics Engineer", 199222.22, 4);
INSERT INTO role (title, salary, departmentID) VALUES ("IT Manager", 105000.50, 5);
INSERT INTO role (title, salary, departmentID) VALUES ("Software Engineer", 87000.20, 5);
INSERT INTO role (title, salary, departmentID) VALUES ("Network Engineer", 92021.87, 5);
INSERT INTO role (title, salary, departmentID) VALUES ("Adminstration", 102001.01, 5);
INSERT INTO role (title, salary, departmentID) VALUES ("Network Architect", 87333.19, 5);
INSERT INTO role (title, salary, departmentID) VALUES ("CC Manager", 165000.50, 6);
INSERT INTO role (title, salary, departmentID) VALUES ("Feedback administration", 51081.22, 6);
INSERT INTO role (title, salary, departmentID) VALUES ("Systems specialist", 42992.17, 6);
INSERT INTO role (title, salary, departmentID) VALUES ("Customer Service Representive", 39988.78, 6);
INSERT INTO role (title, salary, departmentID) VALUES ("Security Manager", 75200.50, 7);
INSERT INTO role (title, salary, departmentID) VALUES ("Security Officer", 64118.21, 7);
INSERT INTO role (title, salary, departmentID) VALUES ("Surveillance", 58128.92, 7);
INSERT INTO role (title, salary, departmentID) VALUES ("Security Guard", 62118.21, 7);
INSERT INTO role (title, salary, departmentID) VALUES ("Unknown", 420871.22, 1);

INSERT INTO employee (firstName, lastName, roleID, managerID) VALUES ("Joshua K", "Bader", 1, 1);

INSERT INTO employee (firstName, lastName, roleID, managerID) VALUES ("Jarrad", "Vennett", 2, 1);
INSERT INTO employee (firstName, lastName, roleID, managerID) VALUES ("Michael", "Burry", 5, 2);
INSERT INTO employee (firstName, lastName, roleID, managerID) VALUES ("Mark", "Baum", 3, 2);
INSERT INTO employee (firstName, lastName, roleID, managerID) VALUES ("Cynthia", "Baum", 3, 2);
INSERT INTO employee (firstName, lastName, roleID, managerID) VALUES ("Ben","Rickert", 4, 2);
INSERT INTO employee (firstName, lastName, roleID, managerID) VALUES ("Lewis", "Ranieri", 6, 2);

INSERT INTO employee (firstName, lastName, roleID, managerID) VALUES ("Mitch", "McDeere", 7, 1);
INSERT INTO employee (firstName, lastName, roleID, managerID) VALUES ("Abby", "McDeere", 8, 7);
INSERT INTO employee (firstName, lastName, roleID, managerID) VALUES ("Avery", "Tolar", 9, 7);
INSERT INTO employee (firstName, lastName, roleID, managerID) VALUES ("Oliver", "Lambert", 9, 7);
INSERT INTO employee (firstName, lastName, roleID, managerID) VALUES ("Lamar", "Quinn", 10, 7);
INSERT INTO employee (firstName, lastName, roleID, managerID) VALUES ("William", "Devasher", 11, 7);
INSERT INTO employee (firstName, lastName, roleID, managerID) VALUES ("Tammy", "Hemphill", 11, 7);

INSERT INTO employee (firstName, lastName, roleID, managerID) VALUES ("Neil", "Armstrong", 12, 1);
INSERT INTO employee (firstName, lastName, roleID, managerID) VALUES ("Ed", "White", 14, 12);
INSERT INTO employee (firstName, lastName, roleID, managerID) VALUES ("Deke", "Slayton", 13, 12);
INSERT INTO employee (firstName, lastName, roleID, managerID) VALUES ("Buzz", "Aldrin", 14, 12);
INSERT INTO employee (firstName, lastName, roleID, managerID) VALUES ("Janet", "Armstrong", 16, 12);
INSERT INTO employee (firstName, lastName, roleID, managerID) VALUES ("Elliot", "See", 15, 12);
INSERT INTO employee (firstName, lastName, roleID, managerID) VALUES ("Patrick", "White", 13, 12);
INSERT INTO employee (firstName, lastName, roleID, managerID) VALUES ("Robert", "Gilruth", 16, 12);

INSERT INTO employee (firstName, lastName, roleID, managerID) VALUES ("Douglas", "Rayholm", 17, 1);
INSERT INTO employee (firstName, lastName, roleID, managerID) VALUES ("Roy", "Trenneman", 19, 17);
INSERT INTO employee (firstName, lastName, roleID, managerID) VALUES ("Jennifer", "Barber", 20, 17);
INSERT INTO employee (firstName, lastName, roleID, managerID) VALUES ("Maurice", "Moss", 18, 17);
INSERT INTO employee (firstName, lastName, roleID, managerID) VALUES ("Denholm", "Reyholm", 20, 17);
INSERT INTO employee (firstName, lastName, roleID, managerID) VALUES ("Richmond", "Dracula", 21, 17);

INSERT INTO employee (firstName, lastName, roleID, managerID) VALUES ("Michael", "Scott", 22, 1);
INSERT INTO employee (firstName, lastName, roleID, managerID) VALUES ("Dwight", "Schrute", 23, 22);
INSERT INTO employee (firstName, lastName, roleID, managerID) VALUES ("Jim", "Halpert", 25, 22);
INSERT INTO employee (firstName, lastName, roleID, managerID) VALUES ("Pam", "Beesly", 25, 22);
INSERT INTO employee (firstName, lastName, roleID, managerID) VALUES ("Kelly", "Kapoor", 24, 22);
INSERT INTO employee (firstName, lastName, roleID, managerID) VALUES ("Stanley", "Hudson", 25, 22);
INSERT INTO employee (firstName, lastName, roleID, managerID) VALUES ("Angela", "Martin", 23, 22);
INSERT INTO employee (firstName, lastName, roleID, managerID) VALUES ("Kevin", "Malone", 23, 22);
INSERT INTO employee (firstName, lastName, roleID, managerID) VALUES ("Phyllis", "Vance", 24, 22);
INSERT INTO employee (firstName, lastName, roleID, managerID) VALUES ("Creed", "Bratton", 23, 22);
INSERT INTO employee (firstName, lastName, roleID, managerID) VALUES ("Meredith", "Palmer", 25, 22);

INSERT INTO employee (firstName, lastName, roleID, managerID) VALUES ("Nick", "Fury", 26, 1);
INSERT INTO employee (firstName, lastName, roleID, managerID) VALUES ("Tony", "Stark", 29, 1);
INSERT INTO employee (firstName, lastName, roleID, managerID) VALUES ("Bruce", "Banner", 29, 26);
INSERT INTO employee (firstName, lastName, roleID, managerID) VALUES ("Thor", "OdinSon", 29, 26);
INSERT INTO employee (firstName, lastName, roleID, managerID) VALUES ("Steve", "Rogers", 27, 26);
INSERT INTO employee (firstName, lastName, roleID, managerID) VALUES ("Natasha", "Romanoff", 28, 26);
INSERT INTO employee (firstName, lastName, roleID, managerID) VALUES ("Clint", "Barton", 28, 26);
INSERT INTO employee (firstName, lastName, roleID, managerID) VALUES ("Phil", "Coulson", 28, 26);
INSERT INTO employee (firstName, lastName, roleID, managerID) VALUES ("Maria", "Hill", 28, 26);

INSERT INTO employee (firstName, lastName, roleID, managerID) VALUES ("Kokomi", "Bader", 30, 1); 