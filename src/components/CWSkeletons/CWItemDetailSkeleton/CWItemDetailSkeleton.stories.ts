import type { Meta, StoryObj } from "@storybook/react";
import CWItemDetailSkeleton from ".";

const meta: Meta<typeof CWItemDetailSkeleton> = {
  title: "CafeWeb/Skeleton/ItemDetail",
  component: CWItemDetailSkeleton,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ItemDetail: Story = {};
