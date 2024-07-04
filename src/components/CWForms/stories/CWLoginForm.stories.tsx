import type { Meta, StoryObj } from "@storybook/react";
import CWLoginForm from "../CWLoginForm";
import { BrowserRouter } from "react-router-dom";

const meta: Meta<typeof CWLoginForm> = {
  title: "CafeWeb/Forms/Login",
  component: CWLoginForm,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CWLoginForm>;

export const LoginForm: Story = {
  render: () => (
    <BrowserRouter>
      <CWLoginForm changeMode={() => {}} />,
    </BrowserRouter>
  ),
};
