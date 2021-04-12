const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('sugar', 'root', 'root', { dialect: 'mysql', host: 'localhost' });

module.exports = sequelize


// const mysql = require('mysql2');

// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     database: 'sugar',
//     password: 'root',
//     waitForConnections: true,
//     connectionLimit: 10,
//     queueLimit: 0
// });

// module.exports = pool.promise();