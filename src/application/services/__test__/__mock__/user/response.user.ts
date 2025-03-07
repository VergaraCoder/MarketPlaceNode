import { DeleteResult, UpdateResult } from 'typeorm';
import { Result } from '../../../../../utils/resultError/type.result';
import { CreateUserDto } from '../../../../dto/user/createUser.dto';

export const mockToDataRecord: CreateUserDto | any = {
  email: 'juan234@gmail.com',
  idRole: 1,
  name: 'jhonatan',
  //   password: 'Diosesmitodo96/',
};

export const mockCreatedUser: typeof mockToDataRecord & { id: number } = {
  id: 1,
  ...mockToDataRecord,
  password: '$2b$10$.nkYuFZfHMxKOTVyCuM6oekAp8t3zzFTbWjDDo52N1PDoOSp1i2TS',
};

export const mockAllUserArray: CreateUserDto[] | any = [{ ...mockCreatedUser }];

export const mockResultAllUser: Result<CreateUserDto | any> = {
  data: mockAllUserArray,
  error: null,
};

export const udpateUserMethod:UpdateResult={
    generatedMaps:[],
    raw:3,
    affected:1
};

export const mockResultUpdateUser: Result<boolean> = {
    data: true,
    error: null,
  };

export const mockCreateUserFunction: jest.Mock<typeof mockCreatedUser> = jest
  .fn()
  .mockReturnValue(mockCreatedUser);

export const mockSaveUserFunction: jest.Mock<Promise<typeof mockCreatedUser>> =
  jest.fn().mockResolvedValue(mockCreatedUser);

export const mockFindAllFunction: jest.Mock<
  Promise<(typeof mockCreatedUser)[]>
> = jest.fn().mockResolvedValue([{ ...mockCreatedUser }]);

export const mockFindOneUserFunction: jest.Mock<
  Promise<typeof mockCreatedUser>
> = jest.fn().mockResolvedValue(mockCreatedUser);


export const mockUpdateUserFunction: jest.Mock<
  Promise<UpdateResult>
> = jest.fn().mockResolvedValue(true);



export const mockDeleteUserFunction: jest.Mock<
  Promise<DeleteResult>
> = jest.fn().mockResolvedValue(true);
