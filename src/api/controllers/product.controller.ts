import { container } from 'tsyringe';
import { ProductService } from '../../application/services/product.service.ts';
import { NextFunction, Request, Response } from 'express';
import { Product } from '../../domain/models/product.model.ts';
import { Result } from 'utils/resultError/type.result.ts';

export class ControllerProduct {
  public static async create(req: Request, res: Response, next: NextFunction) {
    try {
      const productService: ProductService = container.resolve(ProductService);
      const product = productService.createProduct(req.body);
      res.status(200).json({
        message: 'Product created successfully',
      });
    } catch (err: any) {
      next(err);
    }
  }

  public static async findAll(req: Request, res: Response, next: NextFunction) {
    const productService: ProductService = container.resolve(ProductService);
    const { data, error }: Result<Product[]> =
      await productService.getAllProducts();
    error
      ? next(error)
      : res.json({
          message: 'Return all products',
          data: data,
        });
  }

  public static async findOneProduct(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    const productService: ProductService = container.resolve(ProductService);
    const { data, error }: Result<Product> =
      await productService.getOneProductById(parseInt(req.params['idProduct']));
    error
      ? next(error)
      : res.json({
          message: 'Return one product',
          data: data,
        });
  }

  public static async updateProduct(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    const productService: ProductService = container.resolve(ProductService);
    const { data, error }: Result<boolean> = await productService.updateProduct(
      parseInt(req.params['id']),
      req.body,
    );
    error
      ? next(error)
      : res.json({
          message: 'update product',
          data: data,
        });
  }

  public static async deleteProduct(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    const productService: ProductService = container.resolve(ProductService);
    const { data, error }: Result<boolean> = await productService.deleteProduct(
      parseInt(req.params['id']),
    );
    error ? next(error) : res.json({ message: 'delete product', data: data });
  }
}
