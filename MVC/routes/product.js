const { Router } = require('express')
const path = require('path');
const products = require('../model/index')
const router = Router();
const controller = require('../controller/products');

router.get('/', controller.get);


router.post('/',controller.post);



router.put('/:productIndex', controller.put);

router.delete('/:productIndex', controller.get);


module.exports = router;