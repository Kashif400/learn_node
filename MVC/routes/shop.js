const { Router } = require('express')
const path = require('path');
const products = require('../model/index')
const router = Router();
const controller = require('../controller/shop');

router.get('/', controller.get);

router.get('/:shopId', controller.getOne);


router.post('/',controller.post);



router.put('/:shopId', controller.put);

router.delete('/:shopId', controller.delete);


module.exports = router;