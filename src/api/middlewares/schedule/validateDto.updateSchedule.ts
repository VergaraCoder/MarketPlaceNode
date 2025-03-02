import { NextFunction, Request, Response } from 'express';
import { plainToClass } from 'class-transformer';
import { ReponseHttp } from '../../../application/errors/enum.responseError.ts';
import { CreateScheduleDto } from '../../../application/dto/schedule/createSchedule.dto.ts';

export const ValidateDtoUpdateSchedule = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const schedule: CreateScheduleDto = plainToClass(CreateScheduleDto, req.body);

  if (schedule.date) {
    if (typeof schedule.date !== 'string') {
      ReponseHttp.BAD_REQUEST(res, 'THE DATE MUST BE STRING', req.method);
      return;
    }

    if (schedule.date === undefined || schedule.date === null) {
      ReponseHttp.BAD_REQUEST(res, 'THE DATE IS REQUIRED', req.method);
      return;
    }
  }

  if (schedule.idCustomer) {
    if (typeof schedule.idCustomer !== 'number') {
      ReponseHttp.BAD_REQUEST(res, 'THE IDCUSTOMER MUST BE STRING', req.method);
      return;
    }
    if (schedule.idCustomer === undefined || schedule.idCustomer === null) {
      ReponseHttp.BAD_REQUEST(res, 'THE IDCUSTOMER IS REQUIRED', req.method);
      return;
    }
  }

  if (typeof schedule.idService !== 'number') {
    ReponseHttp.BAD_REQUEST(res, 'THE IDSERVICE MUST BE NUMBER', req.method);
    return;
  }
  if (schedule.idCustomer == 0 || schedule.idCustomer < 0) {
    ReponseHttp.BAD_REQUEST(
      res,
      'THE IDCUSTOMER AVAILABLE MUST BE MORE THAN 0',
      req.method,
    );
    return;
  }

  if (schedule.idService) {
    if (schedule.idService === undefined || schedule.idService == null) {
      ReponseHttp.BAD_REQUEST(res, 'THE IDSERVICE IS REQUIRED', req.method);
      return;
    }

    if (schedule.idService == 0 || schedule.idService < 0) {
      ReponseHttp.BAD_REQUEST(
        res,
        'THE IDSERVICE AVAILABLE MUST BE MORE THAN 0',
        req.method,
      );
      return;
    }
  }

  next();
};
