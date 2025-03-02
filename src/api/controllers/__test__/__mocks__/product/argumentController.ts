import { Response, Request, NextFunction } from 'express';

export const mockRequestProduct = {
  body: {
    name: 'banana',
    description: 'thr best banana',
    price: 100,
    stock: 30,
  },
  params: { idProduct: '2' },
} as unknown as Request;

export const mockResponseProduct = {
  json: jest.fn(),
} as unknown as Response;

export const mockNext = jest.fn() as NextFunction;
