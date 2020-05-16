DROP DATABASE IF EXISTS foreign_toolboxDB;

create database foreign_toolboxDB;

use foreign_toolboxDB;

create table department (
id INT NOT NULL AUTO_INCREMENT,
sector VARCHAR(30),
PRIMARY KEY (id)
);

create table role (
id INT NOT NULL AUTO_INCREMENT,
title VARCHAR(30),
salary Decimal(8,2),
departmentID INT,
PRIMARY KEY (id),
FOREIGN KEY (departmentID) references department(id)
);

create table employee (
id INT NOT NULL AUTO_INCREMENT,
firstName varchar(30),
lastName varchar(30),
roleID INT,
managerID INT,
PRIMARY KEY(id),
FOREIGN KEY (roleID)references role(id),
FOREIGN KEY (managerID) references role(id)
);
