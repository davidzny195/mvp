import express from 'express';
const router = express.Router();
import { roomController } from '../controllers';

router.get('/', roomController.getRooms);
router.get('/:roomId', roomController.getRoom);
router.post('/create', roomController.initializeRoom);
router.patch('/update', roomController.updateRoom);

router.get('/seating', roomController.getSeating);
router.post('/join', roomController.assignSeating);
router.delete('/remove', roomController.removePlayer);

export default router;
