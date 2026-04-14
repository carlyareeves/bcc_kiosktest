import { Box, Button } from "@mui/material";

interface PromoMapProps {
  onClose: () => void; // Specify the type explicitly
}

function PromoMap({ onClose }: PromoMapProps) {
  const style = {
    position: "relative",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    height: "70vh",
    width: "80%",
    bgcolor: "yellow",
    backgroundImage: "url('/images/Map_Concept_V3.png')",
    backgroundSize: "cover",
    borderRadius: "24px",
    boxShadow: 24,
    p: 4,
  };

  return (
    <Box sx={style}>
      <Button onClick={onClose} variant="contained" color="secondary">
        Back to Home
      </Button>
    </Box>
  );
}

export default PromoMap;
