import 'reflect-metadata';
import { container } from 'tsyringe';
import { ServiceService } from '../../../application/services/service.service';
import {
  mockAllService,
  mockDataService,
  mockResponseAllService,
  mockResponseDeleteService,
  mockResponseOneService,
  mockResponseUpdateService,
} from './__mocks__/service/res/service.response.ts';
import { ServiceController } from '../service.controller.ts';
import {
  mockRequestService,
  mockResponseService,
} from './__mocks__/service/argumentController';
import { mockNext } from './__mocks__/role/argumentControllers';
import { mockRejectFindOne } from './__mocks__/service/errors/error.response.ts';

jest.mock('../../../application/services/service.service', () => {
  return {
    ServiceService: jest.fn().mockImplementation(() => ({
      create: jest.fn(),
      findAll: jest.fn(),
      findOne: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    })),
  };
});

describe('ServiceController', () => {
  let serviceService: jest.Mocked<ServiceService>;
  beforeEach(() => {
    serviceService =
      new ServiceService() as ServiceService as jest.Mocked<ServiceService>;
    jest
      .spyOn(container, 'resolve')
      .mockReturnValue(serviceService as unknown as ServiceService);

    jest.clearAllMocks();
  });

  it('should create service', async () => {
    serviceService.create.mockResolvedValueOnce(mockDataService);
    await ServiceController.createService(
      mockRequestService,
      mockResponseService,
      mockNext,
    );
    expect(serviceService.create).toHaveBeenCalledWith(mockRequestService.body);
    expect(mockResponseService.json).toHaveBeenCalledWith({
      message: 'Service created successfully',
      data: mockDataService,
    });
  });

  it('should findAll services', async () => {
    serviceService.findAll.mockResolvedValueOnce(mockResponseAllService);
    await ServiceController.findAllService(
      mockRequestService,
      mockResponseService,
      mockNext,
    );
    expect(serviceService.findAll).toHaveBeenCalledWith();
    expect(mockResponseService.json).toHaveBeenCalledWith({
      message: 'Service created successfully',
      data: mockResponseAllService.data,
    });
  });

  it('should findOne service', async () => {
    serviceService.findOne.mockResolvedValueOnce(mockDataService);
    await ServiceController.findOneService(
      mockRequestService,
      mockResponseService,
      mockNext,
    );
    expect(serviceService.findOne).toHaveBeenCalledWith(
      parseInt(mockRequestService.params.idService),
    );
    expect(mockResponseService.json).toHaveBeenCalledWith({
      message: 'Service returned successfully',
      data: mockDataService,
    });
  });

  it('should udpate service', async () => {
    serviceService.update.mockResolvedValueOnce(mockResponseUpdateService);
    await ServiceController.updateService(
      mockRequestService,
      mockResponseService,
      mockNext,
    );
    expect(serviceService.update).toHaveBeenCalledWith(
      parseInt(mockRequestService.params.idService),
      mockRequestService.body,
    );
    expect(mockResponseService.json).toHaveBeenCalledWith({
      message: 'Service updated successfully',
      data: mockResponseUpdateService.data,
    });
  });

  it('should delete service', async () => {
    serviceService.delete.mockResolvedValueOnce(mockResponseDeleteService);
    await ServiceController.deleteService(
      mockRequestService,
      mockResponseService,
      mockNext,
    );
    expect(serviceService.delete).toHaveBeenCalledWith(
      parseInt(mockRequestService.params.idService),
    );
    expect(mockResponseService.json).toHaveBeenCalledWith({
      message: 'Service deleted successfully',
      data: mockResponseUpdateService.data,
    });
  });

  it('should throw exception', async () => {
    serviceService.findOne.mockRejectedValueOnce(mockRejectFindOne);
    await ServiceController.findOneService(
      mockRequestService,
      mockResponseService,
      mockNext,
    );
    expect(mockNext).toHaveBeenCalledTimes(1);
    expect(mockNext).toHaveBeenCalledWith(mockRejectFindOne);
  });
});
