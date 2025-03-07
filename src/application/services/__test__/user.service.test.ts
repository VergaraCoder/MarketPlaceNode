import { mockUpdateUser, mockUserData } from '../../../api/controllers/__test__/__mocks__/user/res/user.response.ts';
import { User } from '../../../domain/models/user.model.ts';
import { UserRepository } from '../../../domain/repositories/user.repository.ts';
import { Result } from '../../../utils/resultError/type.result.ts';
import { CreateUserDto } from '../../dto/user/createUser.dto.ts';
import { UserService } from '../user.service.ts';
import {
  mockAllUserArray,
  mockCreatedUser,
  mockCreateUserFunction,
  mockDeleteUserFunction,
  mockFindAllFunction,
  mockFindOneUserFunction,
  mockResultAllUser,
  mockResultUpdateUser,
  mockSaveUserFunction,
  mockToDataRecord,
  mockUpdateUserFunction,
  udpateUserMethod,
} from './__mock__/user/response.user.ts';

describe('UserService', () => {
  let userService: UserService;
  beforeEach(() => {
    userService = new UserService();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should create a user', async () => {
    UserRepository.create = mockCreateUserFunction;
    UserRepository.save = mockSaveUserFunction;
    const response: User = await userService.create(mockCreatedUser);

    expect(response.password).toMatch(
      /^\$2[ayb]\$([0-9]{2})\$(?:[./A-Za-z0-9]{22})[./A-Za-z0-9]{31}$/,
    );
    expect(UserRepository.create).toHaveBeenCalledTimes(1);
    expect(UserRepository.save).toHaveBeenCalledTimes(1);
    expect(response).toMatchObject({
      id: expect.any(Number),
      name: expect.any(String),
      email: expect.any(String),
      password: expect.any(String),
      idRole: expect.any(Number),
    });
  });

  it('should findAll users', async () => {
    UserRepository.find= mockFindAllFunction;
    const response:Result<CreateUserDto | any> = await userService.findAllUsers();

    expect(UserRepository.find).toHaveBeenCalledWith();
    await expect(UserRepository.find()).resolves.toEqual([
        {...mockCreatedUser}
    ]);
    expect(response).toEqual(mockResultAllUser);
  });

  it('should return one user',async ()=>{
    UserRepository.findOneBy = mockFindOneUserFunction;
    const response:Result<User>=await userService.findOneUser(1);
    
    expect(UserRepository.findOneBy).toHaveBeenCalledWith({id:1});
    await expect(UserRepository.findOneBy({id:1})).resolves.toEqual(mockCreatedUser);
  });


  it('should return udpdate user ',async ()=>{

    UserRepository.update = mockUpdateUserFunction;
    const response:Result<boolean>=await userService.updateUser(1,mockToDataRecord);
    
    expect(UserRepository.update).toHaveBeenCalledWith(1,mockToDataRecord);
    await expect(UserRepository.update(1,mockToDataRecord)).resolves.toEqual(true);
  });

  it('should return user deleted', async()=>{
    UserRepository.delete=mockDeleteUserFunction;

    const response:Result<boolean>=await userService.deleteUser(1);

    expect(response).toEqual(mockResultUpdateUser);

    expect(UserRepository.delete).toHaveBeenCalled();

    await expect(UserRepository.delete(1)).resolves.toEqual(true);
    
  });

});
