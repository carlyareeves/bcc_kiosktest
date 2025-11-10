import Box from "@mui/material/Box";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <Box sx={{ overflow: "clip" }}>
      <div className="grid_wrapper">
        <div className="promo_wrapper">Display Promo</div>
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
