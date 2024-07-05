import type { Meta, StoryObj } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import CWItemDetailContainer from ".";
import { ItemsDecorator, demoItem } from "../../utils/storybook/itemsProviderMock";

const meta: Meta<typeof CWItemDetailContainer> = {
  title: "CafeWeb/ItemDetailContainer",
  component: CWItemDetailContainer,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CWItemDetailContainer>;

export const ItemCard: Story = {
  decorators: [ItemsDecorator],
  parameters: {
    itemsOptions: {
      loading: false,
      item: demoItem,
    },
  },
  render: () => (
    <BrowserRouter>
      <CWItemDetailContainer />
    </BrowserRouter>
  ),
};

export const LoadingItemCard: Story = {
  decorators: [ItemsDecorator],
  parameters: {
    itemsOptions: {
      loading: true,
      item: undefined,
    },
  },
  render: () => (
    <BrowserRouter>
      <CWItemDetailContainer />
    </BrowserRouter>
  ),
};

export const ItemCardNotFound: Story = {
  decorators: [ItemsDecorator],
  render: () => (
    <BrowserRouter>
      <CWItemDetailContainer />
    </BrowserRouter>
  ),
};
