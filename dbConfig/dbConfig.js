const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('db_crud', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;