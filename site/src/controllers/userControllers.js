const fs = require("fs")
const path = require("path")
const { validationResult } = require('express-validator')
const bcrypt = require("bcryptjs")

const ruta = path.join(__dirname, "..", "data", "user.json")
let usuariosRegistrados = fs.readFileSync(ruta, "utf-8")
let usuarios = JSON.parse(usuariosRegistrados)













module.exports = {
    register: (req, res) => { res.render('register') },

    login: (req, res) => { res.render('login') },


    agregarUser: (req, res) => {
        const agregar = req.body
        agregar.id = usuarios.length + 1
        agregar.image = req.file ? req.file.filename : 'nino.jpg'

        usuarios.push(agregar)

        fs.writeFileSync(usuarios, JSON.stringify(usuarios, null, 2))

        res.redirect("/login")
    },
    processLogin: (req, res) => {


        const usuarioALoguear = usuarios.find(e => e.email === req.body.email)

        if (usuarioALoguear && usuarioALoguear.password === req.body.password) {

            req.session.usuarioLogueado = usuarioALoguear 

            res.send("usuario logueado")
            
            /*  if (req.body.recordarme !== undefined) {
                 res.cookie("recordarme", usuarioALoguear.email, { maxAge: 20 * 1000 })
                }
             */
        
        

    } 
    else {
        res.render("login", {errors: {msg: 'Email o contraseña incorrecta' }})
    }


},
}


