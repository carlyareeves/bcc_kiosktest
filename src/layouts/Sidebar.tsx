import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import ButtonHome from "../components/ButtonHome";
import ButtonNav from "../components/ButtonNav";
import CircleIcon from "@mui/icons-material/Circle";
import IconSunny from "/public/images/BOM-sunny.svg";

export function Weather() {
  return (
    <Box sx={{ width: 100, pt: 6, pb: 4 }}>
      <Stack direction="column" sx={{ mb: 2, gap: 0.5, alignItems: "center" }}>
        <img width="56px" height="auto" src={IconSunny} />
        <Box sx={{ fontSize: 28, color: "var(--secondary-Mist)" }}>
          36.2&deg;
        </Box>
      </Stack>
      <Stack direction="column" sx={{ mt: 1, gap: 1, alignItems: "center" }}>
        <CircleIcon sx={{ fontSize: 8, color: "text.secondary" }} />
        <Box sx={{ fontSize: 22, color: "var(--secondary-Mist)" }}>9:41</Box>
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
