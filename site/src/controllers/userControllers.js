const {validationResult} = require('express-validator')
const fs = require('fs')
const path = require('path')
const usuariosFilePath = path.join(__dirname,'../data/user.json');
let usuarios = JSON.parse(fs.readFileSync(usuariosFilePath, "utf-8"));
/* const usuarios = require("../data/user.json") */


module.exports = {
    register: (req, res) => {res.render('register')},

    login: (req, res) => {res.render('login')},

    agregarUser: (req, res) => {
        const errors = validationResult(req)

        if (errors.isEmpty()) {
            const agregar = req.body
        agregar.id = usuarios.length + 1
        agregar.image = req.file ? req.file.filename : 'nino.jpg'

        usuarios.push(agregar)

        fs.writeFileSync(usuariosFilePath, JSON.stringify(usuarios, null, 2))
        
        res.redirect("/login")
        } else {
            res.render('register', {errors: errors.mapped(), old: req.body})
        }
    },
    
    proccessLogin: (req, res) => {
        const usuarioAloguear = usuarios.find(e => e.email === req.body.email)
        if (req.body.password === usuarioAloguear.password){
            res.redirect("/")
        }
        else {

            //hacer validaciones - enviar errores//
            res.render("login")



        }
      }
}

