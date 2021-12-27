const { Sequelize, Model, DataTypes } = require("sequelize");

const sequelize = require("../db");

const Trabajador = sequelize.define(
  "trabajador",
  {
    Id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    IdCuenta: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    DescripcionCorta: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    DescripcionLarga: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    CalificacionGlobal: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: false,
    },
    CalificacionPrecio: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Categoria: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Trabajos: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: false,
    },
    TituloTrabajo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Trabajador;
