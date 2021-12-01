const router = express.Router();

const controller = require('../controllers/productsController')

router.get('/', controller.get);

module.exports = router;