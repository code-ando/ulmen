const router = require('express').Router()
const {login, register, processLogin, profile, cerrarSesion,update,agregarUser} = require('../controllers/userControllers')
const imagenUser = require('../middlewares/userstorage')
const guestUser = require('../middlewares/guestUser')
const userAuth = require('../middlewares/userAuth')
const validateRegister = require('../middlewares/validateRegister')
const validateLogin = require('../middlewares/validateLogin')

//Register
router.get('/register',guestUser, register)
router.post('/register', imagenUser.single('image'), validateRegister,agregarUser)

//editar perfil

router.get('/editProfile/:id/', profile)
router.put('/editProfile/:id/',validateRegister, update )

//Login
router.get('/login',guestUser, login)
router.post('/login',validateLogin, processLogin)

router.get('/profile', userAuth, profile)
router.get('/cerrarSesion', cerrarSesion)

module.exports = router

/* localhost:3030/user/login */ 