import { IItem } from "../../interfaces/IItem";

export interface ICWFormLogin {
  email: string;
  password: string;
}

export interface ICWFormSignUp {
  name: string;
  surname: string;
  email: string;
  password: string;
  avatar?: string;
}

export interface ICWFormCreateItem extends IItem {
  allTags: string;
}
