import { NextFunction, Request, Response } from 'express';
import { CreateUserDto } from '../../../application/dto/user/createUser.dto.ts';
import { plainToClass } from 'class-transformer';
import { ReponseHttp } from '../../../application/errors/enum.responseError.ts';
import { CreateProductDto } from '../../../application/dto/products/createProduct.dto.ts';

export const ValidateDtoUpdateProducts = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const product: CreateProductDto = plainToClass(CreateProductDto, req.body);

  if (product.description) {
    if (typeof product.description !== 'string') {
      ReponseHttp.BAD_REQUEST(res, 'THE DESCRPTION MUST BE STRING', req.method);
      return;
    }

    if (product.description === undefined || product.description === null) {
      ReponseHttp.BAD_REQUEST(res, 'THE DESCRIPTION IS REQUIRED', req.method);
      return;
    }

    if (product.description.length < 10) {
      ReponseHttp.BAD_REQUEST(
        res,
        'THE DESCRIPTION MUST HAVE MORE THAN 10 CHARACTERS',
        req.method,
      );
      return;
    }
  }

  if (product.name) {
    if (typeof product.name !== 'string') {
      ReponseHttp.BAD_REQUEST(res, 'THE NAME MUST BE STRING', req.method);
      return;
    }

    if (product.name === undefined || product.name === null) {
      ReponseHttp.BAD_REQUEST(res, 'THE NAME IS REQUIRED', req.method);
      return;
    }

    if (product.name.length < 3) {
      ReponseHttp.BAD_REQUEST(
        res,
        'THE NAME MUST HAVE MORE THAN 3 CHARACTERS',
        req.method,
      );
      return;
    }
  }

  if (product.price) {
    if (typeof product.price !== 'number') {
      ReponseHttp.BAD_REQUEST(res, 'THE PRICE MUST BE NUMBER', req.method);
      return;
    }

    if (product.price === undefined || product.price) {
      ReponseHttp.BAD_REQUEST(res, 'THE PRICE IS REQUIRED', req.method);
      return;
    }

    if (product.price < 200) {
      ReponseHttp.BAD_REQUEST(
        res,
        'THE PRICE MUST BE MORE THAN 200',
        req.method,
      );
      return;
    }
  }

  if (product.stock) {
    if (typeof product.stock !== 'number') {
      ReponseHttp.BAD_REQUEST(res, 'THE STOCK MUST BE NUMBER', req.method);
      return;
    }

    if (product.stock === undefined || product.stock) {
      ReponseHttp.BAD_REQUEST(res, 'THE STOCK IS REQUIRED', req.method);
      return;
    }

    if (product.stock == 0) {
      ReponseHttp.BAD_REQUEST(
        res,
        'THE STOCK AVAILABLE MUST BE MORE THAN 0',
        req.method,
      );
      return;
    }
  }
  next();
};
