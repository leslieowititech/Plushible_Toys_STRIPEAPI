"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productsController = require('../controller/product');
const router = (0, express_1.Router)();
router.get('/', productsController.get);
exports.default = router;
