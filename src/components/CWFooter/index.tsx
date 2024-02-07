import "./CWFooter.styled";

import { Box, Typography } from "@mui/material";
import { StyledFooter, FooterText, FooterLink } from "./CWFooter.styled";

const CWFooter = () => {
  return (
    <StyledFooter>
      <Box >
        <FooterText>
          <FooterLink href="/#">Back to top</FooterLink>· © 2023 Carolina Bottino, Inc. ·
          <FooterLink href="/#">Privacy</FooterLink>·
          <FooterLink href="/#">Terms</FooterLink>
        </FooterText>
      </Box>
    </StyledFooter>
  );
};

export default CWFooter;
