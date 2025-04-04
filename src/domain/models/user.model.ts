import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Role } from './roles.model.ts';
import { Schedule } from './schedule.model.ts';
import { Cart } from './cart.model.ts';
import { Product } from './product.model.ts';
import { Message } from './messages.model.ts';
import { Conversation } from './conversations.model.ts';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  idRole: number;

  @Column()
  chatId: string;

  @ManyToOne(() => Role, role => role.users, { eager: true })
  @JoinColumn({ name: 'idRole' })
  role: Role;

  @OneToMany(() => Schedule, schedule => schedule.user)
  schedules: Schedule[];

  @OneToMany(() => Cart, cart => cart.user)
  cart: Cart[];

  @OneToMany(() => Product, product => product.seller)
  products: Product[];

  @OneToMany(()=>Message,message=>message.user)
  message:Message[];

  @OneToMany(()=>Conversation,conversation=>conversation.user1)
  conversation1:Conversation[];

  @OneToMany(()=>Conversation,conversation=>conversation.user2)
  conversation2:Conversation[];
}
