import { createTheme } from "@mui/material";

export const muiTheme = createTheme({
  components: {
    // Name of the component
    MuiButtonBase: {
      defaultProps: {
        // The props to change the default for.
        disableRipple: true, // No more ripple, on the whole application 💣!
      },
    },
  },
  palette: {
    primary: {
      light: "#757ce8",
      main: "#3f50b5",
      dark: "#002884",
      contrastText: "#fff",
    },
    grey: {
      light: "#ffffff60",
      main: "#ffffff60",
      dark: "#ffffff60",
      contrastText: "#fff",
    },
  },
});
