import { AppBar, Box, Typography, styled } from "@mui/material";
import { Link } from "react-router-dom";

export const StyledAppBar = styled(AppBar)({
  backgroundColor: "#55B6FF",
});

export const AppName = styled(Typography)({
  fontFamily: "Georgia",
  fontWeight: 800,
  fontSize: 20,
  color: "#FFC019",
  textShadow: "2px 2px 4px #A451FE",

  ":hover": {
    color: "#A451FE",
    textShadow: "2px 2px 4px white",
  },
});

export const StyledLink = styled(Link)(({ theme }) => ({
  padding: theme.spacing(0, 2),
  color: "white",

  ":hover": {
    color: "#FFC019",
    textShadow: "2px 2px 4px #A451FE",
  },
}));

export const IconsBox = styled(Box)({
  justifyContent: "center",
  alignItems: "center",
});
