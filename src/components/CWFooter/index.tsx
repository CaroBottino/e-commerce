import { Box } from "@mui/material";
import { FooterLink, FooterText, StyledFooter } from "./CWFooter.styled";

const CWFooter = () => {
  const base_url = import.meta.env.VITE_BASE_URL;

  return (
    <StyledFooter>
      <Box>
        <FooterText>
          <FooterLink to="/#">Back to top</FooterLink>· © 2023 Carolina Bottino, Ca.Fe Web. ·
          <FooterLink to="https://www.linkedin.com/in/carolina-bottino-5214309b/" target="_blank">
            Get to know me 🌷
          </FooterLink>
          ·<FooterLink to={`${base_url}/about-me`}>About this project</FooterLink>
        </FooterText>
      </Box>
    </StyledFooter>
  );
};

export default CWFooter;
