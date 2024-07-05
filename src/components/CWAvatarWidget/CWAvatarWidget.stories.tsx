import type { Meta, StoryObj } from "@storybook/react";
import CWAvatarWidget from ".";
import { IUser } from "../../interfaces/IUser";
import { UserDecorator } from "../../utils/storybook/userProviderMock";

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
    },
  },
};


