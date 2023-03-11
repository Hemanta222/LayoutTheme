import { createTheme, responsiveFontSizes } from "@mui/material/styles";
let theme = createTheme({
  palette: {
    primary: {
      main: "#ff0000",
    },
    secondary: {
      main: "#ffeb3b",
    },
  },
});

theme = responsiveFontSizes(theme);

export const muiTheme = theme;
