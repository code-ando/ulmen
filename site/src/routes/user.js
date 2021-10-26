const router = require('express').Router()
const {login, register, proccessLogin} = require('../controllers/userControllers')
const validate = require ("../middlewares/validate")

router.get('/register', register)

router.get('/login', login)

router.post('/login', validate, proccessLogin)


module.exports = router