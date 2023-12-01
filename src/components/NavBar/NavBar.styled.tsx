import { styled } from "@mui/material";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)(({ theme }) => ({
  padding: theme.spacing(0, 2),
  color: "white",
  ":hover": {
    color: "pink",
  },
}));
