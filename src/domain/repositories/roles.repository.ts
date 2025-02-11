import { Repository } from "typeorm";
import { Product } from "../models/product.model.ts";
import { dbConnection } from "../../config/db/db.config.ts";
import { Role } from "../models/roles.model.ts";


export const RoleRepository:Repository<Role>=dbConnection.getRepository("roles");