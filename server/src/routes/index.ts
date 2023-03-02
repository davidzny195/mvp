import express from 'express';
import authRoutes from './auth';
import roomRoutes from './room';
import userRoutes from './user';
import gameRoutes from './game';

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/rooms', roomRoutes);
router.use('/user', userRoutes);
router.use('/game', gameRoutes);

export default function () {
  return router;
}
