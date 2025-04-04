import { Request } from 'express';

export interface PayloadToken {
  id:number;
  role: string;
  email: string;
  name: string;
  cart: number;
  chatId:string;
}

export interface PayloadCompleteToken extends PayloadToken {
  iat?: number;
  exp?: number;
}

export interface AuthData extends Request {
  user: PayloadToken;
}
