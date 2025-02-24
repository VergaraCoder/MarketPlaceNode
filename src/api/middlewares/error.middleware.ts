import { NextFunction, Request, Response } from 'express';

enum HttpStatus {
  NOT_FOUND = 404,
  CONFLIC = 409,
  OK = 200,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  BAD_REQUEST = 400,
  INTERNAL_SERVER_ERROR = 500,
}

const key: string[] = Object.keys(HttpStatus);

export const ErrorMiddleware = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const ErrorComplete = err.cause ? false : true;
  console.log(ErrorComplete);

  if (ErrorComplete) {
    let status: number = parseInt(HttpStatus[err.message.split(' :: ')[0]]);
    const message: string = err.message.split(' :: ')[1];

    res.status(!isNaN(status) ? status : 500).json({
      status: isNaN(status) ? status : 500,
      timeStamp: new Date(),
      message: message ? message : 'Internal Server Error',
    });
  } else if (!ErrorComplete) {
    let status: number = parseInt(HttpStatus[err.cause.split(' :: ')[0]]);
    const message: string = err.cause.split(' :: ')[1];

    res.status(status).json({
      status: status,
      timeStamp: new Date(),
      message: message,
    });
  } else {
    res.status(500).json({
      status: 500,
      timeStamp: new Date(),
      message: 'Internal Server Error',
    });
  }
};
