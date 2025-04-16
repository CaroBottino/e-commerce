import { Meta, StoryObj } from "@storybook/react";
import CWTabs, { CWTabsContent } from ".";

const meta: Meta<typeof CWTabs> = {
  title: "CafeWeb/Tabs",
  component: CWTabs,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CWTabs>;

const demoTabs: CWTabsContent[] = [
  {
    label: "First tab",
    content: "First tab content",
  },
  {
    label: "Second tab",
    content: "Second tab content",
  },
  {
    label: "Third tab",
    content: "Third tab content",
  },
];

export const Tabs: Story = {
  render: () => <CWTabs tabs={demoTabs} />,
};
