"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const checkoutSessionController = require('../controller/checkoutSession');
const router = (0, express_1.Router)();
router.post('/', checkoutSessionController.post);
exports.default = router;
