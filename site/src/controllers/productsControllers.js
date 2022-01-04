const path = require('path')
const products = require('../data/products.json')


const db = require('../database/models');

const controllers = {
    productFilter: (req, res) => {

        db.Genero.findByPk(req.query.genero, {
            include: [
                {
                    association: 'productos',
                    include: [{ all: true }]
                }
            ]
        })

            .then((genero) => {
                return res.render('productFilter', {
                    nombre : genero.nombre,
                    productos: genero.productos
                })
            })
            .catch((error) => console.log(error))
    },
    productDetail: (req, res) => { res.render(path.join('productDetail')) },

    productCart: (req, res) => { res.render(path.join('productCart')) },

    productos: (req, res) => {
        const { id } = req.params
        const product = products.find(element => element.id === +id)

        res.render('productDetail', { product })
    }
}

module.exports = controllers