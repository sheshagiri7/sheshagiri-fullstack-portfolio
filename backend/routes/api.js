import express from 'express';
import { submitContact, getHealth } from '../controllers/contactController.js';

const router = express.Router();

// Health check endpoint
router.get('/health', getHealth);

// Contact message submission endpoint
router.post('/contact', submitContact);

export default router;
