/* 
const fs = require('fs')
const path = require('path')
const productsFilePath = path.join(__dirname, '../data/products.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8")); */

const path = require('path');

const db = require('../database/models')



module.exports = {

    //Listar todos los productos

    list: (req, res) => {
        db.products.findAll()
        .then(product => {
            res.render('admin/admin', {products: product})
        })
        .catch(err =>{
            console.log("Error al requerir los productos solicitados de la base de datos", err)
        })
    },

    //detalle de cada producto

    detail: async (req, res) => {
        try {
            const product = await db.products.findByPk(+req.params.id)
            res.render('productDetail', {products: product})
        } catch (error) {
            console.log("Error al requerir los productos solicitados de la base de datos", error)
        }
    },

    //Creacion de un producto

    create: (req, res) => {

    },
    //Metodo de creacion

    store: function (req, res) {
        db.Product.create(req.body)
        .then(result =>{
           res.redirect(`/Products/detail/:result.id`)
        })
        .catch(err => {
            res.render('err')
        })
    },

    //Update - formulario a editar

    edit: function(req,res) {

    },

    //update - metodo para editar

    update: function(req,res) {

    }, 

    //Borrar un producto 

    destroy : (req, res) => {
		db.Product.destroy({
            where : {
                id : req.params.id
            }
        }).then( () => res.redirect('/products'))
        .catch(error => console.log(error))
	}
}
