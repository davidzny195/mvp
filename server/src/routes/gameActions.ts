import express from 'express';
const router = express.Router();

router.get('/actions');
router.post('/initialize-actions');
router.put('/update-actions');

export default router;
