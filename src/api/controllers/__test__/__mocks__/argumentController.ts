import { NextFunction, Response } from 'express';

export const mockResponse = {
  json: jest.fn(),
} as unknown as Response;

export const mockNext = jest.fn() as NextFunction;
