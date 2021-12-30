const Mensaje = require("../models/Mensaje");

module.exports.getClientMessage = async function (req, res) {
  try {
    const { id } = req.params;
    const menssages = await Mensaje.findAll({ where: { IdContratista: id } });
    res.status(200).json({ menssages });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server internal error", error: err });
  }
};

module.exports.getWorkerMessage = async function (req, res) {
  try {
    const { id } = req.params;
    const menssages = await Mensaje.findAll({ where: { IdTrabajador: id } });
    res.status(200).json({ menssages });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server internal error", error: err });
  }
};

module.exports.addNewMessage = async function (req, res) {
  try {
    const { idContratista, idTrabajador, contenido, enviado, idPropuesta } =
      req.body;
    if (contenido == "")
      return res.status(400).json({ message: "Falta de informacion" });
    let hoy = new Date();
    let horas =
      hoy.getHours() + ":" + hoy.getMinutes() + ":" + hoy.getSeconds();
    const message = await Mensaje.create({
      IdContratista: idContratista,
      IdTrabajador: idTrabajador,
      Contenido: contenido,
      HoraEnvio: horas,
      Enviado: enviado,
      IdPropuesta: idPropuesta,
    });
    res.status(201).json({ message });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server internal error", error: err });
  }
};
