"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stripeProductsdb = require('stripe')(process.env.SECRET_KEY);
exports.default = stripeProductsdb;
