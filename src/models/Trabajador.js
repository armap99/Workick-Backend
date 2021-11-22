const { Sequelize, Model, DataType } = require("sequelize");

const sequelize = require("../db");

const Trabajador = sequelize.define(
  "trabajador",
  {
    Id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    IdCuenta: {
      type: DataType.INTEGER,
      allowNull: false,
    },
    DescripcionCorta: {
      type: DataType.STRING,
      allowNull: false,
    },
    DescripcionLarga: {
      type: DataType.STRING,
      allowNull: false,
    },
    CalificacionGlobal: {
      type: DataType.INTEGER,
      defaultValue: 0,
      allowNull: false,
    },
    CalificacionPrecio: {
      type: DataType.INTEGER,
      allowNull: false,
    },
    Categoria: {
      type: DataType.INTEGER,
      allowNull: false,
    },
    Trabajos: {
      type: DataType.INTEGER,
      defaultValue: 0,
      allowNull: false,
    },
    TituloTrabajo: {
      type: DataType.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Trabajador;
