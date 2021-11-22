const Cuenta = require("../models/Cuenta")

module.exports.getAllCounts = async function(req, res) {
    const count = await Cuenta.findAll()
    console.log(count)
    res.status(200).json({count})
}

module.exports.getCoutById = async function(req, res) {
    const {id} = req.params
    const count = await Cuenta.findOne({where: {Id: id}})
    res.status(200).json({count})
}

module.exports.addCount = function(req, res) {
    const{email, password} = req.body;
    if(email){
        res.send(email)
    } else{
        res.status(400).json({message:"Y tu correo we?"})
    }
}