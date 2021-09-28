const { Sequelize } = require('sequelize');
const connection = new Sequelize('challenge', 'root', '12182430misael', {
    host: 'localhost',
    dialect: 'mysql',
});
module.exports = connection;
