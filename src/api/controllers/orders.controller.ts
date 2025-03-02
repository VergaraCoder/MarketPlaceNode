import { NextFunction, Request, Response } from 'express';
import { OrdersService } from '../../application/services/orders.service.ts';
import { container } from 'tsyringe';
import { Result } from '../../utils/resultError/type.result.ts';
import { Orders } from '../../domain/models/orders.model.ts';

export class OrdersController {
  public static async createOrders(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const ordersService: OrdersService = container.resolve(OrdersService);

      const orderCreate: Orders = await ordersService.create(req.body);
      res.json({ data: orderCreate });
    } catch (err: any) {
      next(err);
    }
  }

  public static async findAllOrders(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    const ordersService: OrdersService = container.resolve(OrdersService);
    const { data, error }: Result<Orders[]> = await ordersService.findAll();
    error ? next(error) : res.json({data:data});
  }

  public static async findOneOrders(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    const ordersService: OrdersService = container.resolve(OrdersService);
    const { data, error }: Result<Orders> = await ordersService.findOne(
      parseInt(req.params.idOrder),
    );
    error ? next(error) : res.json({data:data});
  }

  public static async updateOrders(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    const ordersService: OrdersService = container.resolve(OrdersService);
    const { data, error }: Result<boolean> = await ordersService.update(
      parseInt(req.params.idOrder),
      req.body,
    );
    error ? next(error) : res.json(data);
  }

  public static async deleteOrders(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    const ordersService: OrdersService = container.resolve(OrdersService);
    const { data, error }: Result<boolean> = await ordersService.delete(
      parseInt(req.params.idOrder),
    );
    error ? next(error) : res.json(data);
  }
}
