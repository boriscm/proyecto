const { Model, DataTypes } = require('sequelize');
const sequelize = require('../lib/sequelize');

const Usuario = sequelize.define('Cantante',
{
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    correo:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    edad:{
        type: DataTypes.NUMBER,
        allowNull: false,
    },
    contrasena:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    esCritico:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
    }
    


});

Usuario.sync();

module.exports = Usuario;