import type { Meta, StoryObj } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { Stack } from "@mui/material";
import CWUserMenu from ".";
import { UserDecorator, demoUser, undefinedUser } from "../../utils/storybook/userProviderMock";

const meta: Meta<typeof CWUserMenu> = {
  title: "CafeWeb/UserMenu",
  component: CWUserMenu,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CWUserMenu>;

export const UserLogued: Story = {
  decorators: [UserDecorator],
  parameters: {
    userOptions: {
      user: demoUser,
    },
  },
  render: () => (
    <BrowserRouter>
      <Stack sx={{ backgroundColor: "black", padding: 4 }}>
        <CWUserMenu handleMobileMenuClose={() => {}} />
      </Stack>
    </BrowserRouter>
  ),
};

export const NoUserLogued: Story = {
  decorators: [UserDecorator],
  parameters: {
    userOptions: {
      user: undefinedUser,
    },
  },
  render: () => (
    <BrowserRouter>
      <Stack sx={{ backgroundColor: "black", padding: 4 }}>
        <CWUserMenu handleMobileMenuClose={() => {}} />
      </Stack>
    </BrowserRouter>
  ),
};
