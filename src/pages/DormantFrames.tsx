import { Box, Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

function DormantFrames() {
  return (
    <div id="frames">
      <Button
        component={RouterLink}
        to="/"
        variant="contained"
        color="secondary"
        sx={{ position: "absolute", top: "0", left: "0" }}
      >
        Back to Home
      </Button>
      <div className="dormant_wrapper">
        <div className="frame">
          <Box
            sx={{
              height: "100vh",
              backgroundImage: "url('/images/Metro-Means-More.png')",
              backgroundSize: "cover",
              backgroundColor: "yellow",
            }}
          ></Box>
        </div>
        <div className="frame">
          <Box
            sx={{
              height: "100vh",
              backgroundImage: "url('/images/Illustrative Map_9x16.png')",
              backgroundSize: "cover",
              backgroundColor: "yellow",
            }}
          ></Box>
        </div>
      </div>
    </div>
  );
}

export default DormantFrames;
