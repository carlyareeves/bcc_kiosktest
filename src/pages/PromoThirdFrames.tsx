import { Box, Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

function PromoFrames() {
  return (
    <div id="promo_frames">
      <Button
        component={RouterLink}
        to="/"
        variant="contained"
        color="secondary"
        sx={{ position: "absolute", top: "0", left: "0" }}
      >
        Back to Home
      </Button>
      <div className="promos_wrapper">
        <div className="promo_frame">
          <Box
            sx={{
              height: "100vh",
              backgroundImage: "url('/images/Metro-Means-More_medium.jpg')",
              backgroundSize: "cover",
              backgroundColor: "yellow",
            }}
          ></Box>
        </div>
        <div className="promo_frame">
          <Box
            sx={{
              height: "100vh",
              backgroundImage: "url('/images/Map_Concept_V3.png')",
              backgroundSize: "cover",
              backgroundColor: "yellow",
            }}
          ></Box>
        </div>
      </div>
    </div>
  );
}

export default PromoFrames;
