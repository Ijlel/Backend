import express from 'express';

// Import controllers and middlewares
import authenticationController from '../controllers/authentication.controller.js'

const router = express.Router();

// Define routes
router.post('/register', authenticationController.signup);
router.post('/login', authenticationController.login);
router.post('/logout', authenticationController.logout);




export default router;