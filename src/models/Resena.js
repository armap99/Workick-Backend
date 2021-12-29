const { Sequelize, Model, DataTypes } = require("sequelize");

const sequelize = require("../db");

const Resena = sequelize.define(
  "resena",
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
    Resena: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Estrellas: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Precio: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "resena",
    timestamps: false,
  }
);

module.exports = Resena;
