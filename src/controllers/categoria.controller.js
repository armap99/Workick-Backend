const jwt = require("jsonwebtoken");
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
    res.status(200).json({categorie})
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server internal error", error: err });
  }
};
