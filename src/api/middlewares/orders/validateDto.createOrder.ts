import { NextFunction, Request, Response } from 'express';
import { plainToClass } from 'class-transformer';
import { ReponseHttp } from '../../../application/errors/enum.responseError.ts';
import { CreateOrdersDto } from '../../../application/dto/orders/createOrders.dto.ts';

export const ValidateDtoCreateOrders = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const order: CreateOrdersDto = plainToClass(CreateOrdersDto, req.body);

  if (typeof order.date !== 'string') {
    ReponseHttp.BAD_REQUEST(res, 'THE DATE MUST BE STRING', req.method);
    return;
  }

  if (typeof order.idProductCart !== 'number') {
    ReponseHttp.BAD_REQUEST(
      res,
      'THE IDPRODUCTCART MUST BE STRING',
      req.method,
    );
    return;
  }

  if (order.date === undefined || order.date === null) {
    ReponseHttp.BAD_REQUEST(res, 'THE DATE IS REQUIRED', req.method);
    return;
  }

  if (order.idProductCart === undefined || order.idProductCart === null) {
    ReponseHttp.BAD_REQUEST(res, 'THE IDPRODUCTCART IS REQUIRED', req.method);
    return;
  }

  next();
};
