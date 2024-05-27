import { ReactElement } from "react";
import { WhiteCardContainer } from "./CWCardContainer.styled";

export interface CWCardContainerProps {
  children: ReactElement;
}

const CWCardContainer = ({ children }: CWCardContainerProps) => {
  return <WhiteCardContainer container>{children}</WhiteCardContainer>;
};

export default CWCardContainer;
