import { Request, Response, NextFunction } from 'express';
import ApiError from '../exceptions/ApiError.js';

export const errorHandler = (err: Error[] | ApiError, _req: Request, res: Response, _next: NextFunction) => {
  if (err instanceof ApiError) {
    return res.status(err.status).send({ message: err.message });
  }
  return res.status(200).send({ err });
};
