import express from 'express';
import authRoutes from './auth.routes';
import roomRoutes from './room.routes';
import userRoutes from './user.routes';
import gameRoutes from './game.routes';

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/rooms', roomRoutes);
router.use('/user', userRoutes);
router.use('/game', gameRoutes);

export default function () {
  return router;
}
