import { Request } from 'express';
import { mockPayloadToken } from './res/productCart.response';

export const mockRequestProductCart = {
  body: {
    idCart: 1,
    idProduct: 3,
    quantity: 2,
  },
  params: { cartId: '3', idItem: '2' },
  user: { ...mockPayloadToken },
} as unknown as Request;
