import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import ButtonHome from "../components/ButtonHome";
import ButtonNav from "../components/ButtonNav";
import Icon from "@mui/material/Icon";
import CircleIcon from "@mui/icons-material/Circle";

export function Weather() {
  return (
    <Box sx={{ width: 100, pt: 6, pb: 4 }}>
      <Stack direction="column" sx={{ mb: 2, gap: 0.5, alignItems: "center" }}>
        <Icon sx={{ fontSize: 60, color: "var(--secondary-Mist)" }}>
          clear_day
        </Icon>
        <Box sx={{ fontSize: 40, color: "var(--secondary-Mist)" }}>
          36.2&deg;
        </Box>
      </Stack>
      <Stack direction="column" sx={{ mt: 2, gap: 2, alignItems: "center" }}>
        <CircleIcon sx={{ fontSize: 16, color: "text.secondary" }} />
        <Box sx={{ fontSize: 30, color: "var(--secondary-Mist)" }}>3.21pm</Box>
      </Stack>
    </Box>
  );
}

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar_wrapper">
        <div className="sidebar_stat">
          <Weather />
        </div>
        <div className="sidebar_home">
          <ButtonHome />
        </div>
        <div className="sidebar_nav">
          <ButtonNav />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
