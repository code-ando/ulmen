const router = require('express').Router()
const path = require('path')
const userController = require('../controllers/userControllers')

router.get('/register', userController.register)

router.get('/login', userController.login)


module.exports = router