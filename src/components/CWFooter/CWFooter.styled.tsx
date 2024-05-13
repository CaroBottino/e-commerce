import { Box, Typography, styled } from "@mui/material";
import { Link } from "react-router-dom";

export const StyledFooter = styled(Box)({
  backgroundColor: "#37475A",
  color: "#A451FE",
  padding: "40px",
  position: "relative",
  width: "100%",
  maxWidth: "-webkit-fill-available",
  bottom: 0,
});

export const FooterText = styled(Typography)({
  color: "#FF1857",
  fontWeight: 800,
  fontSize: "16px",
});

export const FooterLink = styled(Link)({
  color: "#ffffff",
  textDecoration: "none",
  margin: "0 10px",

  "&:hover": {
    color: "#FFD9DA",
    textShadow: "2px 2px 4px #EB638B",
  },
});
