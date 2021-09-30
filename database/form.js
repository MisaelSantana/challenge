const sequelise = require('sequelize');
const connection = require('./database');

const allData = connection.define('data', {
    PT_PARTIDA: {
        type: sequelise.STRING,
        allowNull: false,
    },
    PT_CHEGADA: {
        type: sequelise.STRING,
        allowNull: false,
    },
});

allData.sync({force: false}).then(() => {});
module.exports = allData;
