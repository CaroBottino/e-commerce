import { Box, Button, Typography, styled } from "@mui/material";

export const ItemImg = styled(Box)(() => ({
  maxHeight: 450,
  maxWidth: 450,
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
    color: "#1976d2",
    border: "1px solid rgba(25, 118, 210, 0.5)",
  },
});
