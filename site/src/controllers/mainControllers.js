const path = require('path')

const controllers = {
    home: (rep, res) => {res.render(path.join(__dirname, '..', 'views' , 'index.ejs'))}
}


module.exports = controllers