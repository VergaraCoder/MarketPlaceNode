import { Response, Request, NextFunction } from 'express';

export const mockRequestUser = {
  body: {
    name: 'jhonatan',
    email: 'jhonatanvergara@gmail.com',
    password: 'Diosesmitodo96/',
    idRole: 2,
  },
  params: { idUser: '2' },
} as unknown as Request;

export const mockResponseUser = {
  json: jest.fn(),
} as unknown as Response;

export const mockNext = jest.fn() as NextFunction;
