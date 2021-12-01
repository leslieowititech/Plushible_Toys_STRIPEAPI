const express = require('express');
const router = express.Router();
const productDb = require('../model/Product');

router.get('/', async(req, res) => {
    const products = await productDb.products.list();
    res.json(
        products
    )
});

module.exports = router