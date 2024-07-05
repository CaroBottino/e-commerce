import type { Meta, StoryObj } from "@storybook/react";
import {
  UserDecorator,
  userWithCart,
  userWithNoCart,
} from "../../utils/storybook/userProviderMock";
import CWCartWidget from ".";

const meta: Meta<typeof CWCartWidget> = {
  title: "CafeWeb/CartWidget",
  component: CWCartWidget,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CWCartWidget>;

export const CartWithItems: Story = {
  decorators: [UserDecorator],
  parameters: {
    userOptions: {
      user: userWithCart,
    },
  },
};

export const EmptyCart: Story = {
  decorators: [UserDecorator],
  parameters: {
    userOptions: {
      user: userWithNoCart,
    },
  },
};
