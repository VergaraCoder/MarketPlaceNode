import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { ReponseHttp } from '../../../application/errors/enum.responseError.ts';
import { AuthData } from 'utils/auth/payloadToke.ts';
dotenv.config();

export class VerifyToken {
  public static async validateToken(
    req: any,
    res: Response,
    next: NextFunction,
  ) {
    const token: string | any = req.headers['access_token'] as string;
    const secret: string = process.env.JWT_SECRET as string;
    try {
      if (!token) {
        ReponseHttp.UNAUTHORIZED(res, 'THE TOKEN MUST BE PROVIDER', 'UNKNOW');
        return;
      }
      console.log('PASS');

      const decoded = jwt.verify(token, secret);
      req.user = decoded;
      next();
    } catch (err: any) {
      if (err.message == 'jwt expired') {
        ReponseHttp.UNAUTHORIZED(res, 'THE TOKEN ALREADY EXPIRED', 'UNKNOW');
        return;
      }
    }
  }
}
