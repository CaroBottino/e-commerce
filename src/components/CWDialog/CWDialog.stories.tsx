import type { Meta, StoryObj } from "@storybook/react";
import CWDialog from ".";
import { fn } from "@storybook/test";
import { Button, Typography } from "@mui/material";

const meta: Meta<typeof CWDialog> = {
  title: "CafeWeb/Dialog",
  component: CWDialog,
  args: { handleClose: fn() },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CWDialog>;

export const Simple: Story = {
  args: {
    open: false,
    title: "My opened dialog",
    content: "content of my dialog",
  },
};

export const WithReactContent: Story = {
  args: {
    open: false,
    title: <Typography sx={{ color: "pink", fontWeight: 600 }}>My opened dialog</Typography>,
    content: <Typography sx={{ color: "lightgray" }}>Content of my dialog</Typography>,
  },
};

export const WithActions: Story = {
  args: {
    open: false,
    title: <Typography sx={{ fontWeight: 600 }}>My opened dialog</Typography>,
    content: <Typography sx={{ color: "lightgray" }}>Content of my dialog</Typography>,
    actions: (
      <>
        <Button autoFocus onClick={() => {}}>
          Cancel
        </Button>
        <Button variant="contained" onClick={() => {}}>
          Continue
        </Button>
      </>
    ),
  },
};
