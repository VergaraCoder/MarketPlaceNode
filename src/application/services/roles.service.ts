import { Role } from '../../domain/models/roles.model.ts'
import { RoleRepository } from '../../domain/repositories/roles.repository.ts'
import { CreateRolesDto } from '../dto/roles/createRoles.dto.ts'

export class RolesService {
  async create(data: CreateRolesDto) {
    const roleRepo: Role = RoleRepository.create(data)
    await RoleRepository.save(roleRepo)
    return roleRepo
  }

  async findAll() {
    try {
    } catch (err: any) {}
  }

  async findOne() {
    try {
    } catch (err: any) {}
  }

  async update() {
    try {
    } catch (err: any) {}
  }

  async delete() {
    try {
    } catch (err: any) {}
  }
}
