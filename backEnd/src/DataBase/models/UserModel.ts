import { DataTypes, ModelDefined, Optional } from 'sequelize';
import { sequelize } from '../sequelize.js';

export interface UserAttr {
  user_id: number;
  first_name: string;
  last_name: string;
  email: string;
  user_password: string;
  country: string;
  birthday: Date;
  createdAt: Date;
  updatedAt: Date;
}

type UserCreationAttributes = Optional<UserAttr, 'user_id' | 'createdAt' | 'updatedAt'>;

const UserModel: ModelDefined<UserAttr, UserCreationAttributes> = sequelize.define('users', {
  user_id: {
    type: DataTypes.INTEGER,
    unique: true,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  first_name: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  last_name: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true,
  },
  user_password: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  country: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  birthday: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
});

export { UserModel };
