const path = require('path')

const controllers = {
    productDetail: (rep, res) => {res.render(path.join(__dirname,'..', 'views' , 'productDetail.ejs'))},

    productCart: (rep, res) => {res.render(path.join(__dirname,'..', 'views' , 'productCart.ejs'))}
}

module.exports = controllers