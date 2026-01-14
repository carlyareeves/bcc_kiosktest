import { Box } from "@mui/material";

function PromoBapp() {
  const style = {
    position: "relative",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    borderRadius: "24px",
    boxShadow: 24,
    p: 4,
  };

  return (
    <Box sx={style}>
      <h1>Brisbane app</h1>Modal with QR code to app store download
    </Box>
  );
}

export default PromoBapp;
