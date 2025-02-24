import { Repository } from 'typeorm'
import { Orders } from '../models/orders.model.ts'
import { dbConnection } from '../../config/db/db.config.ts'

export const OrderRepository: Repository<Orders> =
  dbConnection.getRepository('orders')
