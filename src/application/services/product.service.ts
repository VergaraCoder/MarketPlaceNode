import { Product } from "../../domain/models/product.model.ts";
import { ProductRepository } from "../../domain/repositories/product.repository.ts";
import { DataProduct } from "../../utils/products/createProduct.ts";
import { DataUpdateProduct } from "../../utils/products/updateProduct.ts";
import { ManageError } from "../errors/error.custom.ts";
import {affectedCount} from '../../utils/user/types/update.user.ts';

export class ProductService {
    async createProduct(dataProduct:DataProduct){
        try{
            const dataProductCreate:Product=ProductRepository.create(dataProduct);
            await ProductRepository.save(dataProductCreate);
            return dataProductCreate;
        }catch(err:any){
            throw err;
        }
    }


    async getAllProducts():Promise<Product[]>{
        try{
            const products:Product[]=await ProductRepository.find();
            if(products.length==0){
                throw new ManageError({
                    type:"NOT_FOUND",
                    message:"THERE ARE NOT PRODUCTS"
                });
            }
            return products;
        }catch(err:any){
            throw ManageError.signedError(err.message);
        }
    }

    async getOneProductById(idProduct:number){
        try{
            const product:Product | null=await ProductRepository.findOneBy({id:idProduct});
            if(!product){
                throw new ManageError({
                    type:"NOT_FOUND",
                    message:"THIS PRODUCT DOES NOT EXIST"
                });
            }
            return product;
        }catch(err:any){
            throw ManageError.signedError(err.message);
        }
    }


    async updateProduct(idProduct:number,dataProduct:DataUpdateProduct){
        try{
            const {affected}=await ProductRepository.update(idProduct,dataProduct);
            if(affected==0){
                throw new ManageError({
                    type:"NOT_FOUND",
                    message:"THIS PRODUCT DOES NOT EXIST"
                });
            }
            return true;
        }catch(err:any){
            throw ManageError.signedError(err.message);
        }
    }

    
    async deleteProduct(idProduct:number){
        try{
            const {affected}=await ProductRepository.delete(idProduct);
            if(affected==0){
                throw new ManageError({
                    type:"NOT_FOUND",
                    message:"THIS PRODUCT DOES NOT EXIST"
                });
            }
            return true;
        }catch(err:any){
            throw ManageError.signedError(err.message);
        }
    }
}