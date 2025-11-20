import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

const FullScreen = () => {
  return (
    <Box sx={{ overflow: "clip" }}>
      <Outlet />
    </Box>
  );
};

export default FullScreen;
