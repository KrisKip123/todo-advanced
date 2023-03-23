import bcrypt from 'bcrypt';

import { UserModel, UserAttr } from '../DataBase/models/UserModel.js';
import TokenService from './token-service.js';
import ApiError from '../exceptions/ApiError.js';

type userData = Omit<UserAttr, 'user_id' | 'createdAt' | 'updatedAt'>;

class UserService {
  async registration(userData: userData) {
    const candidate = await UserModel.findOne({ where: { email: userData.email } });
    if (candidate) {
      throw ApiError.RegistrationError(`Данная почта уже используется ${userData.email}`);
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
      throw ApiError.RegistrationError('Не существует данного пользователя');
    }

    const { user_password, ...userData } = user.get();

    const isActive = await bcrypt.compare(password, user_password);

    if (!isActive) {
      throw ApiError.RegistrationError('Не правильный логин или пароль');
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
