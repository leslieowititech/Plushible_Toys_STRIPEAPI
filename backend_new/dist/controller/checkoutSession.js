"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Product_1 = __importDefault(require("../model/Product"));
module.exports = {
    post: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const domainURL = process.env.WEB_APP_URL;
        const { line_items, customer_email } = req.body;
        if (!line_items || !customer_email) {
            return res.status(400).json({ error: 'required session parameters missing' });
        }
        let session;
        try {
            session = yield Product_1.default.checkout.sessions.create({
                payment_method_types: ['card'],
                mode: 'payment',
                line_items,
                customer_email,
                success_url: `${domainURL}/success`,
                cancel_url: `${domainURL}/cancel`
            });
            res.status(200).json({ sessionID: session.id });
        }
        catch (err) {
            console.log(err);
            res.status(400).json({ error: 'an error occured unable to create session' });
        }
    })
};
