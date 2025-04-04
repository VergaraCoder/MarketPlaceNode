import {
  Check,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ProductsCart } from './productsCart.model.ts';
import { User } from './user.model.ts';
import { UserRelation } from './relations/user.relations.ts';

@Entity('products')
@Check('stock > 0')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  description: string;

  @Column({})
  stock: number;

  @Column()
  idSeller:number;

  @ManyToOne(()=>User,user=>user.products,{eager:true})
  @JoinColumn({name:'idSeller'})
  seller:UserRelation;

  @OneToMany(() => ProductsCart, productCart => productCart.product,{eager:true})
  productCart: ProductsCart[];
}
