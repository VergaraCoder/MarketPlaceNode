import { User } from '../../domain/models/user.model.ts';
import { UserRepository } from '../../domain/repositories/user.repository.ts';
import { CreateAuthDto } from '../dto/auth/createAuth.dto.ts';
import { ManageError } from '../errors/error.custom.ts';
import * as crypt from 'bcrypt';
import { Result } from '../../utils/resultError/type.result.ts';
import { CreateUserDto } from 'application/dto/user/createUser.dto.ts';
import { DeleteResult, UpdateResult } from 'typeorm';
import { dbConnection } from '../../config/db/db.config.ts';

export class UserService {
  async create(data: any): Promise<User | User[] | any> {
    try {
      const chatId:string=crypto.randomUUID();
      const hashPassword: string = await crypt.hash(data.password, 10);
      const queryCreate:string=`
        INSERT INTO users(name,email,password,idRole,chatId)
        VALUES(?,?,?,?,?)
      `;
      const {insertId}:any=await dbConnection.query(queryCreate,[data.name,data.email,hashPassword,data.idRole,chatId]);

      const queryGetUser:string=`
        SELECT * FROM users WHERE id=?
      `;
      const result:any=await dbConnection.query(queryGetUser,[insertId]);      
      return result[0];
    } catch (err: any) {
      if (err.errno == 1452) {
        throw new ManageError({
          type: 'CONFLIC',
          message: 'EL ID ROLE INGRESADO NO CORRESPONSE A NINGUN ROL',
        });
      } else if (err.errno == 1062) {
        throw new ManageError({
          type: 'CONFLIC',
          message: 'EL EMAIL INGRESADO YA ESTA REGISTRADO',
        });
      }
    }
  }

  async getUserByChatId (chatId:string){
    const query:string=`
    SELECT * FROM users WHERE chatId=?
    `;
    const data:User[]=await dbConnection.query(query,[chatId]);
    return data[0];
  }

  async findAllUsers(): Promise<Result<User[]>> {
    const allUsers: User[] = await UserRepository.find();
    if (allUsers.length == 0) {
      return {
        data: null,
        error: new ManageError({
          type: 'NOT_FOUND',
          message: 'THERE ARE NOT USERS RECORDS',
        }),
      };
    }
    return {
      data: allUsers,
      error: null,
    };
  }

  async findOneUserByEmailAndPassword(
    dataUser: CreateAuthDto,
  ): Promise<User | null> {
    const user: User | null = await UserRepository.findOneBy({
      email: dataUser.email,
    });
    if (!user) {
      return null;
    }
    return (await crypt.compare(dataUser.password, user.password))
      ? user
      : null;
  }

  async findOneUser(id: number): Promise<Result<User>> {
    const user: User | null = await UserRepository.findOneBy({ id: id });
    if (!user) {
      return {
        data: null,
        error: new ManageError({
          type: 'NOT_FOUND',
          message: 'USER NOT FOUND',
        }),
      };
    }
    return {
      data: user,
      error: null,
    };
  }

  async updateUser(
    id: number,
    dataUser: Partial<CreateUserDto>,
  ): Promise<Result<boolean>> {
    const { affected }: UpdateResult = await UserRepository.update(
      id,
      dataUser,
    );
    if (affected == 0) {
      return {
        data: null,
        error: new ManageError({
          type: 'NOT_FOUND',
          message: 'USER NOT FOUND',
        }),
      };
    }
    return {
      data: true,
      error: null,
    };
  }

  async deleteUser(id: number): Promise<Result<boolean>> {
    const { affected }: DeleteResult = await UserRepository.delete(id);
    if (affected == 0) {
      return {
        data: null,
        error: new ManageError({
          type: 'NOT_FOUND',
          message: 'USER NOT FOUND',
        }),
      };
    }
    return {
      data: true,
      error: null,
    };
  }
}
