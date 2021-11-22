const {Sequelize, Model,DataType} = requier("sequelize");

const sequelize = require("../db");

const Resena = sequelize.define(
    "resena", 
    {
        Id: {
            type:DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        IdContratista: {
            type:DataType.INTEGER,
            allowNull: false,
        },
        IdTrabajador: {
            type:DataType.INTEGER,
            allowNull: false,
        },
        Resena: {
            type: DataType.STRING,
            allowNull: false,
        },
        Estrellas: {
            type: DataType.INTEGER,
            allowNull: false,
        },
        Precio: {
            type: DataType.INTEGER,
            allowNull: false,
        },
    },
    {
        timestamps: false
    }
);