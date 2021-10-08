const router = require('express').Router()
const path = require('path')
const productController = require('../controllers/productsControllers')

router.get('/productDetail', productController.productDetail)

router.get('/productCart', productController.productCart)

router.get('/productDetail/:id', productController.productos)


module.exports = router