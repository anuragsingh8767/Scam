import express from 'express'
import authroutes from './auth.routes.js'
import academicroutes from './academic.routes.js'
import credentialRoutes from './credentialRoutes.js'

const router = express.Router();

router.use('/auth', authroutes);
router.use('/academic', academicroutes);
router.use('/credential', credentialRoutes);

export default router;