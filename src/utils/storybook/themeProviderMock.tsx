import { ThemeProvider, createTheme } from "@mui/material";
import { ReactElement } from "react";

const cwTheme = createTheme({
  typography: {
    fontFamily: ["Proxima Nova", "-apple-system", "Roboto", "Arial", "sans-serif"].join(","),
  },
});

export const ThemeDecoratorMock = ({ children }: { children: ReactElement }) => {
  return <ThemeProvider theme={cwTheme}>{children}</ThemeProvider>;
};

export const ThemeDecorator = (Story: any) => (
  <ThemeDecoratorMock>
    <Story />
  </ThemeDecoratorMock>
);
