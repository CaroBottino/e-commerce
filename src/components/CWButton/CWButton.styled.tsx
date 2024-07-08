import styled from "@emotion/styled";
import { Button, ButtonProps } from "@mui/material";

export const StyledButton = styled(Button)<ButtonProps>(({ variant }) => ({
  color: variant === "contained" ? "white" : "#AC274F",
  backgroundColor: variant === "contained" ? "#AC274F" : "transparent",
  borderColor: "#AC274F",

  ":hover": {
    color: variant === "text" ? "#EB638B" : "white",
    backgroundColor:
      variant === "contained" ? "#EB638B" : variant === "outlined" ? "#EB638B" : "#FFE6E6",
    borderColor:
      variant === "contained" ? "#EB638B" : variant === "outlined" ? "#EB638B" : "#FFE6E6",
  },
}));
