import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { User } from './user.model.ts';

@Entity('roles')
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({unique:true})
  name: string;

  @OneToMany(() => User, user => user.role)
  users: User[];
}
