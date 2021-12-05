import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config({path: '../.env'});

import cartRoutes from './routes/cart';
import productRoutes from './routes/products';

const app = express();
app.use(express.json())
app.use(cors({origin: true}))

app.use('/cart', cartRoutes);
app.use('/products', productRoutes);

//error handling middleware
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
     res.status(500).json({message: err.message})
     next()
});
console.log(process.env.PORT, 'port')
app.listen(8080, () => console.log('Listening on port 8080...'));