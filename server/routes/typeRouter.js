const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    res.json({ message: 'type created' });
});

router.get('/', (req, res) => {
    res.json({ message: 'type list' });
});

module.exports = router;
