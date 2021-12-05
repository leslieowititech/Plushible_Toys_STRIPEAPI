import express from 'express';
import stripeProductsdb from '../model/Product';

module.exports = {
    post: async (req: express.Request, res: express.Response) => {
        const domainURL = process.env.WEB_APP_URL;
        const { line_items, customer_email } = req.body;

        if (!line_items || !customer_email) {
            return res.status(400).json({ error: 'required session parameters missing' })
        }

        let session;

        try {
            session = await stripeProductsdb.checkout.sessions.create({
                payment_method_types: ['card'],
                mode: 'payment',
                line_items,
                customer_email,
                success_url: `${domainURL}/success`,
                cancel_url: `${domainURL}/cancel`
            });
            res.status(200).json({ sessionID: session.id })
        } catch (err) {
            console.log(err);
            res.status(400).json({ error: 'an error occured unable to create session' })
        }
    }
}