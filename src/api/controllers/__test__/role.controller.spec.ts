import 'reflect-metadata';
import { RolesController } from '../roles.controller.ts';
import { RolesService } from '../../../application/services/roles.service.ts';
import { container } from 'tsyringe';
import {
  mockDeleteRole,
  mockRoleData,
  mockRolesAllData,
  mockUpdateRole,
  mockAllRolesResult,
  mockOneRoleResult
} from './__mocks__/role/res/role.response.ts';
import {
  mockNext,
  mockResponseRole,
  mockRequestRole,
} from './__mocks__/role/argumentControllers.ts';
import { mockError } from './__mocks__/role/errors/error.response.ts';

jest.mock('../../../application/services/roles.service.ts', () => {
  return {
    RolesService: jest.fn().mockImplementation(() => ({
      create: jest.fn(),
      findAll: jest.fn(),
      findOne: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    })),
  };
});

describe('RolesController', () => {
  let rolesService: jest.Mocked<RolesService>;

  beforeEach(() => {
    rolesService = new RolesService() as jest.Mocked<RolesService>;
    jest
      .spyOn(container, 'resolve')
      .mockReturnValue(rolesService as unknown as RolesService);
  });

  it('should create a role successfully', async () => {
    rolesService.create.mockResolvedValueOnce(mockRoleData);
    await RolesController.create(mockRequestRole, mockResponseRole, mockNext);
    expect(rolesService.create).toHaveBeenCalledWith(mockRequestRole.body);
    expect(mockResponseRole.json).toHaveBeenCalledWith({
      message: 'create succesfully',
      data: mockRoleData,
    });
  });

  it('should get all roles successfully', async () => {
    rolesService.findAll.mockResolvedValueOnce(mockAllRolesResult);
    await RolesController.findAllRoles(mockRequestRole, mockResponseRole, mockNext);
    expect(rolesService.findAll).toHaveBeenCalledWith();
    expect(mockResponseRole.json).toHaveBeenCalledWith({
      message: 'find all succesfully',
      data: mockRolesAllData,
    });
  });

  it('should get one role successfully', async () => {
    rolesService.findOne.mockResolvedValueOnce(mockOneRoleResult);
    await RolesController.findOneRoles(mockRequestRole, mockResponseRole, mockNext);
    expect(rolesService.findOne).toHaveBeenCalledWith(
      parseInt(mockRequestRole.params.idRole),
    );
    expect(mockResponseRole.json).toHaveBeenCalledWith({
      message: 'find one succesfully',
      data: mockRoleData,
    });
  });

  it('Should delete a role succesfully', async () => {
    rolesService.delete.mockResolvedValueOnce(mockDeleteRole);
    await RolesController.deleteRoles(mockRequestRole, mockResponseRole, mockNext);
    expect(rolesService.delete).toHaveBeenCalledWith(
      parseInt(mockRequestRole.params.idRole),
    );
    expect(mockResponseRole.json).toHaveBeenCalledWith({
      message: 'delete succesfully',
      data: mockDeleteRole.data,
    });
  });

  it('should handle errors properly', async () => {
    rolesService.create.mockRejectedValue(mockError);

    await RolesController.create(mockRequestRole, mockResponseRole, mockNext);

    expect(mockNext).toHaveBeenCalledWith(mockError);
  });

  it('should handle update route', async () => {
    rolesService.update.mockResolvedValueOnce(mockUpdateRole);
    await RolesController.updateRoles(mockRequestRole, mockResponseRole, mockNext);
    expect(rolesService.update).toHaveBeenCalledWith(
      parseInt(mockRequestRole.params.idRole),
      mockRequestRole.body,
    );
    expect(mockResponseRole.json).toHaveBeenCalledWith({
      message: 'update succesfully',
      data: true,
    });
  });
});
