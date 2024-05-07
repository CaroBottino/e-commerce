import { UserType } from "../../enums/user.enum";
import { ICartItem } from "../../interfaces/ICartItem";
import { IItem } from "../../interfaces/IItem";

export interface ICWFormLogin {
  email: string;
  password: string;
}

export interface ICWFormSignUp {
  id?: string;
  name: string;
  surname: string;
  email: string;
  password: string;
  avatar?: string;
  type?: UserType;
  cart?: ICartItem[];
}

export interface ICWFormCreateItem extends IItem {
  allTags: string;
}
