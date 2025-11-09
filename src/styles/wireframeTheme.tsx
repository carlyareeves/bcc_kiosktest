import { createTheme } from "@mui/material/styles";

export const wireframeTheme = createTheme({
  cssVariables: true,
  palette: {
    primary: {
      main: "#0000FF", // Custom primary color
    },
    secondary: {
      main: "#FF0000", // Custom secondary color
    },
    text: {
      primary: "#173A5E",
      secondary: "#46505A",
    },
  },
  typography: {
    fontFamily: [
      "Brisbane", // Primary font
      "sans-serif", // Fallback font
    ].join(","),
  },
  components: {
    MuiIcon: {
      defaultProps: {
        baseClassName: "material-symbols-outlined",
      },
    },
  },
});
