const { DataTypes } = require('sequelize');
const sequelize = require('../dbConfig/dbConfig');

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true
          }
    },
    password: {
        type: DataTypes.STRING(64),
        allowNull: false,
        validate: {
            len: [6, 15]
          }
    }

}, {
    freezeTableName: true
});

module.exports = User;