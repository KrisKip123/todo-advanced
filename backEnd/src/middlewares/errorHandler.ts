import { Request, Response } from 'express';
import ApiError from '../exceptions/ApiError.js';

export const errorHandler = (err: Error[] | ApiError, _req: Request, res: Response) => {
  console.log(1);

  if (err instanceof ApiError) {
    return res.status(err.status).json({ message: err.message });
  }
  return res.status(500).send('{}');
};
