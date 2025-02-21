import { Product } from '../../domain/models/product.model.ts'
import { ProductRepository } from '../../domain/repositories/product.repository.ts'
import { DataProduct } from '../../utils/products/createProduct.ts'
import { DataUpdateProduct } from '../../utils/products/updateProduct.ts'
import { ManageError } from '../errors/error.custom.ts'
import { affectedCount } from '../../utils/user/types/update.user.ts'
import { Result } from 'utils/resultError/type.result.ts'
import { error } from 'console'
import { DeleteResult, UpdateResult } from 'typeorm'
import { CreateProductDto } from 'application/dto/products/createProduct.dto.ts'

export class ProductService {
  async createProduct(dataProduct: DataProduct) {
    try {
      const dataProductCreate: Product = ProductRepository.create(dataProduct)
      await ProductRepository.save(dataProductCreate)
      return dataProductCreate
    } catch (err: any) {
      console.log("THE ERROR IS ");
      console.log(err);
      
      throw err
    }
  }

  async getAllProducts(): Promise<Result<Product[]>> {
    const products: Product[] = await ProductRepository.find()
    if (products.length == 0) {
      return {
        data: null,
        error: new ManageError({
          type: 'NOT_FOUND',
          message: 'THERE ARE NOT PRODUCTS',
        }),
      }
    }

    return {
      data: products,
      error: null,
    }
  }

  async getOneProductById(idProduct: number): Promise<Result<Product>> {
    const product: Product | null = await ProductRepository.findOneBy({
      id: idProduct,
    })
    if (!product) {
      return {
        data: null,
        error: new ManageError({
          type: 'NOT_FOUND',
          message: 'THIS PRODUCT DOES NOT EXIST',
        }),
      }
    }
    return {
      data: product,
      error: null,
    }
  }

  async updateProduct(
    idProduct: number,
    dataProduct: Partial<CreateProductDto>,
  ): Promise<Result<boolean>> {
    const { affected }: UpdateResult = await ProductRepository.update(
      idProduct,
      dataProduct,
    )
    if (affected == 0) {
      return {
        data: null,
        error: new ManageError({
          type: 'NOT_FOUND',
          message: 'THIS PRODUCT DOES NOT EXIST',
        }),
      }
    }
    return {
      data: true,
      error: null,
    }
  }

  async deleteProduct(idProduct: number):Promise<Result<boolean>> {
    const { affected }: DeleteResult = await ProductRepository.delete(idProduct)
    if (affected == 0) {
      return {
        data: null,
        error: new ManageError({
          type: 'NOT_FOUND',
          message: 'THIS PRODUCT DOES NOT EXIST',
        }),
      }
    }
    return {
      data: true,
      error: null,
    }
  }
}
