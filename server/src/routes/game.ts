import express from 'express';
const router = express.Router();
import { gameController } from '../controllers';

// Game
router.get('/:gameId', gameController.getCurrentGame);
router.post('/create', gameController.createNewGame);
router.patch('/complete', gameController.endGame);

// Game State
router.get('/state/:gameId', gameController.getCurrentState);
router.post('/init-state', gameController.initializeState);
router.patch('/update-state/:gameId', gameController.updateState);

// Game History
router.get('/history/:gameId', gameController.getHistory);
router.post('/log-history', gameController.createLog);
router.patch('/update-log', gameController.updateLog);

export default router;
