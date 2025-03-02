import { CreateRolesDto } from '../../../../../../application/dto/roles/createRoles.dto.ts';
import {
  ErrorResult,
  SuccessResult,
} from '../../../../../../utils/resultError/type.result.ts';
import { ManageError } from '../../../../../../application/errors/error.custom.ts';

export const mockRoleData: CreateRolesDto | any = {
  id: 1,
  name: 'admin',
};

export const mockRolesAllData: CreateRolesDto[] | any[] = [
  {
    id: 1,
    name: 'admin',
  },
];

export const mockOneRoleResult: SuccessResult<any> = {
  data: mockRoleData,
  error: null,
};

export const mockAllRolesResult: SuccessResult<any> = {
  data: mockRolesAllData,
  error: null,
};

export const mockDeleteRole: SuccessResult<boolean> = {
  data: true,
  error: null,
};

export const mockUpdateRole: SuccessResult<boolean> = {
  data: true,
  error: null,
};

export const mockErrorRole: ErrorResult = {
  data: null,
  error: new ManageError({
    type: 'NOT_FOUND',
    message: 'ROLE NOT FOUND',
  }),
};
