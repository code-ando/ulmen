const router = require('express').Router()
const {login, register, agregarUser, proccessLogin} = require('../controllers/userControllers')
const validate = require ("../middlewares/validate")
const { json } = require('express')
const imagenUser = require('../middlewares/userstorage')
const validateRegister = require('../middlewares/validateRegister')


//Register
router.get('/register', register)
router.post('/register', imagenUser.single('image'), validateRegister,agregarUser)

//Login
router.get('/login', login)
router.post('/login', validate, proccessLogin)


module.exports = router