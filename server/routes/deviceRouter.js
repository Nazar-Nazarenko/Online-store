const express = require('express');
const router = express.Router();

/** Health / test */
router.get('/', (req, res) => {
    return res.json({ message: 'device router works' });
});

/** Create device (example) */
router.post('/create', (req, res) => {
    return res.status(201).json({
        message: 'device created',
        data: req.body
    });
});

/** Get all devices (example) */
router.get('/list', (req, res) => {
    // later you can fetch from DB
    return res.json({
        message: 'devices list',
        items: []
    });
});

/** Get one device by id (example) */
router.get('/:id', (req, res) => {
    const { id } = req.params;

    return res.json({
        message: 'device by id',
        id
    });
});

module.exports = router;
