const CLI = require('clui');
const Spinner = CLI.Spinner;
const figlet = require("figlet");
const clear = require("clear");
const chalk = require("chalk");

// VISUALS

const header = {

startScreen: async function () {
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

  },

}

module.exports = header