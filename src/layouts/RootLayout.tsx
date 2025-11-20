import { Box, Stack, Button } from "@mui/material";
import Sidebar from "./Sidebar";
import { Link as RouterLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import ButtonReload from "../components/ButtonReload";

const RootLayout = () => {
  return (
    <Box sx={{ overflow: "clip" }}>
      <div className="grid_wrapper">
        <Stack gap="30px" className="promo_wrapper">
          <div>Display Promo</div>
          <ButtonReload />
          <Button
            component={RouterLink}
            to="/map"
            variant="contained"
            color="secondary"
          >
            Map
          </Button>
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
