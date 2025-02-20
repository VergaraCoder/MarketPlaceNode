import { ManageError } from "application/errors/error.custom.ts";


type ErrorResult={
    data:null;
    error:ManageError;
}


type SuccessResult<T> ={
    data:T;
    error:null;
}


export type Result<T>=SuccessResult<T> | ErrorResult;