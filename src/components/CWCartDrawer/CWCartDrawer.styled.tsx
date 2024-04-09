import { Box, ButtonGroup, Grid, Typography, styled } from "@mui/material";

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

export const CardMainGrid = styled(Grid)({
  width: "400px",
  padding: "10px",
  borderBottom: "1px solid lightgray",
});

export const CardInfoGrid = styled(Grid)({
  width: "400px",
  justifyContent: "center",
  alignItems: "center",
});

export const CartButtonGroup = styled(ButtonGroup)({
  maxWidth: "6px",

  ".MuiButtonGroup-grouped": {
    maxHeight: "4px",
    minWidth: "4px",
    padding: "14px",
  },
});

export const CartButtonGroupBox = styled(ButtonGroup)({
  marginTop: 3,
  width: "130px",
  display: "grid",
  justifyContent: "center",
});

export const CartBodyBox = styled(Box)({
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
