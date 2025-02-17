import 'reflect-metadata' //
import dotenv from 'dotenv'
// import {User} from '../../domain/models/user.model';
import { DataSource, DataSourceOptions } from 'typeorm'
import { User } from '../../domain/models/user.model.ts'
import { Product } from '../../domain/models/product.model.ts'
import { Role } from '../../domain/models/roles.model.ts'
import { Service } from '../../domain/models/service.model.ts'
import { PriceMode } from '../../domain/models/priceMode.model.ts'
dotenv.config()

const dbConnection: DataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 10422,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: true,
  logging: true,
  entities: [User, Product, Role, Service, PriceMode],
})

export { dbConnection }
