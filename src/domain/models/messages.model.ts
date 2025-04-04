import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Conversation } from './conversations.model.ts';
import { User } from './user.model.ts';
import { UserRelation } from './relations/user.relations.ts';

@Entity('messages')
export class Message {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  idConversation: number;

  @Column()
  issuingUserId: number;

  @Column()
  message: string;

  @Column({
    type: 'enum',
    enum: ['text', 'img'],
    default: 'text',
  })
  type: string;

  @Column()
  sendDate: string;

  @ManyToOne(() => Conversation, conversation => conversation.message, {
    eager: true,
  })
  @JoinColumn({ name: 'idConversation' })
  conversation: Conversation;

  @ManyToOne(() => User, user => user.message)
  @JoinColumn({ name: 'issuingUserId' })
  user: UserRelation;
}
