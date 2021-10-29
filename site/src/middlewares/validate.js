const {check} = require('express-validator')

module.exports = [
    check ('email').notEmpty().isEmail().withMessage("Ingresar nombre de usuario"),
    check('password').notEmpty().isLength({min: 8}).withMessage("La contraseña debe tener al minimo 8 caracteres")

]