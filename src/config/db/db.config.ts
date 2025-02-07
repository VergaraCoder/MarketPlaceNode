import dotenv from 'dotenv';
import { createPool, Pool } from 'mysql2/promise';
import { Sequelize } from 'sequelize-typescript';
import { User } from '../../domain/models/user.model';
dotenv.config();

const dbConnection:Sequelize=new Sequelize({
    dialect:"mysql",
    port:process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 10422,
    host:process.env.DB_HOST,
    username:process.env.DB_USERNAME,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_DATABASE,
    models:[User]
});

export default dbConnection;