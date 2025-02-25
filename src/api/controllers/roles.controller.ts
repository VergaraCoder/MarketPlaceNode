import { NextFunction, Request, Response } from 'express';
import { RolesService } from '../../application/services/roles.service.ts';
import { container } from 'tsyringe';
import { Role } from '../../domain/models/roles.model.ts';
import { Result } from 'utils/resultError/type.result.ts';

export class RolesController {
  public static async createRoles(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    const rolesService: RolesService = container.resolve(RolesService);
    const role: Role = await rolesService.create(req.body);
    res.json({
      message: 'create succesfully',
      data: role,
    });
  }

  public static async findAllRoles(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    const rolesService: RolesService = container.resolve(RolesService);
    const { data, error }: Result<Role[]> = await rolesService.findAll();
    error ? next(error) : res.json({ message: 'find all succesfully', data });
  }

  public static async findOneRoles(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    const rolesService: RolesService = container.resolve(RolesService);
    const { data, error }: Result<Role> = await rolesService.findOne(
      parseInt(req.params.id),
    );
    error ? next(error) : res.json({ message: 'find one succesfully', data });
  }

  public static async updateRoles(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    const rolesService: RolesService = container.resolve(RolesService);
    const { data, error }: Result<boolean> = await rolesService.update(
      parseInt(req.params.idRole),
      req.body,
    );
    error ? next(error) : res.json({ message: 'update succesfully', data });
  }

  public static async deleteRoles(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    const rolesService: RolesService = container.resolve(RolesService);
    const { data, error }: Result<boolean> = await rolesService.delete(
      parseInt(req.params.idRole),
    );
    error ? next(error) : res.json({ message: 'delete succesfully', data });
  }
}
