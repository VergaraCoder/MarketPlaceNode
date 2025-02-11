import { dbConnection } from '../../config/db/db.config.ts'
import { User } from '../../domain/models/user.model.ts'
import { UserRepository } from '../../domain/repositories/user.repository.ts'
import { ReponseHttp } from '../errors/enum.responseError.ts'
import { ManageError } from '../errors/error.custom.ts'

export class UserService {
  async create(data: any): Promise<User | User[]> {
    try {
      const dataUser: User | User[] = UserRepository.create(data)
      await UserRepository.save(dataUser)
      return dataUser
    } catch (err: any) {
      throw err
    }
  }

  async findAllUsers() {
    try {
      const allUsers: User[] = await UserRepository.find()
      if (allUsers.length == 1) {
        throw new ManageError({
          type: 'NOT_FOUND',
          message: 'NO HAY USUARIOS REGISTRADOS',
        })
      }
      return allUsers
    } catch (err: any) {
      if (err instanceof ManageError) {
        throw ManageError.signedError(err.message)
      }
    }
  }
}
