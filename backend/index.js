const express = require('express');
const stripe = require('stripe')('sk_test_51K1EcQBN69YBp2gznUNokSIIzA3QV2F3BlBsq6OdCMdSjwn8YiXWWTU4T2gkEt7Y8vaaWmYp9zjCk2ZBophg2IVA00EFgRV3dy');

const app = express();
const productsRouter = require('./routes/products');

app.use('/products', productsRouter)

const PORT = process.env.PORT || 5001


app.listen(PORT, () => console.log(`listening on port ${PORT}`))