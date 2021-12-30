const cors = require("cors");

const express = require("express");
const app = express();

app.set("port", process.env.PORT || 5000); // process.env.PORT te obtiene el puerto del hosting

app.use(express.json()); // para que acepte json
app.use(express.urlencoded({ extended: true })); // para que acepte formularios
app.use(cors()); // para poder aceptar peticiones de otros puertos

app.use("/cuenta", require("./routes/cuenta.routes"));
app.use("/categoria", require("./routes/categoria.routes"));
app.use("/trabajador", require("./routes/trabajador.routes"));
app.use("/mensajes", require("./routes/mensaje.routes"));
app.use("/resena", require("./routes/resena.routes"));

module.exports = app; //exportar aplicacion
