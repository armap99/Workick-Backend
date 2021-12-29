const Trabajador = require("../models/Trabajador");
const Cuenta = require("../models/Cuenta")

module.exports.getAllWorkers = async function (req,res){
    try{
        const worker = await Trabajador.findAll()
        res.status(200).json(worker);
    }catch(err){
        console.log(err)
        res.status(500).json({ message: "Server internal error", error: err });
    }
}

module.exports.getWorkerInfoByUserId = async function (req, res) {
  try {
    const { id } = req.params;
    const worker = await Cuenta.findOne({ where: { Id: id }, include: [{
        model: Trabajador,
    }] });
    res.status(200).json(worker);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server internal error", error: err });
  }
};
