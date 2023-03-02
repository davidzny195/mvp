import express from 'express';
import authRoutes from './auth';
import roomRoutes from './room';
import userRoutes from './user';

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/room', roomRoutes);
router.use('/user', userRoutes);

export default function () {
  return router;
}
