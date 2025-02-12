import { NextFunction, Request, Response } from 'express'
import { RolesService } from '../../application/services/roles.service.ts'
import { container } from 'tsyringe'
import { Role } from '../../domain/models/roles.model.ts'

export class RolesController {
  public static async createRoles(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    const rolesService: RolesService = container.resolve(RolesService)
    const role: Role = await rolesService.create(req.body)
    res.json({
      message: 'create succesfully',
      data: role,
    })
  }

  public static async findAllRoles(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    const rolesService: RolesService = container.resolve(RolesService)
  }

  public static async findOneRoles(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    const rolesService: RolesService = container.resolve(RolesService)
  }

  public static async updateRoles(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    const rolesService: RolesService = container.resolve(RolesService)
  }

  public static async deleteRoles(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    const rolesService: RolesService = container.resolve(RolesService)
  }
}
