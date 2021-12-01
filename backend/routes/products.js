const express = require('express');
const router = express.Router();
const productsController = require('../controller/productsController');

router.get('/', productsController.get);

module.exports = router