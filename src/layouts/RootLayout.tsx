import { Box } from "@mui/material";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import ButtonReload from "../components/ButtonReload";

const RootLayout = () => {
  return (
    <Box sx={{ overflow: "clip" }}>
      <div className="grid_wrapper">
        <Box gap="30px" className="promo_wrapper">
          <div className="promo_media">
            <div className="promo_content">
              <p>Display Promo EXAMPLE ONLY</p>
              <ButtonReload />
            </div>
          </div>
        </Box>
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
