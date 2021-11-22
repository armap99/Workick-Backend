const Cuenta = require("../models/Cuenta")
const Trabajador = require("../models/Trabajador")

module.exports.getAllAccounts = async function(req, res) {
    const count = await Cuenta.findAll()
    //console.log(count)
    res.status(200).json({count}) 
}

module.exports.getAllWorkerAccounts = async function(req, res) {
    const accounts = await Cuenta.findAll({include    : [Trabajador]})
    //console.log(count)
    res.status(200).json({accounts}) 
}

module.exports.getAccountsById = async function(req, res) {
    const {id} = req.params
    const count = await Cuenta.findOne({where: {Id: id}})
    res.status(200).json({count})
}

module.exports.addAccounts = function(req, res) {
    const{email, password} = req.body;
    if(email){
        res.send(email)
    } else{
        res.status(400).json({message:"Y tu correo we?"})
    }
}