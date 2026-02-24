const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    res.json({ message: 'brand created' });
});

router.get('/', (req, res) => {
    res.json({ message: 'brand list' });
});

module.exports = router;
