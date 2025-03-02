import { Response, Request, NextFunction } from 'express';

export const mockRequestRole = {
  body: { name: 'admin' },
  params: { idRole: '2' },
} as unknown as Request;

export const mockResponseRole = {
  json: jest.fn(),
} as unknown as Response;

export const mockNext = jest.fn() as NextFunction;
