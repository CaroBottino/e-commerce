import { Grid } from "@mui/material";
import {
  FooterImage,
  FooterItem,
  FooterLink,
  FooterParagraph,
  FooterRow,
  FooterTitle,
  StyledFooter,
} from "./CWFooter.styled";
import CWCarousel from "../CWCarousel";
import { ReactElement } from "react";

const CWFooter = () => {
  const base_url = import.meta.env.VITE_BASE_URL;

  const steps: ReactElement[] = [
    <FooterItem item container xs={12} md={4} key={0}>
      <Grid item xs={12}>
        <FooterImage imgName={"payment"} />
      </Grid>
      <Grid item xs={12}>
        <FooterTitle>Choose how to pay</FooterTitle>
        <FooterParagraph>You can pay with card, debit, cash</FooterParagraph>
      </Grid>
    </FooterItem>,
    <FooterItem item container xs={12} md={4} key={1}>
      <Grid item xs={12}>
        <FooterImage imgName={"shipping"} />
      </Grid>
      <Grid item xs={12}>
        <FooterTitle>Free shipping</FooterTitle>
        <FooterParagraph>
          Just by being registered you have free shipping on thousands of products.
        </FooterParagraph>
      </Grid>
    </FooterItem>,
    <FooterItem item container xs={12} md={4} key={2}>
      <Grid item xs={12}>
        <FooterImage imgName={"protected"} />
      </Grid>
      <Grid item xs={12}>
        <FooterTitle>Security, from start to end</FooterTitle>
        <FooterParagraph>Bought it and didn't like it? Return it back!</FooterParagraph>
      </Grid>
    </FooterItem>,
  ];

  return (
    <StyledFooter>
      <Grid container>
        <FooterRow item container sx={{ backgroundColor: "#FFFF" }}>
          <Grid
            container
            sx={{
              display: { xs: "none", md: "flex" },
            }}
          >
            {steps.map((step) => step)}
          </Grid>
          <Grid
            container
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            <CWCarousel steps={steps} dotsStepper />
          </Grid>
        </FooterRow>
        <FooterRow item container sx={{ backgroundColor: "#37475A" }}>
          <Grid item>
            <FooterLink
              onClick={() => {
                window.scroll({
                  top: 0,
                  left: 0,
                  behavior: "smooth",
                });
              }}
              to={base_url}
            >
              Back to top
            </FooterLink>
          </Grid>
          <Grid item>
            <FooterTitle sx={{ color: "#FF1857" }}>
              · © 2023 Carolina Bottino, Ca.Fe Web. ·
            </FooterTitle>
          </Grid>
          <Grid item>
            <FooterLink to="https://www.linkedin.com/in/carolina-bottino-5214309b/" target="_blank">
              Get to know me 🌷
            </FooterLink>
            ·
          </Grid>
          <Grid item>
            <FooterLink to={`${base_url}/about-me`}>About this project</FooterLink>
          </Grid>
        </FooterRow>
      </Grid>
    </StyledFooter>
  );
};

export default CWFooter;
