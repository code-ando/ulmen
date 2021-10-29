const {check} = require('express-validator')

module.exports = [
    check('Nombre').notEmpty().withMessage("Se requiere el campo Nombre"),

    check('Apellido').notEmpty().withMessage("Se requiere el campo Apellido"),

    check('DNI').notEmpty().withMessage("Se requiere el campo DNI").bail()
    .isLength({min: 8}).withMessage('El campo Dni debe tener al menos 8 caracteres'),

    check('Fecha-de-nacimiento').notEmpty().withMessage("Se requiere el campo Fecha de nacimiento"),

    check('Sexo').notEmpty().withMessage("Se requiere que seleccione el Sexo"),

    check('Email').notEmpty().withMessage("Se requiere el Email").isEmail(),

    check('Contraseña').notEmpty().isLength({min: 8}).withMessage("La contraseña debe tener al menos 8 caracteres")

]