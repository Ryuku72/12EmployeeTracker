![GitHub last commit](https://img.shields.io/github/last-commit/Ryuku72/HomeworkW12?style=for-the-badge)
![GitHub commit activity](https://img.shields.io/github/commit-activity/y/Ryuku72/HomeworkW12?style=for-the-badge)
![GitHub contributors](https://img.shields.io/github/contributors/Ryuku72/HomeworkW12?style=for-the-badge)


# Homework Week 12 
## Employee Tracker API
16th May 2020


### Aim
This week we continue learning about express, inquirer and node.js but add mySQL to the mix. mySQL is a database focus program and allows us to Create, Read, Update and Detroy information. Given our past leasons and our new tools our assignment was to make an Employee Tracker API that CREATES, READS, UPDATES and DESTROYS data. This was a very big project!


### Working Project Example
* YouTube Video https://youtu.be/JosM2APXioY
* GITHUB repo https://github.com/Ryuku72/HomeworkW12.git


## Key Concepts for HomeworkW10
- MySQL Workbench
- MySQL command prompt
- Creating and dropping databases and tables
- schema.sql and seeds.sql files
- CRUD
- Primary and foreign keys
- Prepared statements
- Joins
- ACID

 
## Contents
* [Build Process](#Build_Process)
* [Project Issues](#Project_Issues)
* [Future Plans](#future)
* [Installation](#Installation)
* [Usuage](#Usuage)
* [Tests](#Tests)
* [Additional_Information](#Additional_Information)



<a name="Build_Process">

## Build Process 

The is a two sided project. First you have to think about how you are going to get information from mySQL and next you have to consider how you are going to filer that information to get the result that you wanted.

I began this project by working on the `logic.js` file which contains a range of function that are intended to search or manipulate mySQL to get a result. In time some of these functions became pointless but there were leasons to be learnt. For example, how to use callbacks and why you would use callbacks over returns with async functions. There were problems here but I will cover that in issues. 

Once the logic was in place I used the `Switch` function and `Inquirer` to build my question database whilst adding in validation notes where possible. The bigger issue was always: 
1. What are the right questions to ask
2. Can I use `for` loops to get more information via nested async callbacks

Part 2 was a massive hurdle within itself. Now that I know how to use nested callbacks to create particular arrays things became easier.

This week we did cover ORM's and I did attempt to break things into separate folders however, I had issues. The files/ folders were
1. Connection: mySQl connnection
2. Logic: main functions
3. Header: Header graphic
4. Questions: Main Inquirer Questions
5. ftReset: Database reset

I really wanted to put more functions inside of `Logic.js` but as there were interacting functions within a number of functions insides `App.js` it became impossible to complete isolate `app.js` to only run core functions. Understanding how to better isolate function libraries will be something I will continue building upon in the future. 

The last thing was to make the project pretty with `chalk`, `figlet`, and `Spinner`. 

### Current menu options
1. View department, employee, role - single callback function located in `logic.js'
2. Add department, employee, role - located in `app.js`. Unable to break apart due to `startQ()` and `main()` functions and callback nesting 
3. Remove department, employee, role - located in '`app.js` for the same reasons as ADD
4. Update Role - located in `app.js` and unable to use the `logic.js` library.
5. Reset DATABASE - `ftReset.js` Database reset

> Added a reset database option because its cool! Wish it would 'console.log' slower with an animation. 

<a name="Project_Issues">

## Project Issues

Learning how to use mySQL and Inner joins was not too difficult. The difficult part was learning to use `new Promises`, `nested callbacks`, `.then statements` and anything that was connected to `async` functions. This was really hard and I had to turn to class mates to just gain a footing of how to approach my problem. Sleep has been an issue within itself but the leasons learnt was:
1. Functions should be simple
2. Functions should have a singular aim and sometimes using `.then` is not the right choice.
3. Sleep and take breaks
4. Identify when things are too hard and ask help

There were many other issues that I fixed with stuff like `clear()` and just tricks with inquirer but filtering data was not fun. I want to move more functions to their own separate libraries. If you view `logic.js`, there are a lot of search functions that didn't get used because of callback nesting requirements or needing app.js defined functions. Whilst my intent was to use the `logic.js` library, this did fail in the end.

Side note, I am super proud of myself for using 5 `For loops` to find out all the information within 3 mySQL calls for a single function. By just using someone's role I could figure out their salary, department and manager name with loops. This was without making a new statement within mySQL. Super proud.

<a name="future">

## Future plans

Currently there are outstanding issues.

1. Update Employee Role
2. Update Manager Role
3. Remove Employee, Role and Department issue with Foreign or Primary Keys.

I looked into the remove function and it was a bit beyond. I didn't have enough time by this point so I left it. Over the project is pretty good.
Project is 95% complete. 

<a name="Installation">

## Installation 
1. Copy project from GitHub page. Open terminal, 

```sh
$ cd homeworkW12
$ npm install
$ node app.js
```



2. Setup MySQL with seeds. Seeds are located in the `./mySQL` folder. Copy the text from the; 

- `cms.sql` Contains the database and table commands
- `cmsSeeds` Contains the seeds for the tables 

> * FUN STUFF
> Alternatively, open the Employee Tracker Api via `app.js`. Navigate to the option, `reset DATABASE` and select `YES`. 
> This will create and populate the database for you.

<a name="Usuage">

## Usuage 
Uses a CLI database to CREATE, READ, UPDATE and DELETE employee data.

<a name="Tests">


## Tests
No time to make notes :(
Inquirer validators have been installed to prevent mistakes


<a name="Additional_Information">

## Additional Information
Licenses: MIT

### Resources
* NPMJS.com
* W3 Schools
* Medium
* Developer.mozilla.org
* Stackoverflow.com
* Resources provided in Slack
* Youtube tutorials
* Dillinger.io

### Technology
* Node.JS
* Javascript
* Inquirer
* Visual Studio Code
* GitHub
* Google Chrome
* mySQL
* Chalk
* CLI
* SPINNER
* Clear



## Source
Code was originally supplied in the WAUS-CRAW-FSF-PT-02-2020-U-C-MW / Week 12 / Homework repository on GitLab https://waustralia.bootcampcontent.com/the-university-of-western-australia/WAUS-CRAW-FSF-PT-02-2020-U-C-MW/tree/master/Week%2012/Homework

### Joshua K Bader // Ryuku72 // jaybshinsen@hotmail.com
### Made with ReadMe.Md Generator 
