import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity('auth')
export class Auth {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string
}
