const express = require('express');
const router = express.Router();
const imagenProduct = require('../middlewares/productstorage')


const {list,create,edit, destroy, update, store} = require("../controllers/adminController")



/* GET users listing. */

router.get('/', list)

router.get('/create', create)
router.post('/create', imagenProduct.single('image'),store);



router.get('/edit/:id',edit)
router.put('/edit/:id',imagenProduct.single('image'),update)


router.delete('/:id', destroy)



module.exports = router;


