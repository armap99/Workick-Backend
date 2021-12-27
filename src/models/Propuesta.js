const { Sequelize, Model, DataTypes } = requier("sequelize");

const sequelize = require("../db");

const Propuesta = sequelize.define(
  {
    propuesta: {
      Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      IdUsuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      IdTrabajador: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      UbicacionPropuesta: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      UbicacionPropuesta: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Municipio: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Descripcion: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      FechaAlta: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      Estatus: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      Categoria: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      FechaFin: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      AceptoT: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      AceptoC: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
  },
  {
    timestamps: false,
  }
);
