import { Request, Response } from 'express';

import userService from '../services/user-service.js';

import { UserAttr } from '../DataBase/models/UserModel.js';

export type bodyUserData = Omit<UserAttr, 'user_id' | 'createdAt' | 'updatedAt'>;

class UserController {
  async registration(req: Request, res: Response) {
    const dataUser = req.body as bodyUserData;
    //КОСТЫЛЬ
    dataUser.birthday = new Date(dataUser.birthday);

    const userData = await userService.registration({ ...dataUser });

    res.cookie('refreshToken', userData?.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true });

    res.status(200).send(userData);
  }

  async login(req: Request, res: Response) {
    const { email, password } = req.body;
    const userData = await userService.login(email, password);

    res.cookie('refreshToken', userData?.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true });

    res.status(200).send(userData);
  }

  async logout(_req: Request, res: Response) {
    console.log('logout');
    res.clearCookie('refreshToken');
    res.status(200).send('User Exit');
  }
}

export default new UserController();
