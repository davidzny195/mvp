import express from 'express';
const router = express.Router();
import { userController } from '../controllers';

router.get('/user/:userId', userController.getUser);

export default router;
