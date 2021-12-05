import { Router }  from 'express';
const checkoutSessionController = require('../controller/checkoutSession')

const router = Router();

router.post('/', checkoutSessionController.post);

export default router;