import express from 'express'

import stripeProductsdb from '../model/Product';
module.exports = {
    get: async (req:express.Request, res:express.Response) => {
        let products = await stripeProductsdb.products.list();
        return res.json(
            products
        )
    }
}