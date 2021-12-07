const {check,body} = require('express-validator')
const db = require("../database/models")

module.exports = [
    check('Nombre').notEmpty().withMessage("Se requiere el campo Nombre"),

    check('Apellido').notEmpty().withMessage("Se requiere el campo Apellido"),

    check('DNI').notEmpty().withMessage("Se requiere el campo DNI").bail()
    .isLength({min: 8, max: 100}).withMessage('El campo Dni debe tener al menos 8 caracteres'),

    check('nacimiento').notEmpty().withMessage("Se requiere el campo Fecha de nacimiento"),

    check('Sexo').notEmpty().withMessage("Se requiere que seleccione el Sexo"),

    check("Rol").notEmpty().withMessage("Se requiere que seleccione el rol"),

    check('email').notEmpty().withMessage("Se requiere el Email").isEmail(),

    body("email")
    .custom (value => {
        console.log(value)
        return db.Usuarios.findOne({
            where:{
                email:value
            }
        }) .then(usuario => {
            if(usuario){
                return Promise.reject("Email ya registrado")
            }
        })
    }),

    check('password').notEmpty().isLength({min: 8}).withMessage("La contraseña debe tener al menos 8 caracteres")
]
