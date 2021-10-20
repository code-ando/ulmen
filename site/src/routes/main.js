const router = require('express').Router()
const path = require('path')
const {home} = require('../controllers/mainControllers')


router.get('/', home)

module.exports = router