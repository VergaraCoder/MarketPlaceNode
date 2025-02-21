import { NextFunction, Request, Response } from 'express'
import { ProductsCartService } from '../../application/services/productsCart.service.ts'
import { container } from 'tsyringe'
import { Result } from '../../utils/resultError/type.result.ts'
import { ProductsCart } from '../../domain/models/productsCart.model.ts'
import { PayloadToken } from '../../utils/auth/payloadToke.ts'

export class ProductsCartController {
  public static async createProductsCart(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const productsCartService: ProductsCartService =
        container.resolve(ProductsCartService)
        
      const payloadToken: PayloadToken = req['user']

      const createProductCart: ProductsCart = await productsCartService.create({
        ...req.body,
        idCart: payloadToken.cart,
      })
      res.json({ create: createProductCart })
    } catch (err: any) {
        next(err);
    }
  }

  public static async findAllProductsCart(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    const productsCartService: ProductsCartService =
      container.resolve(ProductsCartService)
    const { data, error }: Result<ProductsCart[]> =
      await productsCartService.findAll()
    error ? next(error) : res.json({ data })
  }

  public static async findOneProductsCart(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    const productsCartService: ProductsCartService =
      container.resolve(ProductsCartService)
    const { data, error }: Result<ProductsCart> =
      await productsCartService.findOne(parseInt(req.params.id))
    error ? next(error) : res.json({ data })
  }

  public static async updateProductsCart(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    const productsCartService: ProductsCartService =
      container.resolve(ProductsCartService)
    const { data, error }: Result<boolean> = await productsCartService.update(
      parseInt(req.params.id),
      req.body,
    )
    error ? next(error) : res.json({ data })
  }

  public static async deleteProductsCart(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    const productsCartService: ProductsCartService =
      container.resolve(ProductsCartService)
    const { data, error }: Result<boolean> = await productsCartService.update(
      parseInt(req.params.id),
      req.body,
    )
    error ? next(error) : res.json({ data })
  }
}
