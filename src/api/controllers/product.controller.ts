import { container } from 'tsyringe'
import { ProductService } from '../../application/services/product.service.ts'
import { NextFunction, Request, Response } from 'express'
import { Product } from '../../domain/models/product.model.ts'

export class ControllerProduct {
  public static async create(req: Request, res: Response, next: NextFunction) {
    try {
      const productService: ProductService = container.resolve(ProductService)
      const product = productService.createProduct(req.body)
      res.status(200).json({
        message: 'Product created successfully',
      })
    } catch (err: any) {
      next(err)
    }
  }

  public static async findAll(req: Request, res: Response, next: NextFunction) {
    try {
      const productService: ProductService = container.resolve(ProductService)
      const product: Product[] = await productService.getAllProducts()
      res.json({
        message: 'Return all products',
        data: product,
      })
    } catch (err: any) {
      next(err)
    }
  }

  public static async findOneProduct(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const productService: ProductService = container.resolve(ProductService)
      const product: Product = await productService.getOneProductById(
        parseInt(req.params['idProduct']),
      )
      res.json({
        message: 'Return one product',
        data: product,
      })
    } catch (err: any) {
      next(err)
    }
  }

  public static async updateProduct(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const productService: ProductService = container.resolve(ProductService)
      const product: boolean = await productService.updateProduct(
        parseInt(req.params['id']),
        req.body,
      )
      res.json({
        message: 'update product',
        data: product,
      })
    } catch (err: any) {
      next(err)
    }
  }

  public static async deleteProduct(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const productService: ProductService = container.resolve(ProductService)
      const product: boolean = await productService.deleteProduct(
        parseInt(req.params['id']),
      )
      res.json({
        message: 'delte product perfect',
        data: product,
      })
    } catch (err: any) {
      next(err)
    }
  }
}
