import { Box, Stack, Button } from "@mui/material";
import Sidebar from "./Sidebar";
import EventPromo from "../components/EventPromo";
import { Link as RouterLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import ButtonReload from "../components/ButtonReload";

const RootLayout = () => {
  return (
    <Box sx={{ overflow: "clip" }}>
      <div className="grid_wrapper">
        <Box gap="30px" className="promo_wrapper">
          <div className="promo_media">
            <EventPromo />
            <div className="promo_content">
              <p>Display Promo EXAMPLE ONLY</p>
              <ButtonReload />
              <Button
                component={RouterLink}
                to="/map"
                variant="contained"
                color="secondary"
              >
                Map
              </Button>
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
