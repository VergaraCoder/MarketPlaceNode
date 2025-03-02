import { Relation } from 'typeorm';
import { User } from '../user.model.ts';
import { Schedule } from '../schedule.model.ts';

export type UserRelation = Relation<User>;
export type ScheduleRelation = Relation<Schedule>;
