import React from "react";
import { ThemeProvider, createTheme } from "@mui/material";

const MuiThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const theme = createTheme({
    typography: {
      fontFamily: "Poppins",
    },
    palette: {
      primary: {
        main: "#00246B",
      },
      secondary: {
        main: "#CADCFC",
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 576,
        md: 768,
        lg: 992,
        xl: 1200,
      },
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default MuiThemeProvider;
