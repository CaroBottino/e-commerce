import type { Meta, StoryObj } from "@storybook/react";
import CWButton from ".";

const meta: Meta<typeof CWButton> = {
  title: "CafeWeb/Button",
  component: CWButton,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CWButton>;

export const Contained: Story = {
  args: {
    label: "my button",
    variant: "contained",
    type: "submit",
  },
};

export const Outlined: Story = {
  args: {
    label: "my button",
    variant: "outlined",
    type: "submit",
  },
};

export const Text: Story = {
  args: {
    label: "my button",
    variant: "text",
    type: "submit",
  },
};
