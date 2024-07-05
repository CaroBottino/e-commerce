import type { Meta, StoryObj } from "@storybook/react";
import CWItemDetailSkeleton from ".";
import CWItemsListSkeleton from ".";

const meta: Meta<typeof CWItemDetailSkeleton> = {
  title: "CafeWeb/Skeleton/ItemsList",
  component: CWItemsListSkeleton,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ItemsList: Story = {};
