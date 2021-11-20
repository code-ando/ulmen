
const fs = require('fs')
const path = require('path')
const productsFilePath = path.join(__dirname, '../data/products.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));


module.exports = {

    list: (req, res) => {
        res.render('admin/admin', { products })
    },

    create: (req, res) => {
        res.render("admin/create", { products })
    },

    edit: (req, res) => {
        const product = products.find(e => e.id === +req.params.id)
        res.render('admin/edit', { product })
    },




    update: (req, res) => {
        const productUpdate = products.find(element => element.id === +req.params.id)
        const { name, color, talle, genero, descripcion, coleccion, estado, precio } = req.body

        if (productUpdate) {
            productUpdate.name = name
            productUpdate.color = color
            productUpdate.talle = +talle
            productUpdate.genero = genero
            productUpdate.descripcion = descripcion
            productUpdate.coleccion = coleccion
            productUpdate.estado = estado
            productUpdate.precio = +precio

            fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2))


            res.redirect(`/productDetail/${req.params.id}`)


        } else {
            res.redirect("/admin")
        }

    },



    destroy: (req, res) => {
        products = products.filter(product => product.id !== +req.params.id)

        fs.writeFileSync(productsFilePath, JSON.stringify(products))
        res.redirect('/admin')

    },



    store: (req, res) => {
        const create = req.body
        create.id = products.length + 1
        create.image = req.file ? req.file.filename : 'nino.jpg'
        products.push(create)
        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2))
        res.redirect("/admin")


    },

  









}
