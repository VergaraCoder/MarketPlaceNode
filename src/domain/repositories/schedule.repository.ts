import { Repository } from 'typeorm';
import { Schedule } from '../models/schedule.model.ts';
import { dbConnection } from '../../config/db/db.config.ts';

export const ScheduleRepository: Repository<Schedule> =
  dbConnection.getRepository('schedules');
