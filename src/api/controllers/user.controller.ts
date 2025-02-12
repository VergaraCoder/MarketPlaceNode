import { container } from 'tsyringe'
import { UserService } from '../../application/services/user.service.ts'
import { NextFunction, Request, Response } from 'express'

export class UserController {
  public static async create(req: Request, res: Response, next: NextFunction) {
    try {
      const userService2 = container.resolve(UserService)
      await userService2.create(req.body)
      res.json({
        message: 'melo',
      })
    } catch (err: any) {
      next(err)
    }
  }

  public static async allUsers(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const userService2: UserService = container.resolve(UserService)
      const users: any = await userService2.findAllUsers()
      res.json({ data: users })
    } catch (err: any) {
      next(err)
    }
  }
}
