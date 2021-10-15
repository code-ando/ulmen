const express = require('express');
const router = express.Router();
const multer = require('multer');

const {list,create,edit, destroy, update, store} = require("../controllers/adminController")

const upload= multer({dest:'uploads/'})
const storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, './public/images/productos')
    },
    filename: function (req, file, cb){
        const uniqueSuffix =Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix)
    }

})
const unpload = multer({storage: storage})
/* GET users listing. */

router.get('/', list)

router.get('/create', create)
router.post('/create', upload.single('image'),store);



router.get('/edit/:id',edit)
router.put('/edit/:id',update)


router.delete('/:id', destroy)



module.exports = router;
