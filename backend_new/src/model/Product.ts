const stripeProductsdb = require('stripe')(process.env.SECRET_KEY);

export default  stripeProductsdb;