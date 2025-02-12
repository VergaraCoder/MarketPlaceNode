import { NextFunction, Request, Response } from "express";
    import { ServiceService } from "../../application/services/service.service.ts";
    import { container } from "tsyringe";
    
    
    export class ServiceController {
        public static async createService(req: Request, res: Response, next: NextFunction) {
            const serviceService:ServiceService=container.resolve(ServiceService);
        }
    
        public static async findAllService(req: Request, res: Response, next: NextFunction) {
            const serviceService:ServiceService=container.resolve(ServiceService);
        }
    
    
        public static async findOneService(req: Request, res: Response, next: NextFunction) {
            const serviceService:ServiceService=container.resolve(ServiceService);
        }
    
    
        public static async updateService(req: Request, res: Response, next: NextFunction) {
            const serviceService:ServiceService=container.resolve(ServiceService);
        }
    
        public static async deleteService(req: Request, res: Response, next: NextFunction) {
            const serviceService:ServiceService=container.resolve(ServiceService);
        }
    
    
    }