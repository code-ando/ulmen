let db = require("../database/models")
const { validationResult } = require('express-validator')
const bcrypt = require("bcryptjs")




module.exports = {
    register: (req, res) => {
        res.render('register')
    },
    login: (req, res) => {
        res.render('login')
    },
    agregarUser: (req, res) => {
        const errors = validationResult(req)
        let { Nombre, Apellido, email, password, DNI, nacimiento, Sexo, Rol } = req.body
        if (errors.isEmpty()) {
            db.Usuarios.create({
                nombre: Nombre.trim(),
                apellido: Apellido.trim(),
                email: email.trim(),
                contraseña: bcrypt.hashSync(password, 10),
                DNI: DNI.trim(),
                nacimiento: nacimiento.trim(),
                id_genero: Sexo.trim(),
                id_rol: Rol.trim()


            }).then(usuario => {
                req.session.usuarioLogin = {
                    id: usuario.id,
                    nombre: usuario.nombre


                }
                return res.redirect("/login")
            }).catch(error => console.log(error))


        } else {
            return res.render('register', {
                errors: errors.mapped(),
                old: req.body
            })
        }
    },
    processLogin: (req, res) => {
        let errors = validationResult(req)
        
        const { email } = req.body
        if (errors.isEmpty()) {
            db.Usuarios.findOne({
                where: {
                    email
                }
            }).then(usuario => {
                
                req.session.usuarioLogin = {
                    id: usuario.id,
                    nombre: usuario.nombre,

                }
                return res.redirect("/")

            }).catch(error => console.log(error))
        } else {
            
            return res.render("login", {
                errors:errors.mapped()
            })
        }

    },
    profile: (req, res) => {
        db.Usuarios.findByPk(req.session.usuarioLogin.id)
            .then(usuario => {
                return res.render("profile", {
                    usuario
                })
            }).catch(err => {
                res.render("errors")
            })
    },
    update: (req, res) => {
        const { Nombre, password } = req.body
        db.Usuarios.update(
            {
                nombre: Nombre.trim(),
                apellido: Apellido.trim(),
                id_genero: Sexo.trim(),

            },
            {
                where: {
                    id: req.session.usuarioLogin.id
                }
            }
        ).then(() => {
            if (password) {
                console.log("password=>", password)
                db.Usuarios.update(
                    {
                        password: bcrypt.hashSync(password.trim(), 10)
                    },
                    {
                        where: {
                            id: req.session.usuarioLogin.id
                        }
                    }

                ).then(() => {
                    req.session.destroy()
                    return res.redirect('/login')
                })
            } else {
                db.Usuarios.findByPk(req.session.usuarioLogin.id)
                    .then(usuario => {
                        req.session.usuarioLogin = {
                            id: usuario.id,
                            nombre: usuario.nombre,
                        }
                        res.locals.usuarioLogin = req.session.usuarioLogin

                        return res.redirect("/profile")
                    })
            }
        }).catch(error => console.log(error))
    },
    cerrarSesion: (req, res) => {
        req.session.destroy();
        return res.redirect('/');
    },


}