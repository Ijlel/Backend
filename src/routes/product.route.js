import express from 'express';

// Import controllers and middlewares
import productController from '../controllers/product.controller.js'
// import {updateExampleValidation, validate} from '../middlewares/validators/example.validator.js'
const router = express.Router();

// Define routes
router.post('/', productController.createProduct);
router.get('/', productController.getAllProduct);
router.get('/:id', productController.getOneProduct);
router.put('/:id',  productController.updateProduct);
router.delete('/:id', productController.deleteProduct);

export default router;  