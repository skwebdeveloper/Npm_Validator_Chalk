const express  = require("express");
const app = express();
const validator = require("validator");
const chalk = require('chalk');

const getNotes = require('./node.js');
const print = getNotes();
console.log(print);

// Testing validator

console.log(validator.isEmail("gamil.com"));

console.log(validator.isEmail("sa@gamil.com"));

console.log(validator.isURL("www.google.com"));

// Testing Chalk

console.log(chalk.underline.bold.red("Alert"));

console.log(chalk.green("Success"));


