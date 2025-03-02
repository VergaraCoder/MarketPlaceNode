import { ManageError } from 'application/errors/error.custom.ts';

export type ErrorResult = {
  data: null;
  error: ManageError;
};

export type SuccessResult<T> = {
  data: T;
  error: null;
};

export type Result<T> = SuccessResult<T> | ErrorResult;
