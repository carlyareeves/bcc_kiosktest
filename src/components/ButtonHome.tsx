import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Link as RouterLink } from "react-router-dom";
import { SvgIconHome } from "../components/IconHome";

function ButtonHome() {
  return (
    <Button
      component={RouterLink}
      to="/"
      variant="contained"
      sx={{
        position: "absolute",
        borderRadius: 999,
        padding: "20px 40px",
        transform: "rotate(-90deg)",
        transformOrigin: "center left",
        textTransform: "none",
        fontSize: "48px",
        boxShadow: "none",
        "&:hover": { boxShadow: "none" },
      }}
    >
      <Stack direction="row" sx={{ gap: 2, alignItems: "center" }}>
        <SvgIconHome /> <span>Home</span>
      </Stack>
    </Button>
  );
}

export default ButtonHome;
