const express = require('express');
const router = express.Router();

router.post('/registration', (req, res) => {
    res.json({ message: 'registration works' });
});

router.post('/login', (req, res) => {
    res.json({ message: 'login works' });
});

router.get('/auth', (req, res) => {
    res.json({ message: 'auth works' });
});

module.exports = router;
