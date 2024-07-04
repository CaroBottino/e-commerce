import type { Meta, StoryObj } from "@storybook/react";
import CWCardContainer from ".";
import { Typography } from "@mui/material";
import CWItemDetailSkeleton from "../CWSkeletons/CWItemDetailSkeleton";

const meta: Meta<typeof CWCardContainer> = {
  title: "CafeWeb/CardContainer",
  component: CWCardContainer,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CWCardContainer>;

export const Empty: Story = {};

export const WithText = {
  args: {
    children: (
      <Typography sx={{ fontFamily: "Roboto", fontWeight: 600 }}>
        This is a Typography text inside my card container
      </Typography>
    ),
  },
};

export const WithSkeleton = {
  args: {
    children: <CWItemDetailSkeleton />,
  },
};
