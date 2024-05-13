import { Grid } from "@mui/material";
import { FooterLink, FooterText, StyledFooter } from "./CWFooter.styled";

const CWFooter = () => {
  const base_url = import.meta.env.VITE_BASE_URL;

  return (
    <StyledFooter>
      <Grid container>
        <Grid item container justifyContent={"center"} justifyItems={"center"}>
          <Grid item>
            <FooterLink
              onClick={() => {
                window.scroll({
                  top: 0,
                  left: 0,
                  behavior: "smooth",
                });
              }}
              to={"/"}
            >
              Back to top
            </FooterLink>
          </Grid>
          <Grid item>
            <FooterText>· © 2023 Carolina Bottino, Ca.Fe Web. ·</FooterText>
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
        </Grid>
      </Grid>
    </StyledFooter>
  );
};

export default CWFooter;
