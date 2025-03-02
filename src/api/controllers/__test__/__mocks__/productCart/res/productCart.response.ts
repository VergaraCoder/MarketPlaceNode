import { CreateProductsCartDto } from '../../../../../../application/dto/productsCart/createProductsCart.dto';
import {
  AuthData,
  PayloadCompleteToken,
} from '../../../../../../utils/auth/payloadToke.ts';
import { SuccessResult } from '../../../../../../utils/resultError/type.result.ts';

export const mockProductCartRecord: CreateProductsCartDto | any = {
  id: 1,
  idCart: 1,
  idProduct: 3,
  quantity: 2,
};

export const mockPayloadToken: PayloadCompleteToken = {
  cart: 1,
  email: 'jhonatanvergara072@gmail.com',
  name: 'jhonatan',
  role: 'admin',
  exp: 1232434323,
  iat: 123124344544,
};

export const mockAllProductCarts: SuccessResult<CreateProductsCartDto[] | any> =
  {
    data: [mockProductCartRecord],
    error: null,
  };

export const mockOneProductCart: SuccessResult<CreateProductsCartDto | any> = {
  data: mockProductCartRecord,
  error: null,
};

export const mockUpdateProductCart: SuccessResult<boolean> = {
  data: true,
  error: null,
};

export const mockDeleteProductCart: SuccessResult<boolean> = {
  data: true,
  error: null,
};
