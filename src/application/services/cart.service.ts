import { Result } from '../../utils/resultError/type.result.ts'
import { Cart } from '../../domain/models/cart.model.ts'
import { CartRepository } from '../../domain/repositories/cart.repository.ts'
import { ManageError } from '../errors/error.custom.ts'
import { CreateCartDto } from '../dto/cart/createCart.dto.ts'
import { UpdateResult } from 'typeorm'
import { DeleteResult } from 'typeorm/browser'

export class CartService {
  async create(dataCreateCart: CreateCartDto): Promise<Cart> {
    try {
      const data: Cart = CartRepository.create(dataCreateCart)
      await CartRepository.save(data)
      return data
    } catch (err: any) {
      throw err
    }
  }

  async findAll(): Promise<Result<Cart[]>> {
    const carts: Cart[] = await CartRepository.find()
    if (carts.length == 0) {
      return {
        data: null,
        error: new ManageError({
          type: 'NOT_FOUND',
          message: 'THERE ARE NOT CARTS RECORDS',
        }),
      }
    }
    return {
      data: carts,
      error: null,
    }
  }

  async findOne(idCart: number): Promise<Result<Cart>> {
    const cart: Cart | null = await CartRepository.findOneBy({ id: idCart })
    if (!cart) {
      return {
        data: null,
        error: new ManageError({
          type: 'NOT_FOUND',
          message: 'CART NOT FOUND',
        }),
      }
    }
    return {
      data: cart,
      error: null,
    }
  }

  async findOneByIdUser(idUser: number): Promise<Cart> {
    const cart: Cart | null = await CartRepository.findOneBy({ idUser })
    if (!cart) {
      return await this.create({idUser})
    }
    return cart
  }

  async update(
    id: number,
    dataUpdate: Partial<CreateCartDto>,
  ): Promise<Result<boolean>> {
    const { affected }: UpdateResult = await CartRepository.update(
      id,
      dataUpdate,
    )
    if (affected == 0) {
      return {
        data: null,
        error: new ManageError({
          type: 'NOT_FOUND',
          message: 'CART NOT FOUND',
        }),
      }
    }
    return {
      data: true,
      error: null,
    }
  }

  async delete(id: number): Promise<Result<boolean>> {
    const { affected }: DeleteResult = await CartRepository.delete(id)
    if (affected == 0) {
      return {
        data: null,
        error: new ManageError({
          type: 'NOT_FOUND',
          message: 'CART NOT FOUND',
        }),
      }
    }
    return {
      data: true,
      error: null,
    }
  }
}
