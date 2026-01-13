import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Link as RouterLink } from "react-router-dom";
import { SvgIconHome } from "../components/IconHome";

function ButtonHome() {
  return (
    <Button
      component={RouterLink}
      to="/"
      sx={{
        position: "absolute",
        borderRadius: 999,
        overflow: "clip",
        padding: "8px 20px",
        transform: "rotate(-90deg)",
        transformOrigin: "center left",
        textTransform: "none",
        fontSize: "32px",
        color: "white",
        backgroundColor: "black",
        boxShadow: "none",
        "&:hover": { boxShadow: "none", color: "white" },
      }}
    >
      <Stack direction="row" sx={{ gap: 2, alignItems: "center" }}>
        <SvgIconHome /> <span>Home</span>
      </Stack>
    </Button>
  );
}

export default ButtonHome;
