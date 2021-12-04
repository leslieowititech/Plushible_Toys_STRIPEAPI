import express from 'express'

const productDb = require('../model/Product')
module.exports = {
    get: async (req:express.Request, res:express.Response) => {
        let products = await productDb.products.list();
        return res.json(
            products
        )
    }
}