import { container } from 'tsyringe';
import { ScheduleService } from '../services/schedule.service.ts';

container.registerSingleton<ScheduleService>(ScheduleService);
