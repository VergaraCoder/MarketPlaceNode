import { DeleteResult, UpdateResult } from 'typeorm';
import { Orders } from '../../domain/models/orders.model.ts';
import { OrderRepository } from '../../domain/repositories/order.repository.ts';
import { Result } from '../../utils/resultError/type.result.ts';
import { CreateOrdersDto } from '../dto/orders/createOrders.dto.ts';
import { ManageError } from '../errors/error.custom.ts';
import { ProductsCartService } from './productsCart.service.ts';
import { container } from 'tsyringe';
import { ProductsCart } from '../../domain/models/productsCart.model.ts';
import { DataSource } from 'typeorm/browser';

export class OrdersService {
  async create(dataOrder: CreateOrdersDto) {
    const serviceProductCart: ProductsCartService =
      container.resolve(ProductsCartService);
    const date: Date = new Date();
    const dateSent: Date = new Date(dataOrder.date);
    try {
      if (dateSent.getTime() < date.getTime()) {
        throw new ManageError({
          type: 'CONFLIC',
          message: 'THE DATE SENT MUST BE GREATER THAN THE CURRENT DATE',
        });
      }
      let totalPrice: number;
      const productCart: ProductsCart =
        await serviceProductCart.returnProductCartToOrder(
          dataOrder.idProductCart,
        );
      totalPrice = productCart.quantity * productCart.product.price;
      const dataOrderCreate: Orders = OrderRepository.create({
        ...dataOrder,
        totalPrice,
      });
      await OrderRepository.save(dataOrderCreate);
      return dataOrderCreate;
    } catch (err: any) {
      throw ManageError.signedError(err.message);
    }
  }

  async findAll(): Promise<Result<Orders[]>> {
    const orders: Orders[] = await OrderRepository.find();
    if (orders.length == 0) {
      return {
        data: null,
        error: new ManageError({
          type: 'NOT_FOUND',
          message: 'THERE ANTE NOT ORDERS RECORDS',
        }),
      };
    }
    return {
      data: orders,
      error: null,
    };
  }

  async findOne(id: number): Promise<Result<Orders>> {
    const order: Orders | null = await OrderRepository.findOneBy({ id });
    if (!order) {
      return {
        data: null,
        error: new ManageError({
          type: 'NOT_FOUND',
          message: 'THERE ANTE NOT ORDERS RECORDS',
        }),
      };
    }
    return {
      data: order,
      error: null,
    };
  }

  async update(
    id: number,
    dataUpdate: Partial<CreateOrdersDto>,
  ): Promise<Result<boolean>> {
    const order: UpdateResult = await OrderRepository.update(id, dataUpdate);
    if (!order) {
      return {
        data: null,
        error: new ManageError({
          type: 'NOT_FOUND',
          message: 'THERE ANTE NOT ORDERS RECORDS',
        }),
      };
    }
    return {
      data: true,
      error: null,
    };
  }

  async delete(id: number): Promise<Result<boolean>> {
    const order: DeleteResult = await OrderRepository.delete(id);
    if (!order) {
      return {
        data: null,
        error: new ManageError({
          type: 'NOT_FOUND',
          message: 'THERE ANTE NOT ORDERS RECORDS',
        }),
      };
    }
    return {
      data: true,
      error: null,
    };
  }
}
