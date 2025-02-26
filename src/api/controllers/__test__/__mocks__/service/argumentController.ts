import { Response, Request, NextFunction } from 'express';

export const mockRequestService = {
  body: {
    name: 'plomery',
    description: 'thr best plmery man',
    idPriceMode: 1,
    pricePerDuration: 2000,
    rangeOfHoursToWork: '10,17',
    idUser: 2,
  },
  params: { idService: '2' },
} as unknown as Request;

export const mockResponseService = {
  json: jest.fn(),
} as unknown as Response;

export const mockNext = jest.fn() as NextFunction;
