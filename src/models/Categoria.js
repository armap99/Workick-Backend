const { Sequelize, Model, DataTypes } = require("sequelize");

const sequelize = require("../db");

const Categoria = sequelize.define(
  "categoria",
  {
    Id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    Descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Categoria;
