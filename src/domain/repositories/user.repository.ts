import { Repository } from 'typeorm';
import { dbConnection } from '../../config/db/db.config.ts';
import { User } from '../models/user.model.ts';

export const UserRepository: Repository<User> =
  dbConnection.getRepository('users');
