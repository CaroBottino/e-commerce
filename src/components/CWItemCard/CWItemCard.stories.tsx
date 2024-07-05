import type { Meta, StoryObj } from "@storybook/react";
import CWItemCard from ".";
import { BrowserRouter } from "react-router-dom";
import { demoItem } from "../../utils/storybook/itemsProviderMock";

const meta: Meta<typeof CWItemCard> = {
  title: "CafeWeb/ItemCard",
  component: CWItemCard,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CWItemCard>;

export const ItemCard: Story = {
  render: () => (
    <BrowserRouter>
      <CWItemCard item={demoItem} />
    </BrowserRouter>
  ),
};
