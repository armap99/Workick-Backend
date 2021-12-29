const { Sequelize, Model, DataTypes } = require("sequelize");

const sequelize = require("../db");
const Propuesta = require("./Propuesta");
const Resena = require("./Resena");

const Trabajador = sequelize.define(
  "trabajador", // el alias de la tabla
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
    tableName: "trabajador",
    timestamps: false,
  }
);

Trabajador.hasMany(Resena,{
  foreignKey: {
    name:'IdTrabajador',
    allowNull: true,
  }
})

Trabajador.hasMany(Propuesta,{
  foreignKey: {
    name:'IdTrabajador',
    allowNull: true,
  }
})

module.exports = Trabajador;
