import dotenv from 'dotenv';
import { createPool, Pool } from 'mysql2/promise';
dotenv.config();

const dbConnection:Pool=createPool({
    host:process.env.DB_HOST,
    port:process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 10422,
    user:process.env.DB_USERNAME,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_DATABASE
});

export default dbConnection;