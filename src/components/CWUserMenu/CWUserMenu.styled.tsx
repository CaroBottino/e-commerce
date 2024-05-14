import { styled } from "@mui/material";
import { Link } from "react-router-dom";

export const StyledLoginLink = styled(Link)(({ theme }) => ({
  padding: theme.spacing(0, 2),
  marginTop: "7px",
  color: "white",

  ":hover": {
    color: "#EB638B",
    textShadow: "1px 1px 2px #D29BFD",
  },
}));
