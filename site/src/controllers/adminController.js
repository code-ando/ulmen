const products = require('../data/products.json')

module.exports = {

    list: (req, res) => {
        res.render('admin/admin' , {products})
    },

    create:(req, res) => {
        res.render("admin/create")
    },

    edit: (req,res) => {
        res.render("admin/edit")
    },

}