const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("workick", "root", "", {
  host: "localhost",
  dialect: "mysql" /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */,
});

/* (async() => { //para probar la conexion 
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})(); */

console.log("Conexion a db exitosa")

module.exports = sequelize