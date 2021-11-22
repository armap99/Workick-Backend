const { Sequelize, Model, DataType } = require("sequelize");

const sequelize = require("../db");

const Categoria = sequelize.define(
  "categoria",
  {
    Id: {
      primaryKey: true,
      type: DataType.INTEGER,
      autoIncrement: true,
    },
    Descripcion: {
      type: DataType.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Categoria
