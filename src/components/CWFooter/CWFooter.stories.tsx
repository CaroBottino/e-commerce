import type { Meta, StoryObj } from "@storybook/react";
import CWFooter from ".";
import { BrowserRouter } from "react-router-dom";

const meta: Meta<typeof CWFooter> = {
  title: "CafeWeb/Footer",
  component: CWFooter,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CWFooter>;

export const Footer: Story = {
  render: () => (
    <BrowserRouter>
      <CWFooter />
    </BrowserRouter>
  ),
};
