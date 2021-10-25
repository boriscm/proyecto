const { Model, DataTypes } = require('sequelize');
const sequelize = require('../lib/sequelize');

const Cantante = sequelize.define('Cantante',
{
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    edad:{
        type: DataTypes.NUMBER,
        allowNull: false,
    },
    ciudadNacimiento:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    biografia:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    


});

Cantante.sync();

module.exports = Cantante;