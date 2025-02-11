import { container } from "tsyringe";
    import { RolesService } from "../services/roles.service.ts";
    

    container.registerSingleton<RolesService>(RolesService);