const router = require('express').Router()
const {login, register, agregarUser, proccessLogin} = require('../controllers/userControllers')
const validate = require ("../middlewares/validate")
const { json } = require('express')
const imagenUser = require('../middlewares/userstorage')


//Register
router.get('/register', register)
router.post('/register', imagenUser.single('image'),agregarUser)

//Login
router.get('/login', login)
router.post('/login', validate, proccessLogin)


module.exports = router