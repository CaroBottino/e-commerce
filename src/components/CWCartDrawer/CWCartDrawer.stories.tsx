import type { Meta, StoryObj } from "@storybook/react";
import { UserProviderMock, userWithCart, userWithNoCart } from "../../utils/storybook/userProviderMock";
import CWCartDrawer from ".";

const UserDecorator = (Story: any, { parameters }: any) => (
  <UserProviderMock userOptions={parameters.userOptions}>
    <Story />
  </UserProviderMock>
);

const meta: Meta<typeof CWCartDrawer> = {
  title: "CafeWeb/CartDrawer",
  component: CWCartDrawer,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CWCartDrawer>;

export const EmptyCart: Story = {
  decorators: [UserDecorator],
  parameters: {
    userOptions: {
      user: userWithCart,
    },
  },
  args: {
    open: false,
  },
};

export const FullCart: Story = {
  decorators: [UserDecorator],
  parameters: {
    userOptions: {
      user: userWithNoCart,
    },
  },
  args: {
    open: false,
  },
};
