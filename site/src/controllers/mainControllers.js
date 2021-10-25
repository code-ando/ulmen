const path = require('path')
const products = require('../data/products.json')

const controllers = {
    home: (req, res) => {res.render('index', {products})}
}

module.exports = controllers