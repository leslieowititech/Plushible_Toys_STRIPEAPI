"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cart_1 = __importDefault(require("./routes/cart"));
const products_1 = __importDefault(require("./routes/products"));
const app = (0, express_1.default)();
app.use('/cart', cart_1.default);
app.use('/products', products_1.default);
//error handling middleware
app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
    next();
});
app.listen(8080, () => console.log('Listening on port 8080...'));
