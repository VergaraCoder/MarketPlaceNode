import { NextFunction, Request, Response } from 'express';
import { CreateUserDto } from '../../../application/dto/user/createUser.dto.ts';
import { plainToClass } from 'class-transformer';
import { ReponseHttp } from '../../../application/errors/enum.responseError.ts';
import { CreateProductDto } from '../../../application/dto/products/createProduct.dto.ts';
import { CreateAuthDto } from '../../../application/dto/auth/createAuth.dto.ts';

export const ValidateDtoAuth = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const authTokens: CreateAuthDto = plainToClass(CreateAuthDto, req.body);

  if (typeof authTokens.email !== 'string') {
    ReponseHttp.BAD_REQUEST(res, 'THE EMAIL MUST BE STRING', req.method);
    return;
  }

  if (typeof authTokens.password !== 'string') {
    ReponseHttp.BAD_REQUEST(res, 'THE PASSWORD MUST BE STRING', req.method);
    return;
  }

  if (
    !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(authTokens.email)
  ) {
    ReponseHttp.BAD_REQUEST(res, 'THE EMAIL IS NOT VALID', req.method);
    return;
  }

  if (!/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).+$/.test(authTokens.password)) {
    ReponseHttp.BAD_REQUEST(res, 'THE PASSWORD IS NOT VALID', req.method);
    return;
  }
  next();
};
