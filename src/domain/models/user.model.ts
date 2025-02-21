import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn
} from 'typeorm'
import { Role } from './roles.model.ts'
import { Schedule } from './schedule.model.ts'
import {Cart} from './cart.model.ts';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column({unique:true})
  email: string

  @Column()
  password: string

  @Column()
  idRole: number

  @ManyToOne(() => Role, role => role.users, { eager: true })
  @JoinColumn({ name: 'idRole' })
  role: Role

  @OneToMany(() => Schedule, (schedule) => schedule.user)
  schedules: Schedule[]

  @OneToMany(() => Cart, (cart) => cart.user)
  cart: Cart[]
}
