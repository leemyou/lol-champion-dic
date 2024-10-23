import { createTheme } from "@mui/material";
import { DARK, LIGHT } from "@constants/colors";

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
          color: LIGHT.text,
          variants: [
            {
              props: { itemType: "detail" },
              style: {
                backgroundColor: LIGHT.bgDetailChip,
                color: LIGHT.text,
              },
            },
          ],
        },
      },
    },
  },
  palette: {
    mode: "light",
    primary: {
      main: LIGHT.bgDetailChip,
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
          color: DARK.text,
          variants: [
            {
              props: { itemType: "detail" },
              style: {
                backgroundColor: DARK.bgDetailChip,
                color: DARK.text,
              },
            },
          ],
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
      main: DARK.bgDetailChip,
      contrastText: DARK.text,
    },
  },
});
