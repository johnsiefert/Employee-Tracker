const inquirer = require('inquirer');

function viewAllEmployees(connection, cb) {
    let query = "SELECT employee.id, employee.first_name, employee.last_name, role.title, role.salary, department.name AS department, e2.first_name AS manager FROM employee LEFT JOIN employee as e2 ON e2.id = employee.manager_id JOIN role ON employee.role_id = role.id JOIN department ON role.department_id = department.id ORDER BY employee.id;";
    connection.query(query, function (err, res) {
        if (err) throw err;
        console.table(res);
        cb();
    });
};


function viewRoles (connection, cb) {
    let query = "SELECT * FROM role";
    connection.query(query, function (err, res) {
        if (err) throw err;
        console.table(res);
        cb();
    })
};

function viewDepartments (connection, cb) {
    let query = "SELECT * FROM department";
    connection.query(query, function (err, res) {
        if (err) throw err;
        console.table(res);
        cb();
    })
};

module.exports = {
    viewAllEmployees: viewAllEmployees,
    viewEmployeeDept: viewEmployeeDept,
    viewEmployeeMgr: viewEmployeeMgr,
    viewRoles: viewRoles,
    viewDepartments: viewDepartments
};