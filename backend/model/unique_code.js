const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../db/sql');

const unique_code = sequelize.define('unique_code', {
    voucher: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
    },
    used: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
})

module.exports = unique_code