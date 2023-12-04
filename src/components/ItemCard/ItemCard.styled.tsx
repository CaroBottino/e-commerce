import { Card, styled } from "@mui/material";

export const StyledCard = styled(Card)(() => ({
  maxWidth: 345,
  height: 420,
  transition: "transform .5s, box-shadow 1s",

  ":hover": {
    transform: "scale(1.02) perspective(0px)",
    boxShadow: "0 10px 10px gray",
  },
}));
