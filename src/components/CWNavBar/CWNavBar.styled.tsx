import { Box, Grid, Select, Typography, styled } from "@mui/material";
import { Link } from "react-router-dom";

export const NavbarGrid = styled(Grid)({
  position: "fixed",
  zIndex: 99,
  justifyContent: "space-between",
  alignItems: "center",
  left: 0,
});

export const NavbarFirstRow = styled(Grid)({
  backgroundColor: "#0f1111",
  padding: 8,
});

export const NavbarSecondRow = styled(Grid)({
  backgroundColor: "#232f3e",
  padding: 8,
});

export const AppName = styled(Typography)({
  fontWeight: 800,
  fontSize: 20,
  color: "#FFC019",
  textShadow: "2px 2px 4px #A451FE",

  ":hover": {
    color: "#A451FE",
    textShadow: "2px 2px 4px white",
  },
});

export const StyledLink = styled(Link)({
  color: "white",

  ":hover": {
    color: "#FFC019",
    textShadow: "2px 2px 4px #A451FE",
  },
});

export const IconsBox = styled(Box)({
  justifyContent: "center",
  alignItems: "center",
});

export const StyledSelect = styled(Select)({
  lineHeight: "24px",
  fontSize: 16,
  fontWeight: 400,
  color: "white",

  ":hover": {
    color: "#FFC019",
    textShadow: "2px 2px 4px #A451FE",
  },

  ".MuiInputBase-root": {
    borderRadius: "4px",
    border: 0,
    padding: 0,
    maxHeight: "38px",
  },

  ".MuiOutlinedInput-notchedOutline": {
    border: 0,
  },

  "& .MuiSelect-select": {
    display: "flex",
    alignItems: "center",
    padding: 8,
  },
});
