import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Message } from "./messages.model.ts";
import { UserRelation } from "./relations/user.relations.ts";
import { User } from "./user.model.ts";


@Entity('conversations')
export class Conversation {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    userId1:number; // THIS ALWAYS IS THE SELLER 

    @Column()
    userId2:number;
    
    @Column()
    creationDate:string;

    // @Column()
    // lastMessageId:number;

    // @ManyToOne(()=>Message,message=>message.conversation)
    // @JoinColumn({name:'lastMessageId'})
    // message:Message;

    @ManyToOne(()=>User,user=>user.conversation1)
    @JoinColumn({name:'userId1'})
    user1:UserRelation;

    @ManyToOne(()=>User,user=>user.conversation2)
    @JoinColumn({name:'userId2'})
    user2:UserRelation;

    @OneToMany(()=>Message,message=>message.conversation)
    message:Message[];
}

