import { NextFunction, Request, Response } from "express";
import { AppError } from "../../application/errors/error.handlerGlobal.ts";
import {ReponseHttp} from '../../application/errors/enum.responseError.ts';
import { ManageError } from "../../application/errors/error.custom.ts";


enum HttpStatus {
    NOT_FOUND = 404,
    CONFLIC = 409,
    OK = 200,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    BAD_REQUEST = 400,
    INTERNAL_SERVER_ERROR = 500
}



export const ErrorMiddleware = (
    err: any,
    req: Request,
    res: Response,
    next: NextFunction) => {
        
    if (err instanceof AppError) {
         res.status(err.statusCode).json({
            status: err.statusCode,
            timeStamp:new Date(),
            method:err.method,
            message: err.message,
        });
    }
    else if(err.cause){
        
        let status:any=HttpStatus[err.message];
        const message=err.cause.split(" :: ")[1];
        
        res.status(status).json({
            status: status,
            timeStamp:new Date(),
            message:message
        });
    }
    console.log(err);
    
     res.status(500).json({
        status: 500,
        timeStamp:new Date(),
        method: err.method,
        message: 'Internal Server Error',
    });
}