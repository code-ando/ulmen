const db = require('../database/models');

const controllers = {
    home: (req, res) => { 

        db.Producto.findAll({
            include : [{all : true}]
        })
            .then(productos => {
                    return res.render('index', { 
                    productos 
                }) 
            })
            .catch(error => console.log(error))

       
    }
}

module.exports = controllers