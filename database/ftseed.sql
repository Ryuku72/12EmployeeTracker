INSERT INTO department (name) VALUES ("Marketing");
INSERT INTO department (name) VALUES ("Legal");
INSERT INTO department (name) VALUES ("Research and Development");
INSERT INTO department (name) VALUES ("Information Technology");
INSERT INTO department (name) VALUES ("Enquiries");
INSERT INTO department (name) VALUES ("Security");

INSERT INTO role (title, salary) VALUES ("CEO", 520000.00);
INSERT INTO role (title, salary) VALUES ("Marketing Manager", 165000.50);
INSERT INTO role (title, salary) VALUES ("Sales", 122322.00);
INSERT INTO role (title, salary) VALUES ("Public Relations", 118009.28);
INSERT INTO role (title, salary) VALUES ("Graphic Design", 92000);
INSERT INTO role (title, salary) VALUES ("Analyst", 102890.19);
INSERT INTO role (title, salary) VALUES ("Law Office Manager", 135000.50);
INSERT INTO role (title, salary) VALUES ("Consultant", 102105.00);
INSERT INTO role (title, salary) VALUES ("Accounting", 100371.93);
INSERT INTO role (title, salary) VALUES ("Corperate Lawyer", 120220.99);
INSERT INTO role (title, salary) VALUES ("Paralegal", 108013.50);
INSERT INTO role (title, salary) VALUES ("Research Manager", 205000.50);
INSERT INTO role (title, salary) VALUES ("Robotics Engineer", 322070.35);
INSERT INTO role (title, salary) VALUES ("Mechanical Engineer", 272108.33);
INSERT INTO role (title, salary) VALUES ("Physicist", 302040.22);
INSERT INTO role (title, salary) VALUES ("Electronics Engineer", 199222.22);
INSERT INTO role (title, salary) VALUES ("IT Manager", 105000.50);
INSERT INTO role (title, salary) VALUES ("Software Engineer", 87000.20);
INSERT INTO role (title, salary) VALUES ("Network Engineer", 92021.87);
INSERT INTO role (title, salary) VALUES ("Adminstration", 102001.01);
INSERT INTO role (title, salary) VALUES ("Network Architect", 87333.19);
INSERT INTO role (title, salary) VALUES ("CC Manager", 165000.50);
INSERT INTO role (title, salary) VALUES ("Feedback administration", 51081.22);
INSERT INTO role (title, salary) VALUES ("Systems specialist", 42992.17);
INSERT INTO role (title, salary) VALUES ("Customer Service Representive", 39988.78);
INSERT INTO role (title, salary) VALUES ("Security Manager", 75200.50);
INSERT INTO role (title, salary) VALUES ("Security Officer", 64118.21);
INSERT INTO role (title, salary) VALUES ("Surveillance", 58128.92);
INSERT INTO role (title, salary) VALUES ("Security Guard", 62118.21);
INSERT INTO role (title, salary) VALUES ("Unknown", 420871.22);

INSERT INTO employee (firstName, lastName, roleID, managerID) VALUES ("Joshua K", "Bader", 1, null);

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




