import { container } from 'tsyringe';
import { UserService } from '../../application/services/user.service.ts';
import { NextFunction, Request, Response } from 'express';
import { ManageError } from '../../application/errors/error.custom.ts';
import { Result } from 'utils/resultError/type.result.ts';
import { User } from 'domain/models/user.model.ts';

export class UserController {
  public static async create(req: Request, res: Response, next: NextFunction) {
    try {
      const userService2 = container.resolve(UserService);
      await userService2.create(req.body);
      res.json({
        message: 'melo',
      });
    } catch (err: any) {
      next(err);
    }
  }

  public static async allUsers(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    const userService2: UserService = container.resolve(UserService);
    const { data, error }: Result<User[]> = await userService2.findAllUsers();

    error ? next(error) : res.json({ data: data });
  }

  public static async getOneUser(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    const userService2: UserService = container.resolve(UserService);
    const { data, error }: Result<User> = await userService2.findOneUser(
      parseInt(req.params.idUser),
    );

    error ? next(error) : res.json({ data: data });
  }

  public static async update(req: Request, res: Response, next: NextFunction) {
    const userService2: UserService = container.resolve(UserService);
    const { data, error }: Result<boolean> = await userService2.updateUser(
      parseInt(req.params.idUser),
      req.body,
    );
    error ? next(error) : res.json({ data: data });
  }

  public static async delete(req: Request, res: Response, next: NextFunction) {
    const userService2: UserService = container.resolve(UserService);
    const { data, error }: Result<boolean> = await userService2.deleteUser(
      parseInt(req.params.idUser),
    );

    error ? next(error) : res.json({ data: data });
  }
}
