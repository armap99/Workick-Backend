const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = require("../db");

const Cuenta = sequelize.define(
  "cuenta",
  {
    Id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    Nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Correo: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    Contrasena: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Direccion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Municipio: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Estatus: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    FechaAlta: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    timestamps: false, //para que no regrese created y udated at
  }
);

module.exports = Cuenta;
