import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm'
import { Role } from './roles.model.ts'

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  email: string

  @Column()
  password: string

  @Column()
  idRole: number

  @ManyToOne(() => Role, role => role.users, { eager: true })
  @JoinColumn({ name: 'idRole' })
  role: Role
}
