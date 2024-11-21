import express from 'express';
import categoryControllers from '../controllers/category.controller.js'
// import {updateExampleValidation, validate} from '../middlewares/validators/example.validator.js'

const router = express.Router();
router.post('/', categoryControllers.createCategory);
router.get('/:id', categoryControllers.getOneCategory);
router.get('/', categoryControllers.getAllCategory);
router.put('/:id', categoryControllers.updateCategory);
router.delete('/:id', categoryControllers.deleteCategory);

export default router;