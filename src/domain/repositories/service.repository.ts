import { Repository } from 'typeorm'
import { dbConnection } from '../../config/db/db.config.ts'
import { Service } from '../models/service.model.ts'

export const ServiceRepository: Repository<Service> =
  dbConnection.getRepository('services')
