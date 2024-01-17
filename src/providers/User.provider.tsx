import { ReactNode, createContext, useContext, useEffect, useMemo, useState } from "react";
import { IUser } from "../interfaces/IUser";
import { UserType } from "../enums/user.enum";
import { IItem } from "../interfaces/IItem";
import { ICartItem } from "../interfaces/ICartItem";
import usersService from "../services/users.service";

type UserContextProviderProps = {
  user: IUser;
  setUser: (user: IUser) => void;
  addToCart: (item: IItem, quentity: number) => void;
  deleteFromCart: (cartItem: ICartItem) => void;
  increaseQuantity: (cartItem: ICartItem) => void;
  decreaseQuantity: (cartItem: ICartItem) => void;
  cartTotal: number;
};

export const UserContext = createContext<UserContextProviderProps>({
  user: {
    id: undefined,
    name: undefined,
    surname: undefined,
    email: undefined,
    avatar: undefined,
    password: undefined,
    type: UserType.BUYER,
    cart: [],
  },
  setUser: () => {},
  addToCart: () => {},
  deleteFromCart: () => {},
  increaseQuantity: () => {},
  decreaseQuantity: () => {},
  cartTotal: 0,
});

// eslint-disable-next-line react-refresh/only-export-components
export const useUserContext = () => useContext(UserContext);

interface IUserProviderProps {
  children: ReactNode;
}

const UserProvider = ({ children }: IUserProviderProps) => {
  const [user, setUser] = useState<IUser>({
    id: undefined,
    name: undefined,
    surname: undefined,
    email: undefined,
    avatar: undefined,
    password: undefined,
    type: UserType.BUYER,
    cart: [],
  });

  const addToCart = (item: IItem, quantity: number) => {
    const cart = user.cart;
    const found = cart.find((cartItem) => cartItem.id === item.id);

    if (found) {
      cart.forEach((ci) => {
        if (ci.id === item.id) ci.quantity = ci.quantity + quantity;
      });
    } else {
      const newItem: ICartItem = {
        id: item.id,
        name: item.name,
        img: item.img,
        price: item.price,
        quantity: quantity,
      };

      cart.push(newItem);
    }

    setUser({ ...user, cart: cart });
    user.id && usersService.updateUser(user);
  };

  const deleteFromCart = (cartItem: ICartItem) => {
    const newCart = user.cart.filter((i) => i.id !== cartItem.id);
    setUser({ ...user, cart: newCart });
    user.id && usersService.updateUser(user);
  };

  const increaseQuantity = (cartItem: ICartItem) => {
    const newCart = user.cart;
    newCart.forEach((ci) => {
      if (ci.id === cartItem.id) ci.quantity = ci.quantity + 1;
    });
    setUser({ ...user, cart: newCart });
    user.id && usersService.updateUser(user);
  };

  const decreaseQuantity = (cartItem: ICartItem) => {
    const newCart = user.cart;
    newCart.forEach((ci) => {
      if (ci.quantity > 0 && ci.id === cartItem.id) ci.quantity = ci.quantity - 1;
    });
    setUser({ ...user, cart: newCart });
    user.id && usersService.updateUser(user);
  };

  const cartTotal = useMemo(() => {
    let total = 0;
    user.cart.forEach((ci) => (total += ci.quantity * ci.price));
    return total;
  }, [user]);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        addToCart,
        deleteFromCart,
        increaseQuantity,
        decreaseQuantity,
        cartTotal,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
