const {Sequelize, Model, DataType} = require("sequelize");

const sequelize = requere("../db");

const Mensaje = sequelize.define({
    "mensaje": {
        Id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        IdCotratista: {
            type: DataType.INTEGER,
            allowNull: false,
        },
        IdTrabajador: {
            type: DataType.INTEGER,
            allowNull: false,
        },
        Contenido: {
            type:DataType.STRING,
            allowNull: false,
        },
        HoraEnvio: {
            type:DataType.TIME,//duda
            allowNull: false,
        },
        Enviado: {
            type:DataType.INTEGER,
            allowNull: false,
        },
        IdPropuesta: {
            type:DataType.INTEGER,
            allowNull: false,
        }

    },
},{
    timestamps:false
});

module.exports = Mensaje