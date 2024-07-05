import { Meta, StoryObj } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { ThemeDecorator } from "../../utils/storybook/themeProviderMock";
import { ItemsDecorator, demoItems } from "../../utils/storybook/itemsProviderMock";
import { UserDecorator, demoUser, undefinedUser } from "../../utils/storybook/userProviderMock";
import CWNavBar from ".";

const meta: Meta<typeof CWNavBar> = {
  title: "CafeWeb/NavBar",
  component: CWNavBar,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CWNavBar>;

export const NavBar: Story = {
  decorators: [UserDecorator, ItemsDecorator, ThemeDecorator],
  parameters: {
    userOptions: {
      user: demoUser,
    },
    itemsOptions: {
      loading: true,
      items: demoItems,
    },
  },
  render: () => (
    <BrowserRouter>
      <CWNavBar />
    </BrowserRouter>
  ),
};

export const NoUserLogged: Story = {
  decorators: [UserDecorator, ItemsDecorator, ThemeDecorator],
  parameters: {
    userOptions: {
      user: undefinedUser,
    },
    itemsOptions: {
      loading: true,
      items: demoItems,
    },
  },
  render: () => (
    <BrowserRouter>
      <CWNavBar />
    </BrowserRouter>
  ),
};
