"use strict";
module.exports = {
    get: async (req, res) => {
        let products = await stripe.products.list();
        res.json(products);
    }
};
//# sourceMappingURL=productsController.js.map