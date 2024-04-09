import { Box, Typography, styled } from "@mui/material";
import { Link } from "react-router-dom";

export const StyledFooter = styled(Box)({
  backgroundColor: "#55b6ff",
  color: "#A451FE",
  padding: "40px",
  position: "absolute",
  width: "94%",
  zIndex: 1100,
  bottom: 0,
});

export const FooterText = styled(Typography)({
  fontFamily: "Georgia",
  fontWeight: 800,
  fontSize: "16px",
});

export const FooterLink = styled(Link)({
  color: "#ffffff",
  textDecoration: "none",
  margin: "0 10px",
  "&:hover": {
    color: "#ffc019",
  },
});
