import { NextFunction, Request, Response } from 'express';
import { ServiceService } from '../../application/services/service.service.ts';
import { container } from 'tsyringe';
import { Result } from 'utils/resultError/type.result.ts';
import { Service } from 'domain/models/service.model.ts';

export class ServiceController {
  public static async createService(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const serviceService: ServiceService = container.resolve(ServiceService);
      const service = await serviceService.create(req.body);
      res.json({
        message: 'Service created successfully',
        data: service,
      });
    } catch (err: any) {
      next(err);
    }
  }

  public static async findAllService(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    const serviceService: ServiceService = container.resolve(ServiceService);
    const { data, error }: Result<Service[]> = await serviceService.findAll();
    error
      ? next(error)
      : res.json({
          message: 'Service created successfully',
          data: data,
        });
  }

  public static async findOneService(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const serviceService: ServiceService = container.resolve(ServiceService);
      const service = await serviceService.findOne(
        parseInt(req.params.idService),
      );
      res.json({
        message: 'Service returned successfully',
        data: service,
      });
    } catch (err: any) {
      next(err);
    }
  }

  public static async updateService(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    const serviceService: ServiceService = container.resolve(ServiceService);
    const { data, error }: Result<Boolean> = await serviceService.update(
      parseInt(req.params.idService),
      req.body,
    );
    error
      ? next(error)
      : res.json({
          message: 'Service updated successfully',
          data: data,
        });
  }

  public static async deleteService(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    const serviceService: ServiceService = container.resolve(ServiceService);
    const { data, error }: Result<Boolean> = await serviceService.delete(
      parseInt(req.params.idService),
    );
    error
      ? next(error)
      : res.json({
          message: 'Service deleted successfully',
          data: data,
        });
  }
}
