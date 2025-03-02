import 'reflect-metadata';
import { OrdersService } from '../../../application/services/orders.service.ts';
import { OrdersController } from '../orders.controller.ts';
import { container } from 'tsyringe';
import { mockAllOrders, mockOneOrders, mockOrderRecord } from './__mocks__/order/res/order.response.ts';
import { mockRequestOrder } from './__mocks__/order/argumentController.ts';
import { mockNext, mockResponse } from './__mocks__/argumentController.ts';

jest.mock('../../../application/services/orders.service.ts',()=>{
    return{
        OrdersService:jest.fn().mockImplementation(()=>({
            create:jest.fn(),
            findAll:jest.fn(),
            findOne:jest.fn(),
            update:jest.fn(),
            delete:jest.fn()
        }))
    }
});

describe('OrderController', () => {
  let orderService: jest.Mocked<OrdersService>;

  beforeEach(() => {
    orderService =
      new OrdersService() as OrdersService as jest.Mocked<OrdersService>;
    jest.spyOn(container, 'resolve').mockReturnValue(orderService);
    jest.clearAllMocks();
  });

  it('should create order', async () => {
    orderService.create.mockResolvedValueOnce(mockOrderRecord);
    await OrdersController.createOrders(
      mockRequestOrder,
      mockResponse,
      mockNext,
    );
    expect(orderService.create).toHaveBeenCalledWith(mockRequestOrder.body);
    expect(mockResponse.json).toHaveBeenCalledWith({
      data: mockOrderRecord,
    });
  });


  it('should return all orders', async () => {
    orderService.findAll.mockResolvedValueOnce(mockAllOrders);
    await OrdersController.findAllOrders(
      mockRequestOrder,
      mockResponse,
      mockNext,
    );
    expect(orderService.findAll).toHaveBeenCalledWith();
    expect(mockResponse.json).toHaveBeenCalledWith({
      data: mockAllOrders.data,
    });
  });


  it('should return one order', async () => {
    orderService.findOne.mockResolvedValueOnce(mockOneOrders);
    await OrdersController.findOneOrders(
      mockRequestOrder,
      mockResponse,
      mockNext,
    );
    expect(orderService.findOne).toHaveBeenCalledWith(parseInt(mockRequestOrder.params.idOrder));
    expect(mockResponse.json).toHaveBeenCalledWith({
      data: mockOneOrders.data,
    });
  });

});
