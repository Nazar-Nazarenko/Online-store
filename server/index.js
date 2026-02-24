import 'dotenv/config';
import express from 'express';
import cors from 'cors';

import sequelize from './db.js';
import './models/models.js';
import router from './routes/index.js';

const PORT = process.env.PORT || 5001;

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Server works' });
});

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
