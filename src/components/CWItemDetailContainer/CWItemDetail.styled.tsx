import { Box, Button, Typography, styled } from "@mui/material";

export const ItemImg = styled(Box)(() => ({
  width: 450,
  maxWidth: "calc(90vw - 50px)",
  maxHeight: 450,
  objectFit: "contain",
})) as typeof Box;

export const ItemTitle = styled(Typography)(() => ({
  fontWeight: 6,
  fontSize: 22,
  padding: 2,
}));

export const ItemPrice = styled(Typography)(() => ({
  padding: 2,
  fontSize: 24,
}));

export const ItemDescription = styled(Typography)(() => ({
  fontSize: 20,
  color: "gray",
}));

export const QuantityButton = styled(Button)({
  ":disabled": {
    color: "#AC274F",
    border: "1px solid #AC274F",
  },
});

export const ActionButton = styled(Button)({
  color: "white",
  backgroundColor: "#AC274F",
  borderColor: "#AC274F",

  ":hover": {
    backgroundColor: "#EB638B",
    borderColor: "#EB638B",
  },
});