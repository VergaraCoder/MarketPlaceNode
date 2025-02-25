import { Entity, PrimaryGeneratedColumn,Column, ManyToOne } from "typeorm";
import { ProductsCart } from "./productsCart.model.ts";
import {ProductCartRelation} from './relations/productCart.relation.ts';

@Entity("orders")
export class Orders{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique:true})
    idProductCart: number;

    @Column()
    totalPrice:number;

    @Column()
    date:string;

    @ManyToOne(()=>ProductsCart,productCart=>productCart.order)
    productCart:ProductCartRelation
}