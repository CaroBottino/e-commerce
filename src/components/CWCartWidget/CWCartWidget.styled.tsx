import { IconButton, styled } from "@mui/material";

export const CartButton = styled(IconButton)({
  width: "4rem",
  height: "4rem",

  ":focus": {
    outlineWidth: "0px",
  },

  ":hover": {
    color: "#EB638B",
  },
});
