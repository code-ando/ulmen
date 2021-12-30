const { Producto, Categoria } = require('../database/models');
const { Op } = require('sequelize');
const { validationResult } = require('express-validator')
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports = {

    
    
        /* Muestra todos los productos */
        list : async (req,res) => {
            try{
                const products = await Producto.findAll({include: ['Categoria']});
                res.render('admin/admin', { products, toThousand });
            } catch(error){
                console.log(error);
            }
        },
        /* Muestra el detalle de un producto */
        detail: async (req,res) => {
            try {
                const quantities = [1,2,3,4,5,6,7,8,9,10];
                const {id} = req.params;
                const productDetail = await Producto.findByPk(id, {include: ['Categoria']});          
                res.render('/productDetail', {productDetail, toThousand, quantities}); 
                // res.json(quantities);
            } catch (error) {
                console.log(error);
            }
        },

   
    //Creacion de un producto

    create: async (req,res) => {
        try {                
            const categories = await Categoria.findAll();
            res.render('admin/create', {categories});          
            }
        catch(error) {
            console.log(error);
        }
    },  
    //Metodo de creacion

    store: async (req, res, next) => {
        let results = validationResult(req);
        console.log(req.body);
        let categories
        try {
            categories = await Categoria.findAll();
        } catch (error) {
            console.log(error);
        }
        if (results.isEmpty()) {
            try {
                await Producto.create({
                    ...req.body,
                    image : req.file.filename
                });
                res.redirect('admin');
            } catch (error) {
                console.log(error);
            }
        } else {
            res.render('admin/create', {categories, errors: results.errors});
        }
    },  
    //Update - formulario a editar

    edit: async (req,res) => {
        try {          
            const { id } = req.params;
            const productDetail = await Product.findByPk(id, {include: ['Categoria']});
            const categories = await Categoria.findAll();
            res.render('admin/edit', { productDetail, toThousand, categories });
        } catch(error) {
            console.log(error);
        }
    },

    //update - metodo para editar

    update: async (req, res, next) => {
        let results = validationResult(req);
        let productDetail
        try {
            const {id} = req.params;
            productDetail = await Producto.findByPk(id, {include: {all: true}});  
            categories = await Categoria.findAll();    
        } catch (error) {
            console.log(error);
        }
        if (results.isEmpty()) {
            try {
                if (req.body.image == undefined) {
                    //si viene indefinido el campo de imagen, almacena la misma imagen que ya tenia
                    await productDetail.update({
                        ...req.body,
                        image: productDetail.image
                    })
                    res.redirect('/productDetail')                    
                } else {
                    //si viene una nueva imagen en la edicion, se almacena la nueva imagen
                    await productDetail.update({
                        ...req.body,
                        image: req.file.filename
                    })
                    res.redirect('/admin')
                }
            } catch (error) {
                console.log(error);
            }
        } else {
            res.render('admin/edit', {productDetail, errors: results.errors});
        }
    }, 

    //Borrar un producto 

    destroy: async (req, res) => {
        try {
            const {id} = req.params;
            const product = await Producto.findByPk(id);
            await product.destroy();
            res.redirect('admin');
        } catch (error) {
            res.render(error);
            console.log(error);
        }
    }, 

    //Buscar

    search: async(req, res) => {
        try {
            let {search} = req.query;
            let products = await Producto.findAll({
                where: {
                    name: {[Op.like] : '%' + search + '%'}
                }
            });
            res.render('index', {products, toThousand});
        } catch (error) {
            res.render(error);
            console.log(error);
        }
    }
}
