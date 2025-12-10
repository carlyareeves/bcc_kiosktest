import { createTheme } from "@mui/material/styles";

export const wireframeTheme = createTheme({
  cssVariables: true,
  palette: {
    primary: {
      main: "#0000FF", // Custom primary color
    },
    secondary: {
      main: "#FFFFFF", // Custom secondary color
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
    h1: { fontSize: "56px", marginBottom: "16px", fontWeight: "800" },
    h2: { fontSize: "48px", marginBottom: "16px", fontWeight: "600" },
    h3: { fontSize: "32px", marginBottom: "8px", fontWeight: "600" },
    h4: { fontSize: "24px", marginBottom: "8px", fontWeight: "500" },
    body1: { fontSize: "18px" },
  },
  components: {
    MuiIcon: {
      defaultProps: {
        baseClassName: "material-symbols-outlined",
      },
    },
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: "div",
          h2: "div",
          h3: "div",
          h4: "div",
          h5: "div",
          h6: "div",
          subtitle1: "div",
          subtitle2: "div",
          body1: "div",
          body2: "span",
        },
      },
    },
  },
});
