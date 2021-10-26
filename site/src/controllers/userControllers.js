
const {validationResult} = require('express-validator')
const usuarios = require("../data/user.json")


module.exports = {
    register: (req, res) => {res.render('register')},

    login: (req, res) => {res.render('login')},

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

