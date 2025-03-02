import 'reflect-metadata';
import { container } from 'tsyringe';
import { ProductsCartService } from '../../../application/services/productsCart.service.ts';
import { ProductsCartController } from '../productsCart.controller.ts';
import {
  mockAllProductCarts,
  mockDeleteProductCart,
  mockOneProductCart,
  mockPayloadToken,
  mockProductCartRecord,
  mockUpdateProductCart,
} from './__mocks__/productCart/res/productCart.response.ts';
import { mockRequestProductCart } from './__mocks__/productCart/argumentController.ts';
import { mockNext, mockResponse } from './__mocks__/argumentController.ts';
import { mockError } from './__mocks__/role/errors/error.response.ts';

jest.mock('../../../application/services/productsCart.service.ts', () => {
  return {
    ProductsCartService: jest.fn().mockImplementation(() => ({
      create: jest.fn(),
      findAll: jest.fn(),
      findAllByCartId: jest.fn(),
      findOne: jest.fn(),
      returnProductCartToOrder: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    })),
  };
});

describe('ProducCartController', () => {
  let producCartService: jest.Mocked<ProductsCartService>;
  beforeEach(() => {
    producCartService =
      new ProductsCartService() as ProductsCartService as jest.Mocked<ProductsCartService>;
    container.registerInstance(ProductsCartService,producCartService);
    jest.clearAllMocks();
  });

  it('should create productCart ', async () => {
    producCartService.create.mockResolvedValueOnce(mockProductCartRecord);
    await ProductsCartController.createProductsCart(
      mockRequestProductCart,
      mockResponse,
      mockNext,
    );
    expect(producCartService.create).toHaveBeenCalledWith(
      mockRequestProductCart.body,
    );
    expect(mockResponse.json).toHaveBeenCalledWith({
      create: mockProductCartRecord,
    });
  });

  it('should return all productCarts', async () => {
    producCartService.findAll.mockResolvedValueOnce(mockAllProductCarts);
    await ProductsCartController.findAllProductsCart(
      mockRequestProductCart,
      mockResponse,
      mockNext,
    );
    expect(producCartService.findAll).toHaveBeenCalledWith();
    expect(mockResponse.json).toHaveBeenCalledWith({
      data: mockAllProductCarts.data,
    });
  });

  it('should return all productCart of a cartId', async () => {
    producCartService.findAllByCartId.mockResolvedValueOnce(
      mockAllProductCarts,
    );
    await ProductsCartController.findAllProductsCartByCartId(
      mockRequestProductCart,
      mockResponse,
      mockNext,
    );
    expect(producCartService.findAllByCartId).toHaveBeenCalledWith(
      mockPayloadToken.cart,
    );
    expect(mockResponse.json).toHaveBeenCalledWith({
      data: mockAllProductCarts.data,
    });
  });

  it('should return one productCart', async () => {
    producCartService.findOne.mockResolvedValueOnce(mockOneProductCart);
    await ProductsCartController.findOneProductsCart(
      mockRequestProductCart,
      mockResponse,
      mockNext,
    );
    expect(producCartService.findOne).toHaveBeenCalledWith(
      parseInt(mockRequestProductCart.params.idItem),
    );
    expect(mockResponse.json).toHaveBeenCalledWith({
      data: mockOneProductCart.data,
    });
  });

  it('should return update productCart', async () => {
    producCartService.update.mockResolvedValueOnce(mockUpdateProductCart);
    await ProductsCartController.updateProductsCart(
      mockRequestProductCart,
      mockResponse,
      mockNext,
    );
    expect(producCartService.update).toHaveBeenCalledWith(
      parseInt(mockRequestProductCart.params.idItem),
      mockRequestProductCart.body,
    );
    expect(mockResponse.json).toHaveBeenCalledWith({
      data: mockUpdateProductCart.data,
    });
  });

  it('should return delete productCart', async () => {
    producCartService.delete.mockResolvedValueOnce(mockDeleteProductCart);
    await ProductsCartController.deleteProductsCart(
      mockRequestProductCart,
      mockResponse,
      mockNext,
    );
    expect(producCartService.delete).toHaveBeenCalledWith(
      parseInt(mockRequestProductCart.params.idItem),
    );
    expect(mockResponse.json).toHaveBeenCalledWith({
      data: mockDeleteProductCart.data,
    });
  });

  it('should rejected error ', async () => {
    producCartService.create.mockRejectedValueOnce(mockError);
    await ProductsCartController.createProductsCart(
      mockRequestProductCart,
      mockResponse,
      mockNext,
    );
    expect(mockNext).toHaveBeenCalledTimes(1);
    expect(mockNext).toHaveBeenCalledWith(mockError);
  });
});
