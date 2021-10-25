const { Model, DataTypes } = require('sequelize');
const sequelize = require('../lib/sequelize');

const Resena = sequelize.define('Cantante',
{
    idUsuario: {
        type: DataTypes.NUMBER,
        allowNull: false,
    },
    comentario:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    puntuacion:{
        type: DataTypes.NUMBER,
        allowNull: false,
    },
    idCancion:{
        type: DataTypes.NUMBER,
        allowNull: true,
    },
    idCantante:{
        type: DataTypes.NUMBER,
        allowNull: true,
    }
    


});

Resena.sync();

module.exports = Resena;