const path = require('path')

const controllers = {
    register: (rep, res) => {res.render(path.join(__dirname, '..', 'views' , 'register.ejs'))},

    login: (rep, res) => {res.render(path.join(__dirname, '..', 'views' , 'login.ejs'))}
}

module.exports = controllers