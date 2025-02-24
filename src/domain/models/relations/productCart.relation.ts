import { Relation } from 'typeorm'
import { ProductsCart } from '../productsCart.model.ts'

export type ProductCartRelation = Relation<ProductsCart>
