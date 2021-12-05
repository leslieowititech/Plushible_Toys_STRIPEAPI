import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config({path: './.env'});

import cartRoutes from './routes/cart';
import productRoutes from './routes/products';
import checkoutSessionRoutes from './routes/checkout';

const app = express();
app.use(express.json())
app.use(cors({origin: true}))

app.use('/cart', cartRoutes);
app.use('/products', productRoutes);
app.use('/create-checkout', checkoutSessionRoutes)

//error handling middleware
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
     res.status(500).json({message: err.message})
     next()
});
const PORT = process.env.PORT || 8080;

app.listen(8080, () => console.log(`Listening on port ${PORT}...`));