import { container } from 'tsyringe';
import { ServiceService } from '../../../application/services/service.service';
import { mockAllService, mockDataService, mockResponseAllService } from './__mocks__/service/res/service.response.ts';
import {ServiceController} from '../service.controller.ts';
import { mockRequestService, mockResponseService } from './__mocks__/service/argumentController';
import { mockNext } from './__mocks__/role/argumentControllers';

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
    await ServiceController.createService(mockRequestService,mockResponseService,mockNext);
    expect(serviceService.create).toHaveBeenCalledWith(mockRequestService.body);
    expect(mockResponseService.json).toHaveBeenCalledWith({
        message: 'Service created successfully',
        data: mockDataService,
    });
  });


//   it('should findAll services', async ()=>{
//     serviceService.findAll.mockResolvedValueOnce(mockResponseAllService);
//     await ServiceController.findAllService(mockRequestService,mockResponseService,mockNext);
//     expect(serviceService.findAll).toHaveBeenCalledWith();
//   })


});
