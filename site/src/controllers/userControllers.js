const path = require('path')

const controllers = {
    register: (req, res) => {res.render(path.join(__dirname, '..', 'views' , 'register.ejs'))},

    login: (req, res) => {res.render(path.join(__dirname, '..', 'views' , 'login.ejs'))}
}

module.exports = controllers