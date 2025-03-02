import { Request } from 'express';

export interface PayloadToken {
  role: string;
  email: string;
  name: string;
  cart: number;
}

export interface PayloadCompleteToken extends PayloadToken {
  iat?: number;
  exp?: number;
}

export interface AuthData extends Request {
  user: PayloadToken;
}
