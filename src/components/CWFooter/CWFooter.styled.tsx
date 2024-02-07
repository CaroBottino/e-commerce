
import { styled } from "@mui/material";

export const StyledFooter = styled("footer")`
  background-color: #55b6ff;
  color: #ffffff;
  text-align: center;
  padding: 20px;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

export const FooterText = styled("p")`
  font-family: Georgia;
  font-weight: 800;
  font-size: 16px;
`;

export const FooterLink = styled("a")`
  color: #ffffff;
  text-decoration: none;
  margin: 0 10px;

  &:hover {
    color: #ffc019;
  }
`;
