import { Router } from 'express';

const router = Router();

router.post('/', (req, res) => {
    return res.json({ message: 'type created' });
});

router.get('/', (req, res) => {
    return res.json({ message: 'type list' });
});

export default router;
