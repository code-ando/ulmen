const router = require('express').Router()
const {login, register, processLogin,processRegister} = require('../controllers/userControllers')
const guestUser = require('../middlewares/guestUser')
const validate = require('../middlewares/validate')

/* const validate = require ("../middlewares/validate") */

router.get('/register', register)


router.get('/login',validate, guestUser, login)

router.post('/login', processLogin)




module.exports = router