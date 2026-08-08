// const cities = require('./data/data.js');
// console.log(cities);

// const fs = require('fs');
// fs.writeFileSync('cities.txt', "Hello World");

// const path = require('path');
// const filename = path.join(__dirname,"data", 'cities.txt');
// console.log(filename);

// const os = require('os');
// const userInfo = os.userInfo();
// const freeMemory = os.freemem();
// const totalMemory = os.totalmem();
// const uptime = os.uptime();
// console.log("User Info:", userInfo);
// console.log("Free Memory:", freeMemory);
// console.log("Total Memory:", totalMemory);
// console.log("Uptime:", uptime);


// const chalk = require('chalk');
// console.log(chalk.blue('Hello world!'));
// console.log(chalk.red('Hello world!'));
// console.log(chalk.green('Hello world!'));
// console.log(chalk.yellow('Hello world!'));


require("dotenv").config();
const process = require("process");
// const name = process.argv[2];
// console.log(name);
console.log(process.env.PORT);