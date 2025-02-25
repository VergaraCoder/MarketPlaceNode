import { NextFunction, Request, Response } from 'express';
import { ServiceService } from '../../application/services/service.service.ts';
import { container } from 'tsyringe';

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
    try {
      const serviceService: ServiceService = container.resolve(ServiceService);
      const service = await serviceService.findAll();
      res.json({
        message: 'Service created successfully',
        data: service,
      });
    } catch (err: any) {
      next(err);
    }
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
    try {
      const serviceService: ServiceService = container.resolve(ServiceService);
      const service = await serviceService.update(
        parseInt(req.params.idService),
        req.body,
      );
      res.json({
        message: 'Service updated successfully',
        data: service,
      });
    } catch (err: any) {
      next(err);
    }
  }

  public static async deleteService(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const serviceService: ServiceService = container.resolve(ServiceService);
      const service = await serviceService.delete(
        parseInt(req.params.idService),
      );
      res.json({
        message: 'Service deleted successfully',
        data: service,
      });
    } catch (err: any) {
      next(err);
    }
  }
}
