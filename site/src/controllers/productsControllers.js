const path = require('path')
const products = require('../data/products.json')

const controllers = {
    productDetail: (rep, res) => {res.render(path.join(__dirname,'..', 'views' , 'productDetail.ejs'))},

    productCart: (rep, res) => {res.render(path.join(__dirname,'..', 'views' , 'productCart.ejs'))},

    productos: (req, res) => {
        const {id} = req.params
        const product = products.find(element => element.id === +id)

        res.render('productDetail', {product})
    }
}

module.exports = controllers