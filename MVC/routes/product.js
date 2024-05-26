const { Router } = require('express')
const path = require('path');
const products = require('../model/index')
const router = Router();
const controller = require('../controller/products');

router.get('/', controller.get);

router.get('/:productId', controller.getOne);


router.post('/',controller.post);



router.put('/:productId', controller.put);

router.delete('/:productId', controller.delete);


module.exports = router;