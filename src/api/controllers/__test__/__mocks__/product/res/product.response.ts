import { CreateProductDto } from '../../../../../../application/dto/products/createProduct.dto.ts';
import { SuccessResult } from '../../../../../../utils/resultError/type.result.ts';

export const mockProductData: CreateProductDto | any = {
  id: 1,
  description: 'the best play2',
  name: 'play2',
  price: 2000,
  stock: 30,
};

export const mockAllProducts: SuccessResult<CreateProductDto[] | any> = {
  data: [mockProductData],
  error: null,
};

export const mockOneProduct: SuccessResult<CreateProductDto | any> = {
  data: mockProductData,
  error: null,
};

export const mockUpdateProduct: SuccessResult<boolean> = {
  data: true,
  error: null,
};

export const mockDeleteProduct: SuccessResult<boolean> = {
  data: true,
  error: null,
};
