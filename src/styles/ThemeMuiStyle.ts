import { createTheme } from "@mui/material";
import { DARK, LIGHT } from "../constants/colors";

export const LightTheme = createTheme({
  components: {
    // Name of the component
    // MuiButtonBase: {
    //   defaultProps: {
    //     disableRipple: true,
    //   },
    // },
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: LIGHT.bgCardChip,
          color: "#000",
        },
      },
    },
  },
  palette: {
    mode: "light",
    primary: {
      main: LIGHT.primary,
      contrastText: LIGHT.text,
    },
    secondary: {
      main: LIGHT.grey,
      contrastText: LIGHT.text,
    },
  },
});

export const DarkTheme = createTheme({
  components: {
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: DARK.bgCardChip,
          color: "#fff",
        },
      },
    },
  },
  palette: {
    mode: "dark",
    primary: {
      main: DARK.primary,
      contrastText: DARK.text,
    },
    secondary: {
      main: DARK.grey,
      contrastText: DARK.text,
    },
  },
});
