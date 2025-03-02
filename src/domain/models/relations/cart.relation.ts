import { Relation } from 'typeorm';
import { User } from '../user.model.ts';
import { Schedule } from '../schedule.model.ts';
import { Cart } from '../cart.model.ts';

export type CartRelation = Relation<Cart>;
