const router = require('express').Router()


/* const validate = require ("../middlewares/validate") */
const {login, register, agregarUser, processLogin, profile, cerrarSesion} = require('../controllers/userControllers')
const { json } = require('express')
const imagenUser = require('../middlewares/userstorage')
const guestUser = require('../middlewares/guestUser')
const userAuth = require('../middlewares/userAuth')
const validateRegister = require('../middlewares/validateRegister')

//Register
router.get('/register',guestUser, register)
router.post('/register', imagenUser.single('image'), validateRegister,agregarUser)

//Login
router.get('/login',guestUser, login)
router.post('/login', processLogin)

router.get('/profile', userAuth, profile)
router.get('/cerrarSesion', cerrarSesion)

module.exports = router