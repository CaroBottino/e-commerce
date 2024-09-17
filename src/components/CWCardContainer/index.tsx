import { ReactElement } from "react";
import { WhiteCardContainer } from "./CWCardContainer.styled";
import { SxProps } from "@mui/material";

export interface CWCardContainerProps {
  children: ReactElement;
  sx: SxProps;
}

const CWCardContainer = ({ children, sx }: CWCardContainerProps) => {
  return (
    <WhiteCardContainer container sx={sx}>
      {children}
    </WhiteCardContainer>
  );
};

export default CWCardContainer;
