const { Sequelize, Model, DataTypes } = require("sequelize");

const sequelize = require("../db");

const Mensaje = sequelize.define(
  "mensaje",
  {
    Id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    IdContratista: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    IdTrabajador: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Contenido: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    HoraEnvio: {
      type: DataTypes.TIME, //duda
      allowNull: false,
    },
    Enviado: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    IdPropuesta: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "mensaje",
    timestamps: false,
  }
);

module.exports = Mensaje;
