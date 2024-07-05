import type { Meta, StoryObj } from "@storybook/react";
import CWReportsTable from ".";
import { demoItems } from "../../utils/storybook/itemsProviderMock";
import { ICWReportsTableColumn } from "./CWReportsTable.interfaces";
import { Box, Tooltip, Typography } from "@mui/material";
import { IItem } from "../../interfaces/IItem";
import { priceAsCurrency } from "../../utils/itemHelper";
import { ProfileBadge } from "../CWProfileMenu/CWProfileMenu.styled";

const itemColumns: ICWReportsTableColumn<IItem>[] = [
  { key: "id", title: "ID" },
  { key: "name", title: "Name", sortable: true },
  { key: "seller_id", title: "Seller ID", sortable: true },
  {
    key: "desc",
    title: "Description",
    render: (_, { desc }) => (
      <Tooltip title={desc} followCursor>
        <Typography>{desc.substring(0, 50)}</Typography>
      </Tooltip>
    ),
  },
  {
    key: "price",
    title: "Price",
    sortable: true,
    render: (_, { price }) => <Typography>{priceAsCurrency(price)}</Typography>,
  },
  { key: "stock", title: "Stock", sortable: true },
  {
    key: "tags",
    title: "Tags",
    render: (_, { tags }) => (
      <Box sx={{ width: "auto", p: 2, display: "flex", justifyContent: "space-between" }}>
        {tags.map((tag, index) => (
          <ProfileBadge key={`${tag}-${index}`} badgeContent={tag} />
        ))}
      </Box>
    ),
  },
  {
    key: "categories",
    title: "Categories",
    render: (_, { categories }) => (
      <Box sx={{ width: "auto", p: 2 }}>
        {categories.map((category, index) => (
          <ProfileBadge key={`${category}-${index}`} badgeContent={category} badgeType="category" />
        ))}
      </Box>
    ),
  },
];

const meta: Meta<typeof CWReportsTable> = {
  title: "CafeWeb/ReportsTable",
  component: CWReportsTable,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CWReportsTable>;

export const ItemsReport: Story = {
  render: () => <CWReportsTable data={demoItems} columns={itemColumns} />,
};
