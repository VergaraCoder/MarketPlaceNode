import { NextFunction, Request, Response } from 'express';
import { plainToClass } from 'class-transformer';
import { ReponseHttp } from '../../../application/errors/enum.responseError.ts';
import { CreateServiceDto } from '../../../application/dto/service/createService.dto.ts';

export const ValidateDtoCreateService = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const service: CreateServiceDto = plainToClass(CreateServiceDto, req.body);

  if (typeof service.name !== 'string') {
    ReponseHttp.BAD_REQUEST(res, 'THE NAME MUST BE STRING', req.method);
    return;
  }

  if (typeof service.description !== 'string') {
    ReponseHttp.BAD_REQUEST(res, 'THE DESCRPTION MUST BE STRING', req.method);
    return;
  }

  if (typeof service.idPriceMode !== 'number') {
    ReponseHttp.BAD_REQUEST(res, 'THE IDPRICEMODE MUST BE NUMBER', req.method);
    return;
  }

  if (typeof service.pricePerDuration !== 'number') {
    ReponseHttp.BAD_REQUEST(
      res,
      'THE PRICEPERDURATION MUST BE NUMBER',
      req.method,
    );
    return;
  }

  if (typeof service.rangeOfHoursToWork !== 'string') {
    ReponseHttp.BAD_REQUEST(
      res,
      'THE rangeOfHoursToWork MUST BE STRING',
      req.method,
    );
    return;
  }

  if (typeof service.idUser !== 'number') {
    ReponseHttp.BAD_REQUEST(res, 'THE IDUSER MUST BE NUMBER', req.method);
    return;
  }

  if (service.name === undefined || service.name === null) {
    ReponseHttp.BAD_REQUEST(res, 'THE NAME IS REQUIRED', req.method);
    return;
  }

  if (service.description === undefined || service.description === null) {
    ReponseHttp.BAD_REQUEST(res, 'THE DESCRIPTION IS REQUIRED', req.method);
    return;
  }

  if (service.idPriceMode === undefined || service.idPriceMode == null) {
    ReponseHttp.BAD_REQUEST(res, 'THE PRICE IS REQUIRED', req.method);
    return;
  }

  if (service.idUser === undefined || service.idUser == null) {
    ReponseHttp.BAD_REQUEST(res, 'THE IDUSER IS REQUIRED', req.method);
    return;
  }

  if (service.name.length < 3) {
    ReponseHttp.BAD_REQUEST(
      res,
      'THE NAME MUST HAVE MORE THAN 3 CHARACTERS',
      req.method,
    );
    return;
  }

  if (service.description.length < 10) {
    ReponseHttp.BAD_REQUEST(
      res,
      'THE DESCRIPTION MUST HAVE MORE THAN 10 CHARACTERS',
      req.method,
    );
    return;
  }

  if (service.pricePerDuration < 200) {
    ReponseHttp.BAD_REQUEST(res, 'THE PRICE MUST BE MORE THAN 200', req.method);
    return;
  }

  if (service.idUser == 0) {
    console.log('ERROR ');

    ReponseHttp.BAD_REQUEST(
      res,
      'THE IDUSER AVAILABLE MUST BE MORE THAN 0',
      req.method,
    );
    return;
  }

  next();
};
