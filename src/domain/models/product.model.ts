import { Check, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import {ProductsCart} from './productsCart.model.ts';


@Entity('products')
@Check('stock > 0')
export class Product {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  price: number

  @Column()
  description: string

  @Column({})
  stock: number

  @OneToMany(()=>ProductsCart,productCart=>productCart.product)
  productCart:ProductsCart[];
}
