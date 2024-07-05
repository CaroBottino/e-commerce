import type { Meta, StoryObj } from "@storybook/react";
import CWCreateItemForm from "../CWCreateItemForm";

const meta: Meta<typeof CWCreateItemForm> = {
  title: "CafeWeb/Forms/CreateItem",
  component: CWCreateItemForm,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CWCreateItemForm>;

export const CreateItem: Story = {
  render: () => <CWCreateItemForm />,
};
