import express from 'express';

// Import controllers and middlewares
import commandeControllers from '../controllers/commande.controller.js'
// import {updateExampleValidation, validate} from '../middlewares/validators/example.validator.js'
const router = express.Router();

// Define routes
router.post('/', commandeControllers.createCommande);
router.get('/', commandeControllers.getAllCommande);
router.get('/:id', commandeControllers.getOneCommande);
router.put('/:id',  commandeControllers.updateCommande);
router.delete('/:id', commandeControllers.deleteCommande);

export default router;