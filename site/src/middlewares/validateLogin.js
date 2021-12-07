const {body} = require("express-validator")
const bcrypt = require("bcryptjs")
const db = require ("../database/models")

module.exports = [
    body("email")
    .custom((value,{req}) => {
        console.log(req.body)
        return db.Usuario.findOne({
            where:{
                email:value
            }
        }) .then (usuario => {
            if(!usuario || !bcrypt.compareSync(req.body.password, usuario.password)){
                return Promise.reject("credenciales invalidas")
            }
        })
    }) 

]