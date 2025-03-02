import { NextFunction, Request, Response } from 'express';
import { container } from 'tsyringe';
import { UserService } from '../../../../application/services/user.service.ts';
import { User } from '../../../../domain/models/user.model.ts';
import { ReponseHttp } from '../../../../application/errors/enum.responseError.ts';
import { PayloadToken } from '../../../../utils/auth/payloadToke.ts';
import { CartService } from '../../../../application/services/cart.service.ts';
import { Cart } from 'domain/models/cart.model.ts';

export class VerifyUser {
  public static async validate(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    const userService: UserService = container.resolve(UserService);
    const cartService: CartService = container.resolve(CartService);
    const user: User | null = await userService.findOneUserByEmailAndPassword(
      req.body,
    );
    if (user == null) {
      ReponseHttp.UNAUTHORIZED(res, 'EL USUARIO NO EXISTE', 'POST');
    } else {
      const cart: Cart = await cartService.findOneByIdUser(user.id);
      const payload: PayloadToken = {
        role: user.role.name,
        name: user.name,
        email: user.email,
        cart: cart.id,
      };
      req.body = { ...req.body, ...payload };
      next();
    }
  }
}
