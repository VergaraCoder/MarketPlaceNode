import { Entity, PrimaryGeneratedColumn,Column, ManyToOne } from "typeorm";
import {User} from './user.model.ts';
import { UserRelation } from "./relations/user.relations.ts";

@Entity("carts")
export class Cart{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    idUser: number;

    @ManyToOne(()=>User,user=>user.cart)
    user: UserRelation;
}