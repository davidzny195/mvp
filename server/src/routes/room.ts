import express from 'express';
const router = express.Router();
import { roomController } from '../controllers';

router.get('/rooms', roomController.getRooms);
router.get('/room/:roomId', roomController.getRoom);
router.post('/create-room', roomController.initializeRoom);
router.put('/update-room', roomController.updateRoom);
router.get('/seating', roomController.getSeating);
router.post('/assign-seat/:userId', roomController.assignSeating);

export default router;
