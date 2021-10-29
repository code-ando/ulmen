const fs = require("fs")
const path = require("path")
const { validationResult } = require('express-validator')
const bcrypt = require("bcryptjs")

const ruta = path.join(__dirname, "..", "data", "user.json")
let usuariosRegistrados = fs.readFileSync(ruta, "utf-8")
usuariosRegistrados = JSON.parse(usuariosRegistrados)







module.exports = {
    register: (req, res) => { res.render('register') },

    login: (req, res) => { res.render('login') },

    processLogin: (req, res) => {
        const errors = validationResult(req)

        if (errors.isEmpty()) { 

        const usuarioALoguear = usuariosRegistrados.find(e => e.email === req.body.email)

        if (usuarioALoguear && bcrypt.compareSync(req.body.password, usuarioALoguear.pass)) {
            req.session.usuarioLogueado = usuarioALoguear
           /*  if (req.body.recordarme !== undefined) {
                res.cookie("recordarme", usuarioALoguear.email, { maxAge: 20 * 1000 })

            }
            */
            res.redirect("/") 

        }
    /* } */
        else {
            //hacer validaciones - enviar errores//
            res.render("/login", {msg: 'Email o contraseña incorrecta'})
        }
    }

}
}
