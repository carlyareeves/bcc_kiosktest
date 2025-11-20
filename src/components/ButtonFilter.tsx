import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { DirectionsBoat, DirectionsBus, Train } from "@mui/icons-material";

function ButtonFilter() {
  return (
    <Stack direction="row" spacing={2}>
      <Button
        variant="contained"
        sx={{
          borderRadius: 999,
          padding: "10px 20px",
          textTransform: "none",
          fontSize: "28px",
          color: "white",
          backgroundColor: "blue",
          boxShadow: "none",
          "&:hover": { boxShadow: "none", color: "white" },
        }}
      >
        <Stack direction="row" sx={{ gap: 1, alignItems: "center" }}>
          <Train /> <span>Train</span>
        </Stack>
      </Button>
      <Button
        variant="contained"
        sx={{
          borderRadius: 999,
          padding: "10px 20px",
          textTransform: "none",
          fontSize: "28px",
          color: "white",
          backgroundColor: "blue",
          boxShadow: "none",
          "&:hover": { boxShadow: "none", color: "white" },
        }}
      >
        <Stack direction="row" sx={{ gap: 1, alignItems: "center" }}>
          <DirectionsBus /> <span>Bus</span>
        </Stack>
      </Button>{" "}
      <Button
        variant="contained"
        sx={{
          borderRadius: 999,
          padding: "10px 20px",
          textTransform: "none",
          fontSize: "28px",
          color: "white",
          backgroundColor: "blue",
          boxShadow: "none",
          "&:hover": { boxShadow: "none", color: "white" },
        }}
      >
        <Stack direction="row" sx={{ gap: 1, alignItems: "center" }}>
          <DirectionsBoat /> <span>Ferry</span>
        </Stack>
      </Button>
    </Stack>
  );
}

export default ButtonFilter;
