const router = require('express').Router()
const path = require('path')
const {productFilter, productDetail,productCart,productos} = require('../controllers/productsControllers')


router.get('/productfilter',productFilter)

router.get('/productDetail', productDetail)

router.get('/productCart', productCart)

router.get('/productDetail/:id', productos)


module.exports = router