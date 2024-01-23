import { UserType } from "../enums/user.enum";
import { IUser } from "../interfaces/IUser";

export const userTypeLabel = (user: IUser) => {
  return user.type === UserType.BUYER
    ? "buyer"
    : user.type === UserType.SELLER
    ? "seller"
    : user.type === UserType.ADMIN
    ? "admin"
    : "not defined";
};
