"use client";
import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { blue } from "@mui/material/colors";

function AppThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#e91e63", // Pink color
      },
      secondary: {
        main: blue[500],
      },
      success: {
        main: "#b26a00", // Orange color
      },
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default AppThemeProvider;
