import { Box, Grid, Typography, styled } from "@mui/material";
import { Link } from "react-router-dom";

export const StyledFooter = styled(Box)({
  color: "#A451FE",
  position: "relative",
  width: "100%",
  maxWidth: "-webkit-fill-available",
  bottom: 0,
});

export const FooterRow = styled(Grid)({
  padding: "40px",
  justifyContent: "center",
  justifyItems: "center",
});

export const FooterItem = styled(Grid)({
  display: "grid",
  textAlign: "center",
  justifyContent: "center",
});

export const FooterImage = ({ imgName }: { imgName: string }) => (
  <Box
    component="img"
    sx={{
      padding: "10px",
    }}
    src={`/images/footer/${imgName}.svg`}
    alt={imgName}
  />
);

export const FooterTitle = styled(Typography)({
  color: "#4b4b4b",
  fontWeight: 500,
  fontSize: "20px",
  lineHeight: "1.4",
});

export const FooterParagraph = styled(Typography)({
  color: "#737373",
  fontWeight: 400,
  fontSize: "15px",
  lineHeight: "1.2",
  marginTop: "16px",
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
