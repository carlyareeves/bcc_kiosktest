import { Box, Stack } from "@mui/material";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import ButtonReload from "../components/ButtonReload";

const RootLayout = () => {
  return (
    <Box sx={{ overflow: "clip" }}>
      <div className="grid_wrapper">
        <Stack direction="column" gap="30px" className="promo_wrapper">
          <div>Display Promo</div>
          <ButtonReload />
        </Stack>
        <div className="ui_wrapper">
          <Sidebar />
          <div className="content">
            <Outlet />
          </div>
        </div>
      </div>
    </Box>
  );
};

export default RootLayout;
