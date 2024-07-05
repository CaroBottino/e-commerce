import type { Meta, StoryObj } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import {
  UserDecorator,
  adminUser,
  buyerUser,
  demoUser,
} from "../../utils/storybook/userProviderMock";
import CWProfileMenu from ".";

const meta: Meta<typeof CWProfileMenu> = {
  title: "CafeWeb/ProfileMenu",
  component: CWProfileMenu,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CWProfileMenu>;

export const AdminMenu: Story = {
  decorators: [UserDecorator],
  parameters: {
    userOptions: {
      user: adminUser,
      hasSellingPermissions: () => true,
    },
  },
  render: () => (
    <BrowserRouter>
      <CWProfileMenu />
    </BrowserRouter>
  ),
};

export const SellerMenu: Story = {
  decorators: [UserDecorator],
  parameters: {
    userOptions: {
      user: demoUser,
      hasSellingPermissions: () => true,
    },
  },
  render: () => (
    <BrowserRouter>
      <CWProfileMenu />
    </BrowserRouter>
  ),
};

export const BuyerMenu: Story = {
  decorators: [UserDecorator],
  parameters: {
    userOptions: {
      user: buyerUser,
    },
  },
  render: () => (
    <BrowserRouter>
      <CWProfileMenu />
    </BrowserRouter>
  ),
};
