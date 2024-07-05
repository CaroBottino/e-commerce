import type { Meta, StoryObj } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import CWSearchBar from ".";
import { ItemsDecorator } from "../../utils/storybook/itemsProviderMock";
import { Stack } from "@mui/material";

const meta: Meta<typeof CWSearchBar> = {
  title: "CafeWeb/SearchBar",
  component: CWSearchBar,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CWSearchBar>;

export const SearchBar: Story = {
  decorators: [ItemsDecorator],
  render: () => (
    <BrowserRouter>
      <Stack sx={{ backgroundColor: "black", padding: 4 }}>
        <CWSearchBar />
      </Stack>
    </BrowserRouter>
  ),
};
