import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Service } from './service.model.ts';

@Entity('priceMode')
export class PriceMode {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Service, service => service.priceMode)
  service: Service[];
}
