import express,{Express} from 'express';
import router from './api/router.ts';
import { dbConnection } from "./config/db/db.config.ts";
import {ErrorMiddleware} from './api/middlewares/error.middleware.ts';


const server:Express=express();

const StartServer = async () => {
    try{
        await dbConnection.initialize();
        
        server.use(express.json());
        server.use(express.urlencoded({extended:false}));
        server.use(router);
        server.use(ErrorMiddleware);
        server.listen(3000,()=>{
            console.log("Server is running on port 3000");
        });

    }catch(err:any){
        console.log(err);
        
    }
}


StartServer();
