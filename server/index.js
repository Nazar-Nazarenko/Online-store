require('dotenv').config();
const express = require('express');
const cors = require('cors');
const sequelize = require('./db');
require('./models/models');
const router = require('./routes/index');

const PORT = process.env.PORT || 5001;

const app = express();
app.use(cors());
app.use(express.json());

// health check
app.get('/', (req, res) => {
    res.status(200).json({ message: 'Server works' });
});

// api routes
app.use('/api', router);

const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, '0.0.0.0', () => {
            console.log(`Server started on port ${PORT}`);
        });

    } catch (e) {
        console.error('Startup error:', e);
        process.exit(1);
    }
};

start();
