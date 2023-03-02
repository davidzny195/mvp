import express from 'express';
const router = express.Router();
import { roomController } from '../controllers';

// Room
router.get('/', roomController.getRooms);
router.get('/:roomId', roomController.getRoom);
router.post('/create', roomController.initializeRoom);
router.patch('/update', roomController.updateRoom);

// Room players
router.get('/seating', roomController.getSeating);
router.post('/join', roomController.assignSeating);
router.delete('/remove', roomController.removePlayer);

export default router;
