import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Product } from './product.model.ts';
import { Cart } from './cart.model.ts';
import { CartRelation } from './relations/cart.relation.ts';
import { Orders } from './orders.model.ts';

@Entity('productsCart')
export class ProductsCart {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  idProduct: number;

  @Column()
  idCart: number;

  @Column()
  quantity: number;

  @ManyToOne(() => Product, product => product.productCart)
  @JoinColumn({ name: 'idProduct' })
  product: Product;

  @ManyToOne(() => Cart, cart => cart.productCart,{eager:true})
  @JoinColumn({ name: 'idCart' })
  cart: CartRelation;

  @OneToMany(() => Orders, order => order.productCart)
  order: Orders[];
}
