import { ReactElement } from "react";
import { IUser } from "../../interfaces/IUser";
import { UserContext, UserContextProviderProps } from "../../providers/User.provider";
import { UserType } from "../../enums/user.enum";

export const demoUser: IUser = {
  id: "1",
  name: "Jane",
  surname: "Doe",
  email: "jane.doe@mail.com",
  avatar:
    "https://static.vecteezy.com/system/resources/previews/002/002/257/original/beautiful-woman-avatar-character-icon-free-vector.jpg",
  password: "1234pass",
  type: UserType.SELLER,
  cart: [],
};

export const adminUser: IUser = {
  id: "1",
  name: "Jane",
  surname: "Doe",
  email: "jane.doe@mail.com",
  avatar:
    "https://static.vecteezy.com/system/resources/previews/002/002/257/original/beautiful-woman-avatar-character-icon-free-vector.jpg",
  password: "1234pass",
  type: UserType.ADMIN,
  cart: [],
};

export const buyerUser: IUser = {
  id: "1",
  name: "Jane",
  surname: "Doe",
  email: "jane.doe@mail.com",
  avatar:
    "https://static.vecteezy.com/system/resources/previews/002/002/257/original/beautiful-woman-avatar-character-icon-free-vector.jpg",
  password: "1234pass",
  type: UserType.BUYER,
  cart: [],
};

export const undefinedUser: IUser = {
  id: undefined,
  name: undefined,
  surname: undefined,
  email: undefined,
  avatar: undefined,
  password: undefined,
  type: UserType.BUYER,
  cart: [],
};

export const userWithCart: IUser = {
  id: "1",
  name: "Jane",
  surname: "Doe",
  email: "jane.doe@mail.com",
  password: "1234pass",
  type: 2,
  cart: [
    {
      id: "25",
      name: "Furby Coral, 15 accesorios de moda, juguetes de peluche interactivos para niñas y niños de 6 años y más, animatronic activado por voz",
      img: "https://m.media-amazon.com/images/I/91vwOcZcAeL._AC_SL1500_.jpg",
      price: 119650,
      quantity: 4,
    },
    {
      id: "1",
      name: "Muñeca Barbie Fashionistas Closet De Lujo Gbk12 Mattel",
      img: "https://http2.mlstatic.com/D_NQ_NP_2X_819420-MLA51075183518_082022-F.webp",
      price: 49676,
      quantity: 8,
    },
    {
      id: "3",
      name: "Cafetera Piccolo Xs Manual Roja Nescafé Dolce Gusto",
      img: "https://http2.mlstatic.com/D_NQ_NP_2X_772836-MLA46885301641_072021-F.webp",
      price: 47952,
      quantity: 4,
    },
    {
      id: "4",
      name: "Taladro Atornillador Percutor + 2 Baterias Gp By Lusqtoff",
      img: "https://http2.mlstatic.com/D_NQ_NP_2X_656678-MLA69951087361_062023-F.webp",
      price: 31795.69,
      quantity: 6,
    },
    {
      id: "43",
      name: "Mate Imperial (Calabaza) con Cuero - Virola Alpaca Cincelada.",
      img: "https://acdn.mitiendanube.com/stores/001/104/123/products/1x1-imperial-cueroliso-virolaapliques-50888c50b785b4a69f16964523815846-1024-1024.png",
      price: 59900,
      quantity: 2,
    },
  ],
};

export const userWithNoCart: IUser = {
  id: "1",
  name: "Jane",
  surname: "Doe",
  email: "jane.doe@mail.com",
  avatar:
    "https://static.vecteezy.com/system/resources/previews/002/002/257/original/beautiful-woman-avatar-character-icon-free-vector.jpg",
  password: "1234pass",
  type: 2,
  cart: [],
};

type UserProviderMockProps = {
  userOptions: UserContextProviderProps;
  children: ReactElement;
};

export const UserProviderMock = ({ userOptions, children }: UserProviderMockProps) => {
  const user = userOptions?.user ?? undefinedUser;
  const loginUser = userOptions?.loginUser ? userOptions?.loginUser : () => {};
  const logoutUser = userOptions?.logoutUser ? userOptions?.logoutUser : () => {};
  const addToCart = userOptions?.addToCart ? userOptions?.addToCart : () => {};
  const deleteFromCart = userOptions?.deleteFromCart ? userOptions?.deleteFromCart : () => {};
  const increaseQuantity = userOptions?.increaseQuantity ? userOptions?.increaseQuantity : () => {};
  const decreaseQuantity = userOptions?.decreaseQuantity ? userOptions?.decreaseQuantity : () => {};
  const cartTotal = userOptions?.cartTotal ?? 0;
  const hasSellingPermissions = userOptions?.hasSellingPermissions
    ? userOptions?.hasSellingPermissions
    : () => false;

  return (
    <UserContext.Provider
      value={{
        user,
        loginUser,
        logoutUser,
        addToCart,
        deleteFromCart,
        increaseQuantity,
        decreaseQuantity,
        cartTotal,
        hasSellingPermissions,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const UserDecorator = (Story: any, { parameters }: any) => (
  <UserProviderMock userOptions={parameters.userOptions}>
    <Story />
  </UserProviderMock>
);
