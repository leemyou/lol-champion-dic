import { createTheme } from "@mui/material";
import { blueGrey, indigo } from "@mui/material/colors";

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
      light: indigo[700],
      main: indigo[700],
      dark: indigo[900],
      contrastText: "#fff",
    },
    secondary: {
      light: blueGrey[300],
      main: blueGrey[500],
      dark: blueGrey[700],
      contrastText: "#fff",
    },
  },
});
