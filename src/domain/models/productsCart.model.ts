import { Entity, PrimaryGeneratedColumn,Column, ManyToOne } from "typeorm";
import { Product } from "./product.model.ts";
import { Cart } from "./cart.model.ts";
import {CartRelation} from './relations/cart.relation.ts';

@Entity("productsCart")
export class ProductsCart{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    idProduct: number;

    @Column()
    idCart:number;

    @Column()
    quantity:number;

    @ManyToOne(()=>Product,product=>product.productCart)
    product:Product;

    @ManyToOne(()=>Cart,cart=>cart.productCart)
    cart:CartRelation;

}