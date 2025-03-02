import 'reflect-metadata';
import { ProductService } from '../../../application/services/product.service.ts';
import { ControllerProduct } from '../product.controller.ts';
import { container } from 'tsyringe';
import {
  mockRequestProduct,
  mockResponseProduct,
} from './__mocks__/product/argumentController.ts';
import { mockNext } from './__mocks__/role/argumentControllers.ts';
import {
  mockAllProducts,
  mockDeleteProduct,
  mockOneProduct,
  mockProductData,
  mockUpdateProduct,
} from './__mocks__/product/res/product.response.ts';

jest.mock('../../../application/services/product.service.ts', () => {
  return {
    ProductService: jest.fn().mockImplementation(() => ({
      createProduct: jest.fn(),
      getAllProducts: jest.fn(),
      getOneProductById: jest.fn(),
      OneProductById: jest.fn(),
      updateProduct: jest.fn(),
      deleteProduct: jest.fn(),
    })),
  };
});

describe('ProductController', () => {
  let productService: jest.Mocked<ProductService>;

  beforeEach(() => {
    productService =
      new ProductService() as ProductService as jest.Mocked<ProductService>;
    jest
      .spyOn(container, 'resolve')
      .mockReturnValue(productService as unknown as ProductService);
    jest.clearAllMocks();
  });

  it('should create product', async () => {
    productService.createProduct.mockResolvedValueOnce(mockProductData);
    await ControllerProduct.create(
      mockRequestProduct,
      mockResponseProduct,
      mockNext,
    );
    expect(productService.createProduct).toHaveBeenCalledWith(
      mockRequestProduct.body,
    );
    expect(mockResponseProduct.json).toHaveBeenCalledWith({
      message: 'Product created successfully',
      data: mockProductData,
    });
  });

  it('should findAll products', async () => {
    productService.getAllProducts.mockResolvedValueOnce(mockAllProducts);
    await ControllerProduct.findAll(
      mockRequestProduct,
      mockResponseProduct,
      mockNext,
    );
    expect(productService.getAllProducts).toHaveBeenCalledWith();
    expect(mockResponseProduct.json).toHaveBeenCalledWith({
      message: 'Return all products',
      data: mockAllProducts.data,
    });
  });

  it('should findOne product', async () => {
    productService.getOneProductById.mockResolvedValueOnce(mockOneProduct);
    await ControllerProduct.findOneProduct(
      mockRequestProduct,
      mockResponseProduct,
      mockNext,
    );
    expect(productService.getOneProductById).toHaveBeenCalledWith(
      parseInt(mockRequestProduct.params.idProduct),
    );
    expect(mockResponseProduct.json).toHaveBeenCalledWith({
      message: 'Return one product',
      data: mockOneProduct.data,
    });
  });

  it('should update product', async () => {
    productService.updateProduct.mockResolvedValueOnce(mockUpdateProduct);
    await ControllerProduct.updateProduct(
      mockRequestProduct,
      mockResponseProduct,
      mockNext,
    );
    expect(productService.updateProduct).toHaveBeenCalledWith(
      parseInt(mockRequestProduct.params.idProduct),
      mockRequestProduct.body,
    );
    expect(mockResponseProduct.json).toHaveBeenCalledWith({
      message: 'update product',
      data: mockUpdateProduct.data,
    });
  });

  it('should delete product', async () => {
    productService.deleteProduct.mockResolvedValueOnce(mockDeleteProduct);
    await ControllerProduct.deleteProduct(
      mockRequestProduct,
      mockResponseProduct,
      mockNext,
    );
    expect(productService.deleteProduct).toHaveBeenCalledWith(
      parseInt(mockRequestProduct.params.idProduct),
    );
    expect(mockResponseProduct.json).toHaveBeenCalledWith({
      message: 'delete product',
      data: mockDeleteProduct.data,
    });
  });
});
