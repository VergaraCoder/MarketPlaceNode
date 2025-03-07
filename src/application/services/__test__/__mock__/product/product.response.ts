import { Result } from '../../../../../utils/resultError/type.result';
import { CreateProductDto } from '../../../../dto/products/createProduct.dto';

export const mockProductToCreate: CreateProductDto | any = {
  name: 'phone 12',
  description: 'the best phone 12',
  price: 4000,
  stock: 20,
};


export const mockProductCreated:CreateProductDto | any={
    id:1,
    ...mockProductToCreate
}

export const mockResultOneProduct: Result<
  typeof mockProductToCreate & { id: number }
> = {
  data: { id: 1, ...mockProductToCreate },
  error: null,
};

export const mockResultAllProducts: Result<
  typeof mockProductToCreate & { id: number }
> = {
  data: [{ id: 1, ...mockProductToCreate }],
  error: null,
};


export const mockCreateProductFunction:jest.Mock<typeof mockProductCreated>=jest.fn().mockReturnValue(mockProductCreated);

export const mockFindOneProductFunction: jest.Mock<
  Promise<typeof mockResultOneProduct | any>
> = jest.fn().mockResolvedValue({id:1,...mockProductToCreate});

export const mockFindAllFunction: jest.Mock<
  Promise<typeof mockResultAllProducts>
> = jest.fn().mockResolvedValue(mockResultAllProducts);
