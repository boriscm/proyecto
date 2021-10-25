const { Model, DataTypes } = require('sequelize');
const sequelize = require('../lib/sequelize');

const Musica = sequelize.define('Cantante',
{
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    genero:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    duracion:{
        type: DataTypes.NUMBER,
        allowNull: false,
    },
    letra: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    idCantante:{
        type: DataTypes.NUMBER,
        allowNull: false,
    },
    idCantanteSecundario:{
        type: DataTypes.NUMBER,
        allowNull: false,
    }

});

Musica.sync();

module.exports = Musica;