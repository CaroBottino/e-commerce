import type { Meta, StoryObj } from "@storybook/react";
import CWAvatarWidget from ".";
import { UserContext, UserContextProviderProps } from "../../providers/User.provider";
import { IUser } from "../../interfaces/IUser";
import { ReactElement } from "react";

const userNoAvatar: IUser = {
  id: "1",
  name: "Jane",
  surname: "Doe",
  email: "jane.doe@mail.com",
  password: "1234pass",
  type: 2,
  cart: [],
};

const userWithAvatar: IUser = {
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

const UserProviderMock = ({ userOptions, children }: UserProviderMockProps) => {
  const user = userOptions?.user;
  const loginUser = userOptions?.loginUser;
  const logoutUser = userOptions?.logoutUser;
  const addToCart = userOptions?.addToCart;
  const deleteFromCart = userOptions?.deleteFromCart;
  const increaseQuantity = userOptions?.increaseQuantity;
  const decreaseQuantity = userOptions?.decreaseQuantity;
  const cartTotal = userOptions?.cartTotal;
  const hasSellingPermissions = userOptions?.hasSellingPermissions;

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

const UserDecorator = (Story: any, { parameters }: any) => (
  <UserProviderMock userOptions={parameters.userOptions}>
    <Story />
  </UserProviderMock>
);

const meta: Meta<typeof CWAvatarWidget> = {
  title: "CafeWeb/AvatarWidget",
  component: CWAvatarWidget,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CWAvatarWidget>;

export const UserWithAvatar: Story = {
  decorators: [UserDecorator],
  parameters: {
    userOptions: {
      user: userWithAvatar,
      loginUser: () => {},
      logoutUser: () => {},
      addToCart: () => {},
      deleteFromCart: () => {},
      increaseQuantity: () => {},
      decreaseQuantity: () => {},
      cartTotal: 0,
      hasSellingPermissions: () => false,
    },
  },
  render: () => {
    return <CWAvatarWidget />;
  },
};

export const UserWithNoAvatar: Story = {
  decorators: [UserDecorator],
  parameters: {
    userOptions: {
      user: userNoAvatar,
      loginUser: () => {},
      logoutUser: () => {},
      addToCart: () => {},
      deleteFromCart: () => {},
      increaseQuantity: () => {},
      decreaseQuantity: () => {},
      cartTotal: 0,
      hasSellingPermissions: () => false,
    },
  },
};


