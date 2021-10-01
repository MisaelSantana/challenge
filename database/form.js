const sequelise = require('sequelize');
const connection = require('./database');

const allLocation = connection.define('location', {
    pt_partida: {
        type: sequelise.TEXT,
        allowNull: false,
    },
    pt_chegada: {
        type: sequelise.TEXT,
        allowNull: false,
    },
});

allLocation.sync({force: false}).then(() => {});
module.exports = allLocation;
