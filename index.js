// External packages
const mysql = require('mysql');
const inquirer = require('inquirer');

// Internal modules
// View only queries
const view = require('./routes/view.js');
// Adding new employees or roles
const add = require('./routes/add.js');
// Updating and deleting existing data
const update = require('./routes/update.js');

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "word1234",
    database: "tracker_DB"
});

connection.connect(function (err) {
    if (err) throw err;
    start();
});

