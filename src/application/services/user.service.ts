import { User } from '../../domain/models/user.model.ts'
import { UserRepository } from '../../domain/repositories/user.repository.ts'
import { CreateAuthDto } from '../dto/auth/createAuth.dto.ts'
import { ManageError } from '../errors/error.custom.ts'
import * as crypt from 'bcrypt'

export class UserService {
  async create(data: any): Promise<User | User[] | any> {
    try {
      const hashPassword: string = await crypt.hash(data.password, 10)
      const dataUser: User | User[] = UserRepository.create({
        ...data,
        password: hashPassword,
      })
      await UserRepository.save(dataUser)
      return dataUser
    } catch (err: any) {
      if (err.errno == 1452) {
        throw new ManageError({
          type: 'CONFLIC',
          message: 'EL ID ROLE INGRESADO NO CORRESPONSE A NINGUN ROL',
        })
      }
      else if (err.errno==1062){
        throw new ManageError({
          type:"CONFLIC",
          message:"EL EMAIL INGRESADO YA ESTA REGISTRADO"
        });
      }
    }
  }

  async findAllUsers() {
    try {
      const allUsers: User[] = await UserRepository.find()
      if (allUsers.length == 1) {
        throw new ManageError({
          type: 'NOT_FOUND',
          message: 'THERE ARE NOT USER RECORDS',
        })
      }
      return allUsers
    } catch (err: any) {
      throw ManageError.signedError(err.message)
    }
  }

  async findOneUserByEmailAndPassword(
    dataUser: CreateAuthDto,
  ): Promise<User | null> {
    const user: User | null = await UserRepository.findOneBy({
      email: dataUser.email,
    })
    if (!user) {
      return null
    }
    return (await crypt.compare(dataUser.password, user.password)) ? user : null
  }
}
