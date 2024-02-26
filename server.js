const express = require('express');
const mysql = require('mysql2/promise')
const inq = require('inquirer');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'SoberP!nk1',
    database: 'homework_db'
}).then((connection) => {
    console.log('Connected to the homework_db database.')});

module.exports = {connection};
