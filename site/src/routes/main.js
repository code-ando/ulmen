const router = require('express').Router()
const path = require('path')
const mainController = require('../controllers/mainControllers')


router.get('/', mainController.home)

router.get('/index', mainController.home)

module.exports = router