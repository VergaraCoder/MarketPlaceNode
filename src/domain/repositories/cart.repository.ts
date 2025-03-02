import { Repository } from 'typeorm';
import { dbConnection } from '../../config/db/db.config.ts';
import { Cart } from '../models/cart.model.ts';

export const CartRepository: Repository<Cart> =
  dbConnection.getRepository('carts');
