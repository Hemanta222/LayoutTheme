import { createTheme, responsiveFontSizes } from "@mui/material/styles";
let theme = createTheme({
  palette: {
    primary: {
      main: "#a3238e",
    },
    secondary: {
      main: "#47a5ae",
    },
  },
});

theme = responsiveFontSizes(theme);

export const muiTheme = theme;
