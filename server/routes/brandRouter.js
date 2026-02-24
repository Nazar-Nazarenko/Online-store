import { Router } from 'express';

const router = Router();

router.post('/', (req, res) => {
    return res.json({ message: 'brand created' });
});

router.get('/', (req, res) => {
    return res.json({ message: 'brand list' });
});

export default router;
