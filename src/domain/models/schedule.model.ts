import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm'
import { Service } from './service.model.ts'
import { User } from './user.model.ts'
import {UserRelation} from './relations/user.relations.ts';

@Entity('schedules')
export class Schedule {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  idService:number

  @Column()
  date:Date

  @Column()
  idCustomer:number
 
  @ManyToOne(() => User, (user) => user.schedules) 
  @JoinColumn({ name: "idCustomer" })
  user: UserRelation


  @ManyToOne(()=>Service,(service)=>service.schedules)
  @JoinColumn({name:"idService"})
  service:Service

}
