DROP DATABASE IF EXISTS homework_db;

CREATE DATABASE homework_db;

CREATE TABLE department (
    id INT AUTO INCREMENT NOT NULL PRIMARY KEY, 
    name VARCHAR(30) NOT NULL,
);

CREATE TABLE role (
    id INT AUTO INCREMENT NOT NULL PRIMARY KEY, 
    job title VARCHAR(30) NOT NULL,
    salary INT NOT NULL,
    department_id INT NOT NULL,
    FOREIGN KEY (department)
    REFERENCES department(id)
);

CREATE TABLE employee (
    id INT AUTO INCREMENT NOT NULL PRIMARY KEY, 
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT NOT NULL,
    FOREIGN KEY (role_id)
    REFERENCES role(id)
);