const jwt = require("jsonwebtoken");
const Cuenta = require("../models/Cuenta");

module.exports.getAllCounts = async function (req, res) {
  try {
    const count = await Cuenta.findAll();
    console.log(count);
    res.status(200).json({ count });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server internal error", error: err });
  }
};

module.exports.getCoutById = async function (req, res) {
  try {
    const { id } = req.params;
    const count = await Cuenta.findOne({ where: { Id: id } });
    res.status(200).json({ count });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server internal error", error: err });
  }
};

module.exports.addCount = async function (req, res) {
  /* if (email) {
    res.send(email);
  } else {
    res.status(400).json({ message: "Y tu correo we?" });
  } */
  try {
    const { name, email, address, city, password } = req.body; //req.param para get
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
    console.log(err);
    res.status(400).json({ menssage: "El correo ya esta registrado" });
  }
};

module.exports.updateAccount = async function (req, res) {
  try {
    const { id } = req.params;
    const { nombre, email, direccion, municipio } = req.body;
    const cuenta = await Cuenta.update(
      {
        Nombre: nombre,
        Correo: email,
        Direccion: direccion,
        Municipio: municipio,
      },
      { where: { Id: id } }
    );
    res
      .status(200)
      .json({ menssage: "Se ha actualizado correctamente", Cuenta: cuenta });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server internal error", error: err });
  }
};

module.exports.updateAccountToWorker = async function (req, res) {
  try {
    const { id } = req.params;
    const cuenta = await Cuenta.update(
      {
        Estatus: 2,
      },
      { where: { Id: id } }
    );
    res.status(200).json({ message: "Ahora eres trabajador", Cuenta: cuenta });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server internal error", error: err });
  }
};

module.exports.logIn = async function (req, res) {
  try {
    const { email, password } = req.body;
    const cuenta = await Cuenta.findOne({
      where: { Correo: email, Contrasena: password },
    });
    if (cuenta) {
      const token = jwt.sign(
        {
          data: {
            email,
            id: cuenta.Id,
          },
        },
        "Workick",
        { expiresIn: "1h" }
      );
      res.status(200).json({
        ok: true,
        token: token,
        id: cuenta.Id,
        nombre: cuenta.Nombre,
        estatus: cuenta.Estatus,
      });
    } else {
      res.status(400).json({ message: "Datos invalidos" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server internal error", error: err });
  }
};
