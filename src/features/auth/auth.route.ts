import express from 'express';
import authController from './auth.controller';
const router = express.Router();


router.post('/create',authController.create);
router.post('/',authController.login);



export default router;