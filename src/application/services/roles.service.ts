import { Result } from 'utils/resultError/type.result.ts'
import { Role } from '../../domain/models/roles.model.ts'
import { RoleRepository } from '../../domain/repositories/roles.repository.ts'
import { CreateRolesDto } from '../dto/roles/createRoles.dto.ts'
import { ManageError } from 'application/errors/error.custom.ts'
import { DeleteResult, UpdateResult } from 'typeorm'

export class RolesService {
  async create(data: CreateRolesDto) {
    const roleRepo: Role = RoleRepository.create(data)
    await RoleRepository.save(roleRepo)
    return roleRepo
  }

  async findAll(): Promise<Result<Role[]>> {
    const roles: Role[] = await RoleRepository.find()
    if (roles.length == 0) {
      return {
        data: null,
        error: new ManageError({
          type: 'NOT_FOUND',
          message: 'THERE ARE NOT ROLES RECORDS',
        }),
      }
    }
    return {
      data: roles,
      error: null,
    }
  }

  

  async findOne(id:number):Promise<Result<Role>> {
    const role: Role | null = await RoleRepository.findOneBy({id})
    if (!role) {
      return {
        data: null,
        error: new ManageError({
          type: 'NOT_FOUND',
          message: 'THERE ARE NOT ROLES RECORDS',
        }),
      }
    }
    return {
      data: role,
      error: null,
    }
  }

  async update(id:number, updateData:Partial<CreateRolesDto>):Promise<Result<boolean>> {
    const {affected}: UpdateResult = await RoleRepository.update(id,updateData)
    if (affected==0) {
      return {
        data: null,
        error: new ManageError({
          type: 'NOT_FOUND',
          message: 'ROLE NOT FOUND',
        }),
      }
    }
    return {
      data: true,
      error: null,
    }
  }

  async delete(id:number):Promise<Result<boolean>> {
    const {affected}: DeleteResult = await RoleRepository.delete(id)
    if (affected==0) {
      return {
        data: null,
        error: new ManageError({
          type: 'NOT_FOUND',
          message: 'ROLE NOT FOUND',
        }),
      }
    }
    return {
      data: true,
      error: null,
    }
  }
}
