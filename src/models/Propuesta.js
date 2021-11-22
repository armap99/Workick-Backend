const { Sequelize, Model, DataType } = requier("sequelize");

const sequelize = require("../db");

const Propuesta = sequelize.define(
  {
    "propuesta": {
      Id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      IdUsuario: {
        type: DataType.INTEGER,
        allowNull: false,
      },
      IdTrabajador: {
        type: DataType.INTEGER,
        allowNull: false,
      },
      UbicacionPropuesta: {
        type: DataType.STRING,
        allowNull: false,
      },
      UbicacionPropuesta: {
        type: DataType.STRING,
        allowNull: false,
      },
      Municipio: {
        type: DataType.STRING,
        allowNull: false,
      },
      Descripcion: {
        type: DataType.STRING,
        allowNull: false,
      },
      FechaAlta: {
        type: DataType.DATE,
        allowNull: false,
      },
      Estatus: {
        type: DataType.INTEGER,
        allowNull: false,
      },
      Categoria: {
        type: DataType.INTEGER,
        allowNull: false,
      },
      FechaFin: {
        type: DataType.DATE,
        allowNull: true,
      },
      AceptoT: {
        type: DataType.INTEGER,
        allowNull: false,
      },
      AceptoC: {
        type: DataType.INTEGER,
        allowNull: false,
      },
    },
  },
  {
    timestamps: false,
  }
);
