const fs = require("fs")
const path = require("path")
const { validationResult } = require('express-validator')
const bcrypt = require("bcryptjs")

/* const ruta = path.join(__dirname, "..", "data", "user.json")
let usuariosRegistrados = fs.readFileSync(ruta, "utf-8")
usuarios = JSON.parse(usuariosRegistrados) */

const usuariosFilePath = path.join(__dirname,'../data/user.json');
let usuarios = JSON.parse(fs.readFileSync(usuariosFilePath, "utf-8"));



module.exports = {
    register: (req, res) => { res.render('register') },

    login: (req, res) => { res.render('login') },


    /* agregarUser: (req, res) => {
        const errors = validationResult(req)

        if (errors.isEmpty()) {
            const agregar = req.body
        agregar.id = usuarios.length + 1
        agregar.image = req.file ? req.file.filename : 'nino.jpg'

        usuarios.push(agregar)

        fs.writeFileSync(usuariosRegistrados, JSON.stringify(usuarios, null, 2))

        res.redirect("/login")
        } else {
            res.render('register', {errors: errors.mapped(), old: req.body})
        }
    }, */

    agregarUser: (req, res) => {
        const errors = validationResult(req)
        console.log("llego hasta aca");

        if (errors.isEmpty()) {
            const agregar = req.body
        agregar.id = usuarios.length + 1
        agregar.image = req.file ? req.file.filename : 'nino.jpg'
        agregar.Contraseña = bcrypt.hashSync(req.body.Contraseña, 10)

        usuarios.push(agregar)

        fs.writeFileSync(usuariosFilePath, JSON.stringify(usuarios, null, 2))

        res.redirect("/login")
        } else {
            res.render('register', {errors: errors.mapped(), old: req.body})
        }
    },
    processLogin: (req, res) => {


        const usuarioALoguear = usuarios.find(e => e.Email === req.body.Email)

        if (usuarioALoguear && bcrypt.compare(req.body.Contraseña, usuarioALoguear.Contraseña)) {

            req.session.usuarioLogueado = usuarioALoguear 

            res.redirect("/")
            
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


