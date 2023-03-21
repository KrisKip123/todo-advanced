import jwt from 'jsonwebtoken';
import { UserAttr } from '../DataBase/models/UserModel.js';

type userData = Omit<UserAttr, 'user_password'>;

class TokenService {
  generateTokens(payload: userData) {
    const accessToken = jwt.sign(payload, 'secret18', { expiresIn: '30m' });
    const refreshToken = jwt.sign(payload, 'secret11', { expiresIn: '30d' });

    return {
      accessToken,
      refreshToken,
    };
  }

  validateAccessToken(token: string) {
    try {
      const userData = jwt.verify(token, 'secret18') as userData;
      return userData;
    } catch (error) {
      return null;
    }
  }

  validateRefreshToken(token: string) {
    try {
      const userData = jwt.verify(token, 'secret11') as userData;
      return userData;
    } catch (error) {
      return null;
    }
  }
}

export default new TokenService();
