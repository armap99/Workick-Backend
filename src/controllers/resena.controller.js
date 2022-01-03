const Resena = require("../models/Resena");
const Cuenta = require("../models/Cuenta");

module.exports.getResenasByTrabajadorId = async function (req, res) {
  try {
    const { id } = req.params;
    const reviewD = await Cuenta.findAll({
      attributes: [
        "Nombre",
        "resenas.IdContratista",
        "resenas.IdTrabajador",
        "resenas.Resena",
        "resenas.Estrellas",
        "resenas.Precio",
      ],
      include: [
        {
          model: Resena,
          where: { IdTrabajador: id },
        },
      ],
    });
    res.status(200).json({ data: reviewD });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error" });
  }
};
