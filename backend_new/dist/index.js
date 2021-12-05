"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: './.env' });
const cart_1 = __importDefault(require("./routes/cart"));
const products_1 = __importDefault(require("./routes/products"));
const checkout_1 = __importDefault(require("./routes/checkout"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({ origin: true }));
app.use('/cart', cart_1.default);
app.use('/products', products_1.default);
app.use('/create-checkout', checkout_1.default);
//error handling middleware
app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
    next();
});
const PORT = process.env.PORT || 8080;
app.listen(8080, () => console.log(`Listening on port ${PORT}...`));
