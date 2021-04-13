const { Sequelize } = require('sequelize');
const sequelize = require('../db/sql');

const User = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    Name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    phone: {
        type: Sequelize.STRING,
        allowNull: false
    },
    address: {
        type: Sequelize.STRING,
        allowNull: false
    },
    unique_code: {
        type: Sequelize.STRING,
        allowNull: false
    },
    image: {
        type: Sequelize.BLOB("long")
    }
})

module.exports = User