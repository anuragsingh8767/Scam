import express from 'express';
import CredentialController from '../controllers/credentialController.js';

const router = express.Router();

// Route to process and store credential with hash
router.post('/process', CredentialController.processCredential);

// Route to retrieve credential details by ID
router.get('/details/:credentialId', CredentialController.getCredentialDetails);

export default router; 