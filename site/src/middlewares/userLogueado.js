module.exports = (req, res, next) => {
    res.locals.logueado = false;

    if(req.session.usuarioLogueado) {
        res.locals.logueado = true;
        res.locals.usuarioLogueado = req.session.usuarioLogueado;
    }
    
    next()
}