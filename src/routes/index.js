import { Router } from 'express';
import exampleRoutes from './example.route.js';
import userRoutes from './user.route.js';
import categoryRoutes from './category.route.js'
import productRoutes from './product.route.js'
import commandeRoutes from './commande.route.js'

const router = Router();
// Define routes
router.use('/examples', exampleRoutes);
router.use('/users', userRoutes);
router.use('/category', categoryRoutes);
router.use('/product', productRoutes);
router.use('/commande', commandeRoutes);
export default router;