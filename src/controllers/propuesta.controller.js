const Propuesta = require("../models/Propuesta");

module.exports.addProposal = async function (req, res) {
  try {
    const {
      idUsuario,
      idTrabajador,
      ubicacionPropuesta,
      municipio,
      descripcion,
      categoria,
    } = req.body;
    if (ubicacionPropuesta == "" || descripcion == "") {
      return res.status(400).json({ message: "Falta infromacion" });
    }
    const propos = await Propuesta.create({
      IdUsuario: idUsuario,
      IdTrabajador: idTrabajador,
      UbicacionPropuesta: ubicacionPropuesta,
      Municipio: municipio,
      Descripcion: descripcion,
      FechaAlta: new Date(),
      Estatus: 1,
      Categoria: categoria,
      AceptoT: 0,
      AceptoC: 0,
    });
    res.status(201).json({ data: propos });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server internal error" });
  }
};

module.exports.acceptClient = async function (req, res) {
  try {
    const { id } = req.params;
    const { AceptoT } = await Propuesta.findOne({ where: { Id: id } });
    if (AceptoT == 1) {
      const aux = await Propuesta.update(
        {
          Estatus: 2,
          AceptoC: 1,
        },
        { where: { Id: id } }
      );
      return res
        .status(200)
        .json({ message: "Propuesta actualizada p", data: aux });
    }
    const propos = await Propuesta.update(
      {
        AceptoC: 1,
      },
      { where: { Id: id } }
    );
    res.status(200).json({ message: "Propuesta actualizada", data: propos });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server internal error" });
  }
};

module.exports.acceptWorker = async function (req, res) {
  try {
    const { id } = req.params;
    const { AceptoC } = await Propuesta.findOne({ where: { Id: id } });
    if (AceptoC == 1) {
      const aux = await Propuesta.update(
        {
          Estatus: 2,
          AceptoT: 1,
        },
        { where: { Id: id } }
      );
      return res
        .status(200)
        .json({ message: "Propuesta actualizada p", data: aux });
    }
    const propos = await Propuesta.update(
      {
        AceptoT: 1,
      },
      { where: { Id: id } }
    );
    res.status(200).json({ message: "Propuesta actualizada", data: propos });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server internal error" });
  }
};

module.exports.updateProposal = async function (req, res) {
  try {
    const { id } = req.params;
    const { estatus } = req.body;
    if (estatus == 4) {
      const aux = await Propuesta.update(
        {
          Estatus: estatus,
          FechaFin: new Date(),
        },
        { where: { Id: id } }
      );
      return res
        .status(200)
        .json({ message: "Propuesta actualizada p", data: aux });
    }
    const propos = await Propuesta.update(
      {
        Estatus: estatus,
      },
      { where: { Id: id } }
    );
    res.status(200).json({ message: "Propuesta actualizada", data: propos });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server intenal error" });
  }
};

module.exports.getClientePropos = async function (req, res) {
  try {
    const { id } = req.params;
    const propos = await Propuesta.findAll({ where: { IdUsuario: id } });
    res.status(200).json({ data: propos });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server intenal error" });
  }
};

module.exports.getWorkerPropos = async function (req, res) {
    try {
      const { id } = req.params;
      const propos = await Propuesta.findAll({ where: { IdTrabajador: id } });
      res.status(200).json({ data: propos });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Server intenal error" });
    }
  };