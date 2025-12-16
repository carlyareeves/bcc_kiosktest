import { Box, Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

function PromoMap() {
  return (
    <Box
      sx={{
        height: "100vh",
        backgroundImage: "url('/images/Map_Concept_V3.png')",
        backgroundSize: "cover",
        backgroundColor: "yellow",
      }}
    >
      <Button
        component={RouterLink}
        to="/"
        variant="contained"
        color="secondary"
      >
        Back to Home
      </Button>
    </Box>
  );
}

export default PromoMap;
