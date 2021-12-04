import express from 'express';

import cartRoutes from './routes/cart';
import productRoutes from './routes/products';

const app = express();

app.use('/cart', cartRoutes);
app.use('/products', productRoutes);

//error handling middleware
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
     res.status(500).json({message: err.message})
     next()
});

app.listen(8080, () => console.log('Listening on port 8080...'));