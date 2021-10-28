const path = require('path')
const products = require('../data/products.json')

const controllers = {
    productDetail: (req, res) => {res.render(path.join('productDetail'))},

    productCart: (req, res) => {res.render(path.join('productCart'))},

    productos: (req, res) => {
        const {id} = req.params
        const product = products.find(element => element.id === +id)

        res.render('productDetail', {product})
    }
}

module.exports = controllers