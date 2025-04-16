import { Box, styled, Tab } from "@mui/material";

export const TabsMainBox = styled(Box)({
  width: "100%",
});

export const TabsLabelBox = styled(Box)({
  borderBottom: 1,
  borderColor: "divider",

  ".MuiTabs-fixed": {
    overflow: "auto !important",
  },

  ".MuiTabs-indicator": {
    backgroundColor: "#AC274F",
  },
});

export const StyledTab = styled(Tab)({
  textTransform: "none",

  "&.Mui-selected": {
    color: "#AC274F",
  },

  "&:focus": {
    outline: "none",
  },
});
