import { Box, Button, Chip, Grid, Typography, styled } from "@mui/material";

export const ItemImg = styled(Box)(() => ({
  width: 450,
  maxWidth: "calc(90vw - 50px)",
  maxHeight: 450,
  objectFit: "contain",
})) as typeof Box;

export const ItemTitle = styled(Typography)({
  fontWeight: 600,
  fontSize: 22,
  marginBottom: "8px",
  lineHeight: "1.2",
});

export const ItemSubtitle = styled(Typography)({
  fontWeight: 400,
  fontSize: 24,
  marginBottom: "8px",
});

export const ItemSmallInfo = styled(Typography)({
  fontWeight: 600,
  fontSize: 16,
  marginRight: "8px",
});

export const ItemXSmallInfo = styled(Typography)({
  fontWeight: 400,
  fontSize: 14,
  color: "rgba(0,0,0,.55)",
  marginRight: "8px",
});

export const ItemPrice = styled(Typography)({
  fontWeight: 300,
  lineHeight: 1,
  fontSize: "36px",
});

export const ItemDiscount = styled(Typography)({
  color: "#00a650",
  fontWeight: 400,
  fontSize: "18px",
});

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
  textTransform: "none",

  ":hover": {
    backgroundColor: "#EB638B",
    borderColor: "#EB638B",
  },
});

export const ResumeGrid = styled(Grid)({
  borderRadius: "8px",
  border: "1px solid lightgrey",
  padding: "16px",
  textAlign: "left",
});

export const StyledChip = styled(Chip)({
  color: "#FFFF",
  backgroundColor: "#f73",
});
