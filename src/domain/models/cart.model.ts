import { Entity, PrimaryGeneratedColumn,Column, ManyToOne, OneToMany } from "typeorm";
import {User} from './user.model.ts';
import { UserRelation } from "./relations/user.relations.ts";
import { ProductsCart } from "./productsCart.model.ts";

@Entity("carts")
export class Cart{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    idUser: number;

    @ManyToOne(()=>User,user=>user.cart)
    user: UserRelation;

    @OneToMany(()=>ProductsCart,productCart=>productCart.cart)
    productCart:ProductsCart[];
}