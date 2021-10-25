const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');


const {list,create,edit, destroy, update, store} = require("../controllers/adminController")


const storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, './public/images/productos')
    },
    filename: function (req, file, cb){
        cb(null,'img-'+ Date.now() + path.extname(file.originalname))
    }
});
const upload = multer({ storage: storage})
/* GET users listing. */

router.get('/', list)

router.get('/create', create)
router.post('/create', upload.single('image'),store);



router.get('/edit/:id',edit)
router.put('/edit/:id',upload.single('image'),update)


router.delete('/:id', destroy)



module.exports = router;


