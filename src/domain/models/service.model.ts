import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToMany,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { PriceMode } from './priceMode.model.ts';
import { Schedule } from './schedule.model.ts';

@Entity('services')
export class Service {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  pricePerDuration: number;

  @Column()
  rangeOfHoursToWork: string;

  @Column()
  idPriceMode: number;

  @Column()
  idUser: number;

  @ManyToOne(() => PriceMode, priceMode => priceMode.service)
  @JoinColumn({ name: 'idPriceMode' })
  priceMode: PriceMode;

  @OneToMany(() => Schedule, schedule => schedule.service)
  schedules: Schedule[];
}
