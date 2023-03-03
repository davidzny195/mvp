import express from 'express';
const router = express.Router();
import { roomController } from '../controllers';

// Room
router.get('/', roomController.getRooms);
router.get('/:roomId', roomController.getRoom);
router.post('/create', roomController.initializeRoom);
router.patch('/update', roomController.updateRoom);
router.delete('/delete/:roomId', roomController.deleteRoom);

// Room players
router.get('/:roomId/seating', roomController.getSeating);
router.post('/start', roomController.assignSeating);
router.patch('/join', roomController.joinRoom);
router.delete('/remove', roomController.removePlayer);

export default router;
