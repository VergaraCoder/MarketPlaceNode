import { Request } from "express";

export const mockRequestOrder = {
  body: {
    idProductCart: 1,
    date: '2025-03-30T12:00:00',
  },
  params: { idOrder: '3' },
  //   user:{...mockPayloadToken}
} as unknown as Request;
