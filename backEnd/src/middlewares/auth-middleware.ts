import { NextFunction, Request, Response } from 'express';

export const authMiddleware = (req: Request, _res: Response, next: NextFunction) => {
  const headers = req.headers.authorization;

  if (!headers) {
    throw new Error('Отсутствует токен');
  }

  const tokenAccess = headers.split(' ').at(-1);

  console.log(tokenAccess);
  next();
};
