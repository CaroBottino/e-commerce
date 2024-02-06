import { Box, ButtonGroup, Typography, styled } from "@mui/material";

export const CartTytle = styled(Typography)({
  fontSize: 20,
  fontWeight: 600,
  padding: 12,
});

export const CartTytleBox = styled(Box)({
  color: "white",
  backgroundColor: "#A451FE",
  position: "fixed",
  width: "200%",
  height: "50px",
  top: "0px",
  zIndex: 1,
});

export const CartButtonGroup = styled(ButtonGroup)({
  maxWidth: "6px",

  ".MuiButtonGroup-grouped": {
    maxHeight: "4px",
    minWidth: "4px",
    padding: "14px",
  },
});

export const CartBodyBox = styled(Box)({
  width: "200%",
  marginTop: "60px",
  marginBottom: "50px",
});

export const TotalBox = styled(Box)({
  color: "white",
  backgroundColor: "#55B6FF",
  position: "fixed",
  width: "200%",
  height: "50px",
  bottom: "0px",
});
