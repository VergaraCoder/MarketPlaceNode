
enum HttpStatus {
    NOT_FOUND = 404,
    CONFLIC = 409,
    OK = 200,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    BAD_REQUEST = 400,
    INTERNAL_SERVER_ERROR = 500
}


export class AppError extends Error{
    public readonly statusCode:number;
    public readonly method:string;

    constructor(message:string, statusCode:number,method:string){
        super(message);
        this.statusCode=statusCode;
        this.method=method;

        Error.captureStackTrace(this,this.constructor);
    }
}