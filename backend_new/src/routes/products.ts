import { Router } from 'express';
const productsController = require('../controller/product');

const router = Router();

router.get('/', productsController.get);

export default router;