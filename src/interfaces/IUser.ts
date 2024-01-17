import { UserType } from "../enums/user.enum";
import { ICartItem } from "./ICartItem";

export interface IUser {
  id?: string;
  name?: string;
  surname?: string;
  email?: string;
  avatar?: string;
  password?: string;
  type: UserType;
  cart: ICartItem[];
}
