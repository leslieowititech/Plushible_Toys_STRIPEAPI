const productDb = require('../model/Product')
module.exports = {
    get: async (req, res) => {
        let products = await productDb.products.list();
        return res.json(
            products
        )
    }
}