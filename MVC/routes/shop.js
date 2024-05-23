const { Router } = require('express')
const router = Router();
const controller = require('../controller/shop')

router.get('/', controller.get);




module.exports = router;