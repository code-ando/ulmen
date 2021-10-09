const express = require('express');
const router = express.Router();

const {list,create,edit, destroy, update} = require("../controllers/adminController")

/* GET users listing. */

router.get('/', list)

router.get('/create', create)
router.post('/create')

router.get('/edit',edit)
router.put('/edit/:id', update)


router.delete('/delete/:id', destroy)

module.exports = router;