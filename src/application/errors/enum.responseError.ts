import { Request, Response } from "express";

enum HttpStatus {
    NOT_FOUND = 404,
    CONFLIC = 409,
    OK = 200,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    BAD_REQUEST = 400,
    INTERNAL_SERVER_ERROR = 500
}


export class ReponseHttp{
    public static OK(response:Response,data:any, method:string){
        return response.status(HttpStatus.OK).json({
            status: HttpStatus.OK,
            timeStamp: new Date(),
            method:method,
            data:data
        });
    }

    public static NOT_FOUND(response:Response,message:string, method:string){
        return response.status(HttpStatus.NOT_FOUND).json({
            status: HttpStatus.NOT_FOUND,
            timeStamp: new Date(),
            method:method,
            message:message
        });
    }

    public static BAD_REQUEST(response:Response,message:string, method:string){
        return response.status(HttpStatus.BAD_REQUEST).json({
            status: HttpStatus.NOT_FOUND,
            timeStamp: new Date(),
            method:method,
            message:message
        });
    }

    public static CONFLIC(response:Response,message:string, method:string){
        return response.status(HttpStatus.CONFLIC).json({
            status: HttpStatus.NOT_FOUND,
            timeStamp: new Date(),
            method:method,
            message:message
        });
    }

    public static FORBIDDEN(response:Response,message:string, method:string){
        return response.status(HttpStatus.FORBIDDEN).json({
            status: HttpStatus.NOT_FOUND,
            timeStamp: new Date(),
            method:method,
            message:message
        });
    }

    public static UNAUTHORIZED(response:Response,message:string, method:string){
        return response.status(HttpStatus.UNAUTHORIZED).json({
            status: HttpStatus.NOT_FOUND,
            timeStamp: new Date(),
            method:method,
            message:message
        });
    }
}