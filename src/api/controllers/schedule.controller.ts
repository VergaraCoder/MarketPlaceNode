import { NextFunction, Request, Response } from 'express';
import { ScheduleService } from '../../application/services/schedule.service.ts';
import { container } from 'tsyringe';
import { Schedule } from '../../domain/models/schedule.model.ts';
import { Result } from 'utils/resultError/type.result.ts';

export class ScheduleController {
  public static async createSchedule(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const scheduleService: ScheduleService =
        container.resolve(ScheduleService);
      const schedule = await scheduleService.create(req.body);

      res.json({
        message: 'Schedule created successfully',
        data: schedule,
      });
    } catch (err: any) {
      next(err);
    }
  }

  public static async findAllSchedule(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    const scheduleService: ScheduleService = container.resolve(ScheduleService);
    const schedules: any = await scheduleService.findAll(
      parseInt(req.params.idService),
    );
    res.json({
      message: 'Estos son los horaros disponibles',
      schedules: schedules,
    });
  }

  public static async findOneSchedule(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    const scheduleService: ScheduleService = container.resolve(ScheduleService);
    const { data, error }: Result<Schedule> = await scheduleService.findOne(
      parseInt(req.params.idSchedule),
    );
    error
      ? next(error)
      : res.json({ message: 'Schedule found successfully', data: data });
  }

  public static async updateSchedule(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    const scheduleService: ScheduleService = container.resolve(ScheduleService);
    const { data, error }: Result<boolean> = await scheduleService.update(
      parseInt(req.params.idSchedule),
      req.body,
    );
    error
      ? next(error)
      : res.json({ message: 'Schedule update successfully', data: data });
  }

  public static async deleteSchedule(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    const scheduleService: ScheduleService = container.resolve(ScheduleService);
    const { data, error }: Result<boolean> = await scheduleService.delete(
      parseInt(req.params.idSchedule),
    );
    error
      ? next(error)
      : res.json({ message: 'Schedule delete successfully', data: data });
  }
}
