import express from 'express';
const router = express.Router();
import { userController } from '../controllers';

router.get('/details/:userId', userController.getUserDetails);

export default router;
