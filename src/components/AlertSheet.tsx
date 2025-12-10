import { Paper, Stack, Chip, Box, Typography } from "@mui/material";
import QRimg from "/src/assets/QR_Code_Example.svg";

function AlertSheet() {
  const AlertTitle = "Severe heatwave warning for: Gulf Country";
  const AlertTime = "Issued at 2:05 pm EST on Tuesday 9 December 2025";
  const AlertSummary =
    "Maximum temperatures in the high thirties to low forties with overnight minimum temperatures in the mid to high twenties. Severe heatwave conditions are expected to continue into the weekend and early next week, gradually extending to the north. Locations likely to be impacted include Croydon.";
  return (
    <Paper
      elevation={8}
      className="alert_sheet"
      sx={{
        position: "absolute",
        left: "100%",
        bottom: "0px",
        width: "calc(100vw - 12vw)",
        minHeight: "260px",
        padding: "64px",
        borderRadius: "0",
        backgroundColor: "var(--feedbackBg-NegativeLight)",
      }}
    >
      <Stack
        direction="row"
        gap="30px"
        sx={{ justifyContent: "space-between" }}
      >
        <Box
          sx={{
            display: "flex",
            flexGrow: "2",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <Chip
            sx={{
              fontSize: "18px",
              color: "white",
              backgroundColor: "var(--secondary-DeepOcean)",
              marginBottom: "16px",
            }}
            label={AlertTime}
          />

          <Typography
            variant="h3"
            sx={{ marginBottom: "24px", color: "var(--secondary-DeepOcean)" }}
          >
            {AlertTitle}
          </Typography>
          <Typography variant="body1">{AlertSummary}</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexGrow: "1",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            minWidth: "180px",
          }}
        >
          <Typography variant="overline">Safety Advice</Typography>
          <img src={QRimg} alt="QR Code" width="100%" />
        </Box>
      </Stack>
    </Paper>
  );
}

export default AlertSheet;
