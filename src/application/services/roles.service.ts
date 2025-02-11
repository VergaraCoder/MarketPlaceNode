import { Role } from "../../domain/models/roles.model";
import { RoleRepository } from "../../domain/repositories/roles.repository";
import { CreateRolesDto } from "../dto/roles/createRoles.dto";

export class RolesService {
        async create(data:CreateRolesDto) {
            try{
                const roleRepo:Role= RoleRepository.create(data);
            }catch(err:any){
            }
        }
    
        async findAll() {
             try{
            }catch(err:any){
            }
        }
    
    
        async findOne() {
             try{
            }catch(err:any){
            }
        }
    
    
        async update() {
             try{
            }catch(err:any){
            }
        }
    
        async delete() {
             try{
            }catch(err:any){
            }
        }
    
    }