import { Sequelize } from 'sequelize';

const {
    DB_NAME = 'postgres',
    DB_USER = 'postgres',
    DB_PASSWORD = 'root',
    DB_HOST = 'localhost',
    DB_PORT = '5432'
} = process.env;

export default new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    dialect: 'postgres',
    host: DB_HOST,
    port: Number(DB_PORT)
});
