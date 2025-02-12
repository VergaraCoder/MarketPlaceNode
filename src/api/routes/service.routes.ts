import { Router} from 'express';
    import { ServiceController } from '../controllers/service.controller.ts';
    

    const routes:Router=Router();
    
    routes.post("/service", ServiceController.createService);
    routes.get("/service",ServiceController.findAllService);
    routes.get("/service/:idService",ServiceController.findOneService);
    routes.patch("/service/:idService",ServiceController.updateService);
    routes.delete("/service/:idService",ServiceController.deleteService)


    export default routes;