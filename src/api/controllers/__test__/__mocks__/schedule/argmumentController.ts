import { Request } from 'express';

export const mockRequestSchedule = {
  body: {
    date: '2025-03-30T12:00:00',
    idCustomer: 2,
    idService: 1,
  },
  params: { idService: '3', idSchedule: '2' },
  //   user:{...mockPayloadToken}
} as unknown as Request;
