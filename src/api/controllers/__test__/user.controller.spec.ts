import 'reflect-metadata';
import { container } from 'tsyringe';
import { UserService } from '../../../application/services/user.service.ts';
import {
  mockAllUser,
  mockDeleteUser,
  mockOneUser,
  mockUpdateUser,
  mockUserData,
} from './__mocks__/user/res/user.response.ts';
import { UserController } from '../user.controller.ts';
import {
  mockNext,
  mockRequestUser,
  mockResponseUser,
} from './__mocks__/user/argumentController.ts';
import { mockThrowError1, mockThrowError2 } from './__mocks__/user/errors/user.error.ts';

jest.mock('../../../application/services/user.service.ts', () => {
  return {
    UserService: jest.fn().mockImplementation(() => ({
      create: jest.fn(),
      findAllUsers: jest.fn(),
      findOneUserByEmailAndPassword: jest.fn(),
      findOneUser: jest.fn(),
      updateUser: jest.fn(),
      deleteUser: jest.fn(),
    })),
  };
});

describe('UserController', () => {
  let userService: jest.Mocked<UserService>;

  beforeEach(() => {
    userService = new UserService() as jest.Mocked<UserService>;
    jest
      .spyOn(container, 'resolve')
      .mockReturnValue(userService as unknown as UserService);
      jest.clearAllMocks();
  });

  it('should create user', async () => {
    userService.create.mockResolvedValueOnce(mockUserData);
    await UserController.create(mockRequestUser, mockResponseUser, mockNext);
    expect(userService.create).toHaveBeenCalledWith(mockRequestUser.body);
    expect(mockResponseUser.json).toHaveBeenCalledWith({
      message: 'melo',
    });
  });

  it('should get all users', async () => {
    userService.findAllUsers.mockResolvedValueOnce(mockAllUser);
    await UserController.create(mockRequestUser, mockResponseUser, mockNext);
    expect(userService.create).toHaveBeenCalledWith(mockRequestUser.body);
    expect(mockResponseUser.json).toHaveBeenCalledWith({
      message: 'melo',
    });
  });

  it('should return one user', async () => {
    userService.findOneUser.mockResolvedValueOnce(mockOneUser);
    await UserController.getOneUser(
      mockRequestUser,
      mockResponseUser,
      mockNext,
    );
    expect(userService.findOneUser).toHaveBeenCalledWith(
      parseInt(mockRequestUser.params.idUser),
    );
    expect(mockResponseUser.json).toHaveBeenCalledWith({
      data: mockUserData,
    });
  });

  it('should return update user ', async () => {
    userService.updateUser.mockResolvedValueOnce(mockUpdateUser);
    await UserController.update(mockRequestUser, mockResponseUser, mockNext);
    expect(userService.updateUser).toHaveBeenCalledWith(
      parseInt(mockRequestUser.params.idUser),
      mockRequestUser.body,
    );
    expect(mockResponseUser.json).toHaveBeenCalledWith({
      data: mockUpdateUser.data,
    });
  });

  it('shoul delete user ', async () => {
    userService.deleteUser.mockResolvedValueOnce(mockDeleteUser);
    await UserController.delete(mockRequestUser, mockResponseUser, mockNext);
    expect(userService.deleteUser).toHaveBeenCalledWith(
      parseInt(mockRequestUser.params.idUser),
    );
    expect(mockResponseUser.json).toHaveBeenCalledWith({
      data: mockDeleteUser.data,
    });
  });

  it('should retur error reject1', async () => {
    userService.create.mockRejectedValueOnce(mockThrowError1);

    await UserController.create(mockRequestUser, mockResponseUser, mockNext);
    expect(mockNext).toHaveBeenCalledTimes(1);
    expect(mockNext).toHaveBeenCalledWith(mockThrowError1);
  });


  it('should retur error reject2', async () => {
    userService.create.mockRejectedValueOnce(mockThrowError2);

    await UserController.create(mockRequestUser, mockResponseUser, mockNext);
    expect(mockNext).toHaveBeenCalledTimes(1);
    expect(mockNext).toHaveBeenCalledWith(mockThrowError2);
  });
});
