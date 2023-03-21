import bcrypt from 'bcrypt';

import { UserModel, UserAttr } from '../DataBase/models/UserModel.js';
import TokenService from './token-service.js';

type userData = Omit<UserAttr, 'user_id' | 'createdAt' | 'updatedAt'>;

class UserService {
  async registration(userData: userData) {
    const candidate = await UserModel.findOne({ where: { email: userData.email } });
    if (candidate) {
      throw new Error('Такая почта используется');
    }

    const { user_password, ...data } = userData;
    const hashPassword = await bcrypt.hash(user_password, 3);

    const newUser = await UserModel.create({
      ...data,
      user_password: hashPassword,
    });

    const { user_password: _, ...userOther } = newUser.get();

    const tokens = TokenService.generateTokens({
      ...userOther,
    });

    return {
      user: { ...userOther },
      ...tokens,
    };
  }

  async login(email: string, password: string) {
    const user = await UserModel.findOne({ where: { email } });
    if (!user) {
      throw new Error('Не существует');
    }

    const { user_password, ...userData } = user.get();

    const isActive = await bcrypt.compare(password, user_password);

    if (!isActive) {
      throw new Error('Не правильный логин или пароль');
    }

    const tokens = TokenService.generateTokens({
      ...userData,
    });

    return {
      user: { ...userData },
      ...tokens,
    };
  }
}

export default new UserService();
