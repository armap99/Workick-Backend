const jwt = require("jsonwebtoken");
const Cuenta = require("../models/Cuenta");

module.exports.getAllCounts = async function (req, res) {
  const count = await Cuenta.findAll();
  console.log(count);
  res.status(200).json({ count });
};

module.exports.getCoutById = async function (req, res) {
  const { id } = req.params;
  const count = await Cuenta.findOne({ where: { Id: id } });
  res.status(200).json({ count });
};

module.exports.addCount = async function (req, res) {
  const { name, email, address, city, password } = req.body; //req.param para get
  /* if (email) {
    res.send(email);
  } else {
    res.status(400).json({ message: "Y tu correo we?" });
  } */
  try {
    const cuenta = await Cuenta.create({
      Nombre: name,
      Correo: email,
      Contrasena: password,
      Direccion: address,
      Municipio: city,
      Estatus: 1,
      FechaAlta: new Date(),
    });
    res.status(201).json({ message: cuenta });
  } catch (err) {
    res.status(500).json({ message: "algo salio mal" });
  }
};

module.exports.logIn = async function (req, res) {
  const { email, password } = req.body;
  try {
    const cuenta = await Cuenta.findOne({
      where: { Correo: email, Contrasena: password },
    });
    if (cuenta !== undefined) {
      const token = jwt.sign(
        {
          data: {
            email,
            id: cuenta.id,
          },
        },
        "Workick",
        { expiresIn: "1h" }
      );
      res.status(200).json({ok: true,
        token: token,
        id: cuenta.Id,
        nombre: cuenta.Nombre,
        estatus: cuenta.Estatus,
      })
    } else {
      res.status(400).json({ message: "Datos invalidos" });
    }
  } catch (err) {
    res.status(500).json({ message: "Server internal error", error: err });
  }
};
