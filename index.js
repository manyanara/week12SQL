const inq = require('inquirer');
// const connection = require('./server.js');
const mysql = require('mysql2/promise')

async function main() {
    try {
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'SoberP!nk1',
            database: 'homework_db'
        });
        console.log('Connected to the homework_db database.');

        const choices = [
            "view all departments",
            "view all roles",
            "view all employees",
            "add a department",
            "add a role",
            "add an employee",
            "update an employee role"
        ];

        inq.prompt([
            {
                type: 'list',
                message: "What would you like to do?",
                name: "action",
                choices: choices
            },
        ]).then((answers) => {
            console.log(answers);

            if (answers.action === choices[0]) {
                connection.query('SELECT * from department')
                    .then(results => {
                        console.log(results);
                    })
                    .catch(error => {
                        console.error(error);
                    });
            } else if (answers.action === choices[1]) {
                connection.query('SELECT * from role')
                    .then(results => {
                        console.log(results);
                    })
                    .catch(error => {
                        console.error(error);
                    });
            } else if (answers.action === choices[2]) {
                connection.query('SELECT * from employee')
                    .then(results => {
                        console.log(results);
                    })
                    .catch(error => {
                        console.error(error);
                    });
            }  else if (answers.action === choices[3]) {
                generateDepartment(connection)
                    .then(results => {
                        console.log(results);
                    })
                    .catch(error => {
                        console.error(error);
                    });
            } else if (answers.action === choices[4]) {
                generateRole(connection)
                    .then(results => {
                        console.log(results);
                    })
                    .catch(error => {
                        console.error(error);
                    });
            } else if (answers.action === choices[5]) {
                generateEmployee(connection)
                    .then(results => {
                        console.log(results);
                    })
                    .catch(error => {
                        console.error(error);
                    });
            } else if (answers.action === choices[6]) {
                generateUpdate(connection)
                    .then(results => {
                        console.log(results);
                    })
                    .catch(error => {
                        console.error(error);
                    });
            }

        }).catch((err) => console.info(err));

        // Close the connection when done with all operations
    } catch (error) {
        console.error('Error connecting to the database:', error);
    }
}

async function generateDepartment(connection) {
    return inq.prompt([
         {
             type: 'input', 
             message: "Please type the department name",
             name: "deptName",
         },
     ])
     .then((answers) => {
         return connection.query("INSERT INTO department SET ?", {
             name: answers.deptName
         },
         (err, result) => {
             if (err) {
                 console.log(err);
             }
             console.log(result);
         });
     });
 };

async function generateRole(connection) {
    return inq.prompt([
        {
            type: 'input', 
            message: "Please type the job title",
            name: "jobTitle",
        },
        {
            type: 'input', 
            message: "Please type the salary",
            name: "salary",
        },
        {
            type: 'input', 
            message: "Please type the department id",
            name: "deptId",
        },
    ])
    .then((answers) => {
        return   connection.query("INSERT INTO role SET ?", {
            job_title: answers.jobTitle,
            salary: answers.salary,
            department_id: answers.deptId
        },
        (err, result) => {
            if (err) {
                console.log(err);
            }
            console.log(result);
        });
    });
};


async function generateEmployee(connection) {
    return inq.prompt([
        {
            type: 'input', 
            message: "Please type the employees first name",
            name: "firstName",
        },
        {
            type: 'input', 
            message: "Please type the employees last name",
            name: "lastName",
        },
        {
            type: 'input', 
            message: "Please type the employees role ID",
            name: "roleId",
        },
        {
            type: 'input',
            message:'Please type the employee managers ID',
            name: 'managerId'
        },
    ])
    .then((answers) => {
        return   connection.query("INSERT INTO employee SET ?", {
            first_name: answers.firstName,
            last_name: answers.lastName,
            role_id: answers.roleId,
            manager_id: answers.managerId,
        },
        (err, result) => {
            if (err) {
                console.log(err);
            }
            console.log(result);
        });
    });
};

async function generateUpdate(connection) {
    try {
        const answers = await inq.prompt([
            {
                type: 'input',
                message: "Please enter employee ID",
                name: "employeeID",
            },
            {
                type: 'input',
                message: "Please enter new role ID",
                name: "roleID",
            },
            {
                type: 'input',
                message: "Please enter manager ID",
                name: "managerID",
            },
        ]);

        const result = await connection.query(
            `UPDATE employee SET role_id = ?, manager_id = ? WHERE id = ?`,
            [answers.roleID, answers.managerID, answers.employeeID]
        );

        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

main();

