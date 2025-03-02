import { NextFunction, Request, Response } from 'express';
import { CartService } from '../../application/services/cart.service.ts';
import { container } from 'tsyringe';
import { Result } from '../../utils/resultError/type.result.ts';
import { Cart } from '../../domain/models/cart.model.ts';

export class CartController {
  public static async createCart(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    const cartService: CartService = container.resolve(CartService);
  }

  public static async findAllCart(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    const cartService: CartService = container.resolve(CartService);
    const { data, error }: Result<Cart[]> = await cartService.findAll();
    error ? next(error) : res.json({ data: data });
  }

  public static async findOneCart(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    const cartService: CartService = container.resolve(CartService);
    const { data, error }: Result<Cart> = await cartService.findOne(
      parseInt(req.params.idUser),
    );
    error ? next(error) : res.json({ data: data });
  }

  public static async updateCart(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    const cartService: CartService = container.resolve(CartService);
    const { data, error }: Result<boolean> = await cartService.update(
      parseInt(req.params.idUser),
      req.body,
    );
    error ? next(error) : res.json({ data: data });
  }

  public static async deleteCart(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    const cartService: CartService = container.resolve(CartService);
    const { data, error }: Result<boolean> = await cartService.delete(
      parseInt(req.params.idUser),
    );
    error ? next(error) : res.json({ data: data });
  }
}
