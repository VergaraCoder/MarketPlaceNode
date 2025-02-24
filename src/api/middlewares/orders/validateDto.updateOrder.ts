import { NextFunction, Request, Response } from 'express'
import { plainToClass } from 'class-transformer'
import { ReponseHttp } from '../../../application/errors/enum.responseError.ts'
import { CreateOrdersDto } from '../../../application/dto/orders/createOrders.dto.ts'

export const ValidateDtoUpdateOrders = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const order: CreateOrdersDto = plainToClass(CreateOrdersDto, req.body)

  if (order.date) {
    if (typeof order.date !== 'string') {
      ReponseHttp.BAD_REQUEST(res, 'THE NAME MUST BE STRING', req.method)
      return
    }
    if (order.date === undefined || order.date === null) {
      ReponseHttp.BAD_REQUEST(res, 'THE NAME IS REQUIRED', req.method)
      return
    }
  }

  if (order.idProductCart) {
    if (typeof order.idProductCart !== 'number') {
      ReponseHttp.BAD_REQUEST(res, 'THE DESCRPTION MUST BE STRING', req.method)
      return
    }

    if (order.idProductCart === undefined || order.idProductCart === null) {
      ReponseHttp.BAD_REQUEST(res, 'THE DESCRIPTION IS REQUIRED', req.method)
      return
    }
  }

  next()
}
