const Trabajador = require("../models/Trabajador");
const Cuenta = require("../models/Cuenta");
const Resena = require("../models/Resena");

module.exports.getAllWorkers = async function (req, res) {
  try {
    const worker = await Cuenta.findAll({
      where: { Estatus: 2 },
      include: [{ model: Trabajador }],
    });
    res.status(200).json({ data: worker });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server internal error", error: err });
  }
};

module.exports.getWorkerInfoByUserId = async function (req, res) {
  try {
    const { id } = req.params;
    const worker = await Cuenta.findOne({
      include: [
        {
          model: Trabajador,
          where: { Id: id },
          include: [{ 
            model: Resena 
          }],
        },
      ],
    });
    res.status(200).json({ data: worker });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server internal error", error: err });
  }
};

module.exports.addWorkerInformation = async function (req, res) {
  try {
    const {
      idCuenta,
      descripcionCorta,
      descripcionLarga,
      categoria,
      tituloTrabajo,
    } = req.body;
    if (
      descripcionCorta == "" ||
      descripcionLarga == "" ||
      tituloTrabajo == ""
    ) {
      return res.status(400).json({ message: "Falta de informacion" });
    }
    const worker = await Trabajador.create({
      IdCuenta: idCuenta,
      DescripcionCorta: descripcionCorta,
      DescripcionLarga: descripcionLarga,
      CalificacionGlobal: 0,
      CalificacionPrecio: 0,
      Categoria: categoria,
      Trabajos: 0,
      TituloTrabajo: tituloTrabajo,
    });
    res.status(201).json({ data: worker });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server internal error", error: err });
  }
};

module.exports.updateWorkerInfomation = async function (req, res) {
  try {
    const { id } = req.params;
    const { descripcionCorta, descripcionLarga, categoria, tituloTrabajo } =
      req.body;
    if (
      descripcionCorta == "" ||
      descripcionLarga == "" ||
      tituloTrabajo == ""
    ) {
      return res.status(400).json({ message: "Falta de informacion" });
    }
    const worker = await Trabajador.update(
      {
        DescripcionCorta: descripcionCorta,
        DescripcionLarga: descripcionLarga,
        Categoria: categoria,
        TituloTrabajo: tituloTrabajo,
      },
      { where: { Id: id } }
    );
    res.status(200).json({ message: "Trabajador actualizado", data: worker });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server internal error", error: err });
  }
};

module.exports.updateWorkerWorks = async function (req, res) {
  try {
    const { id } = req.params;
    let { Trabajos } = await Trabajador.findOne({ where: { Id: id } });
    Trabajos++;
    const worker = await Trabajador.update(
      {
        Trabajos: Trabajos,
      },
      { where: { Id: id } }
    );
    res.status(200).json({ message: "Trabajador actualizado", data: worker });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server internal error", error: err });
  }
};
