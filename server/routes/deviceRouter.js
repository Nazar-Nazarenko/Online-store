import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    return res.json({ message: 'device router works' });
});

router.post('/create', (req, res) => {
    return res.status(201).json({
        message: 'device created',
        data: req.body
    });
});

router.get('/list', (req, res) => {
    return res.json({
        message: 'devices list',
        items: []
    });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;

    return res.json({
        message: 'device by id',
        id
    });
});

export default router;
