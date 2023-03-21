export interface UserAttr {
  user_id: string;
  first_name: string;
  last_name: string;
  email: string;
  user_password: string;
  country: string;
  birthday: Date;
  createdAt: Date;
  updatedAt: Date;
}

export type UserBodyResponse = Omit<UserAttr, 'user_id' | 'createdAt' | 'updatedAt'>;
