import { createTheme } from "@mui/material/styles";

export const wireframeTheme = createTheme({
  cssVariables: true,
  palette: {
    primary: {
      main: "#0000FF", // Custom primary color
    },
    secondary: {
      main: "#EEF2F5", // Custom secondary color
    },
    text: {
      primary: "#173A5E",
      secondary: "#46505A",
    },
  },
  typography: {
    fontFamily: [
      "TT Norm", // Primary font
      "sans-serif", // Fallback font
    ].join(","),
    h1: { fontSize: "56px", marginBottom: "24px", fontWeight: "800" },
    h2: { fontSize: "48px", marginBottom: "16px", fontWeight: "700" },
    h3: { fontSize: "32px", marginBottom: "16px" },
    h4: { fontSize: "24px", marginBottom: "8px" },
    body1: { fontSize: "1rem", fontWeight: "500", lineHeight: "1.3" },
    body2: { fontSize: "16px", fontWeight: "500" },
  },
  components: {
    MuiIcon: {
      defaultProps: {
        baseClassName: "material-symbols-outlined",
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "initial",
          fontSize: "1.3rem",
          fontWeight: "600",
        },
        startIcon: {
          marginRight: "16px",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          padding: "0 4px",
        },
        label: { fontWeight: "500" },
      },
    },
    MuiTypography: {
      defaultProps: {
        letterSpacing: "-0.5px",
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
