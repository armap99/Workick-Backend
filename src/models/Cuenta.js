const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = require("../db");
const Propuesta = require("./Propuesta");
const Resena = require("./Resena");
const Trabajador = require("./Trabajador");

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
      type:DataTypes.STRING,
      allowNull: false,
    },
    Estatus: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    FechaAlta: {
      type:DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    tableName: "cuenta",
    timestamps: false, //para que no regrese created y udated at
  }
);

Cuenta.hasOne(Trabajador,{
  foreignKey: {
    name: 'IdCuenta',
    allowNull: true,
  }
})

Cuenta.hasMany(Resena,{
  foreignKey: {
    name:'IdContratista',
    allowNull: true,
  }
})

Cuenta.hasMany(Propuesta,{
  foreignKey: {
    name:'IdUsuario',
    allowNull: true,
  }
})

module.exports = Cuenta;
