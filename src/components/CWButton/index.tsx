import { ReactElement } from "react";
import { StyledButton } from "./CWButton.styled";
import { ButtonProps, SxProps } from "@mui/material";

export interface ICWButtonProps extends ButtonProps {
  label?: string | ReactElement;
  type?: "button" | "submit" | "reset" | undefined;
  variant?: "text" | "outlined" | "contained";
  sx?: SxProps;
}

const CWButton = ({ label, type, variant, sx, children, ...props }: ICWButtonProps) => {
  return (
    <StyledButton type={type} variant={variant} sx={sx} {...props}>
      {label ?? children}
    </StyledButton>
  );
};

export default CWButton;
