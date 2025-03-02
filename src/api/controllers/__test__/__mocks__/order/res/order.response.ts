import { CreateOrdersDto } from '../../../../../../application/dto/orders/createOrders.dto';
import { SuccessResult } from '../../../../../../utils/resultError/type.result';

export const mockOrderRecord: CreateOrdersDto | any = {
  id: 1,
  idProductCart: 1,
  date: '2025-03-30T12:00:00',
};

export const mockAllOrders: SuccessResult<CreateOrdersDto[] | any> = {
  data: [mockOrderRecord],
  error: null,
};

export const mockOneOrders: SuccessResult<CreateOrdersDto | any> = {
  data: mockOrderRecord,
  error: null,
};

export const mockUpdateOrders: SuccessResult<CreateOrdersDto | any> = {
  data: true,
  error: null,
};

export const mockDeleteOrders: SuccessResult<CreateOrdersDto | any> = {
  data: true,
  error: null,
};
