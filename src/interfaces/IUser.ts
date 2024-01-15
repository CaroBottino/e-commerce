import { UserType } from "../enums/user.enum";

export interface IUser {
  id?: string;
  name?: string;
  surname?: string;
  email?: string;
  avatar?: string;
  password?: string;
  type: UserType;
}
