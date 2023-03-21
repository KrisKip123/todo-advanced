import { UserAttr } from '../DataBase/models/UserModel.js';

type ReqUserData = Omit<UserAttr, 'user_password' | 'createdAt' | 'updatedAt'>;

class UserDto {
  birthday: Date;
  country: string;
  email: string;
  first_name: string;
  last_name: string;
  user_id: number;

  constructor({ birthday, country, email, first_name, last_name, user_id }: ReqUserData) {
    this.birthday = birthday;
    this.country = country;
    this.email = email;
    this.first_name = first_name;
    this.last_name = last_name;
    this.user_id = user_id;
  }
}

export { UserDto };
