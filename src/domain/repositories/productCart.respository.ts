import { Repository } from 'typeorm';
import { dbConnection } from '../../config/db/db.config.ts';
import { ProductsCart } from '../models/productsCart.model.ts';

export const ProductCartRepository: Repository<ProductsCart> =
  dbConnection.getRepository('productsCart');
