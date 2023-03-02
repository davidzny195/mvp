import express from 'express';
import authRoutes from './auth';
import roomRoutes from './room';
const router = express.Router();

router.use('/auth', authRoutes);
router.use('/room', roomRoutes);

export default function () {
  return router;
}
