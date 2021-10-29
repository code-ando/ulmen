const router = require('express').Router()


/* const validate = require ("../middlewares/validate") */
const {login, register, agregarUser, processLogin} = require('../controllers/userControllers')
const { json } = require('express')
const imagenUser = require('../middlewares/userstorage')
const guestUser = require('../middlewares/guestUser')


//Register
router.get('/register',guestUser, register)
router.post('/register', imagenUser.single('image'),agregarUser)







//Login
router.get('/login',guestUser, login)
router.post('/login', processLogin)


module.exports = router