import { Repository } from 'typeorm';
import { Product } from '../models/product.model.ts';
import { dbConnection } from '../../config/db/db.config.ts';

export const ProductRepository: Repository<Product> =
  dbConnection.getRepository('products');
