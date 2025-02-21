import { DeleteResult, UpdateResult } from 'typeorm'
import { ProductsCart } from '../../domain/models/productsCart.model'
import { ProductCartRepository } from '../../domain/repositories/productCart.respository'
import { Result } from '../../utils/resultError/type.result'
import { CreateProductsCartDto } from '../dto/productsCart/createProductsCart.dto'
import { ManageError } from '../errors/error.custom'
import { container } from 'tsyringe'
import {ProductService} from '../services/product.service.ts';
import { Product } from '../../domain/models/product.model.ts'

export class ProductsCartService {
  async create(dataCreate:CreateProductsCartDto):Promise<ProductsCart> {
    try {
        const productService:ProductService=container.resolve(ProductService);
        const product:Product=await productService.getOneProductById(dataCreate.idProduct);
        if(product.stock < dataCreate.quantity){
            throw new ManageError({
                type:"CONFLIC",
                message:"THE QUANTITY IS MORE HIGT THAT THE PRODUCT STOCK"
            });
        }
        const productsCart=ProductCartRepository.create(dataCreate);
        await ProductCartRepository.save(productsCart);
        const newStock:number=product.stock-dataCreate.quantity;
        await productService.updateProduct(product.id,{stock:newStock});

        return productsCart;
    } catch (err: any) {
        throw ManageError.signedError(err.message);
    }
  }

  async findAll(): Promise<Result<ProductsCart[]>> {
    const productsCart: ProductsCart[] = await ProductCartRepository.find()
    if (productsCart.length == 0) {
      return {
        data: null,
        error: new ManageError({
          type: 'NOT_FOUND',
          message: 'THERE ARE NOT PRODDUCTSCART RECORDS',
        }),
      }
    }
    return {
      data: productsCart,
      error: null,
    }
  }

  async findOne(id: number):Promise<Result<ProductsCart>> {
    const productCart: ProductsCart | null =
      await ProductCartRepository.findOneBy({ id })
    if (!productCart) {
      return {
        data: null,
        error: new ManageError({
          type: 'NOT_FOUND',
          message: 'PRODUCT CART NOT FOUND',
        }),
      }
    }
    return {
      data: productCart,
      error: null,
    }
  }

  async update(
    id: number,
    dataUpdate: Partial<CreateProductsCartDto>,
  ): Promise<Result<boolean>> {
    const { affected }: UpdateResult = await ProductCartRepository.update(
      id,
      dataUpdate,
    )
    if (affected == 0) {
      return {
        data: null,
        error: new ManageError({
          type: 'NOT_FOUND',
          message: 'PRODUCT CART NOT FOUND',
        }),
      }
    }
    return {
      data: true,
      error: null,
    }
  }

  async delete(id:number) {
    const { affected }: DeleteResult = await ProductCartRepository.delete(id)
    if (affected == 0) {
      return {
        data: null,
        error: new ManageError({
          type: 'NOT_FOUND',
          message: 'PRODUCT CART NOT FOUND',
        }),
      }
    }
    return {
      data: true,
      error: null,
    }
  }
}
