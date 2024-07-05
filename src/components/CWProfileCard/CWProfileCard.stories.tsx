import type { Meta, StoryObj } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import CWProfileCard from ".";
import { UserDecorator, adminUser, demoUser } from "../../utils/storybook/userProviderMock";

const meta: Meta<typeof CWProfileCard> = {
  title: "CafeWeb/ProfileCard",
  component: CWProfileCard,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CWProfileCard>;

export const ProfileCard: Story = {
  decorators: [UserDecorator],
  parameters: {
    userOptions: {
      user: demoUser,
    },
  },
  render: () => (
    <BrowserRouter>
      <CWProfileCard />
    </BrowserRouter>
  ),
};

export const ProfileCardWithSellingPermissions: Story = {
  decorators: [UserDecorator],
  parameters: {
    userOptions: {
      user: adminUser,
      hasSellingPermissions: () => true,
    },
  },
  render: () => (
    <BrowserRouter>
      <CWProfileCard />
    </BrowserRouter>
  ),
};
