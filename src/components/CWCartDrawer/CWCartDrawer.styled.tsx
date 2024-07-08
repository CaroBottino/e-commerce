import { Box, ButtonGroup, Grid, IconButton, Typography, styled } from "@mui/material";

export const CartTytle = styled(Typography)({
  fontFamily: "Proxima Nova",
  color: "#EB638B",
  fontSize: 20,
  fontWeight: 600,
  padding: 12,
  marginLeft: 6,
});

export const CartTytleBox = styled(Box)({
  color: "white",
  backgroundColor: "#0f1111",
  position: "fixed",
  width: "100%",
  height: "50px",
  top: "0px",
  zIndex: 1,
  borderBottom: "18px solid #232f3e",
});

export const CloseIconBtn = styled(IconButton)({
  color: "white",
});

export const CardMainGrid = styled(Grid)({
  width: "390px",
  padding: "10px",
  borderBottom: "1px solid lightgray",
});

export const CardInfoGrid = styled(Grid)({
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

export const ActionBtnStyles = {
  borderRadius: "8 0 8 0",
  border: "1px solid #AC274F !important",
  boxShadow: 0,
};

export const QuantityBtnStyles = {
  borderColor: "#AC274F !important",
  color: "#AC274F !important",
};

export const DeleteBtnStyles = {
  backgroundColor: "white",
  color: "#AC274F",
};

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
  backgroundColor: "#37475A",
  position: "fixed",
  width: "100%",
  height: "50px",
  bottom: "0px",
});
