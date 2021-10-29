const usuariosRegistrados = require("../data/user.json")

module.exports = (req,res,next) => {
    if (req.cookies.recordarme !== undefined && req.session.usuarioLogueado === undefined){
        req.session.usuarioLogueado = usuariosRegistrados.find( e=>e.email === req.cookies.recordarme)
    }
    next()
}