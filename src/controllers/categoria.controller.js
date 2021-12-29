const Categoria = require("../models/Categoria");

module.exports.getAllCotegories = async function (req, res) {
  try {
    const categorie = await Categoria.findAll();
    res.status(200).json({ categorie });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server internal error", error: err });
  }
};

module.exports.getCategorieById = async function (req, res) {
  try {
    const { id } = req.params;
    const categorie = await Categoria.findOne({ where: { Id: id } });
    res.status(200).json({ categorie });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server internal error", error: err });
  }
};

module.exports.addCategorie = async function (req, res) {
  try {
    const { descripcion } = req.body;
    const categorie = await Categoria.create({
      Descripcion: descripcion,
    });
    res.status(201).json({ message: categorie });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server internal error", error: err });
  }
};

module.exports.updateCategorie = async function (req, res) {
  try {
    const { id } = req.params;
    const { descripcion } = req.body;
    const categorie = await Categoria.update(
      { Descripcion: descripcion },
      { where: { Id: id } }
    );
    res.status(200).json({ message: "Categoria actualizada", categorie });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server internal error", error: err });
  }
};

module.exports.deleteCategorie = async function (req, res) {
  try {
    const { id } = req.params;
    const categorie = await Categoria.destroy({ where: { Id: id } });
    res.status(200).json({message:"Categoria eliminada", categorie})
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server internal error" });
  }
};
