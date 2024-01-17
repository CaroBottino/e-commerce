import { Box, ButtonGroup, Typography, styled } from "@mui/material";

export const CartTytle = styled(Typography)({
  fontSize: 20,
  fontWeight: 600,
  padding: 12,
});

export const CartButtonGroup = styled(ButtonGroup)({
  maxWidth: "6px",

  ".MuiButtonGroup-grouped": {
    maxHeight: "4px",
    minWidth: "4px",
    padding: "14px",
  },
});

export const TotalBox = styled(Box)({
  color: "white",
  backgroundColor: "#55B6FF",
  position: "fixed",
  width: "200%",
  height: "50px",
  bottom: "0px",
});
