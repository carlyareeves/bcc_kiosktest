import { Paper, Stack, Chip, Box, Typography } from "@mui/material";
import QR from "../assets/QR_Code_example.svg";

function AlertSheet() {
  const AlertTitle = "Initial Minor Flood Warning for the Upper Brisbane River";
  const AlertTime = "Alert issued 8:14am AEST Today";
  const AlertSummary =
    "Minor flooding likely along Upper Brisbane River at Gregor Creek late Monday morning";
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
        backgroundColor: "var(--feedbackBg-WarningLight)",
      }}
    >
      <Stack
        direction="row"
        gap="30px"
        sx={{ justifyContent: "space-between" }}
      >
        <div>
          <Chip
            sx={{
              fontSize: "18px",
              backgroundColor: "var(--feedbackBg-Warning)",
              marginBottom: "16px",
            }}
            label={AlertTime}
          />

          <Typography variant="h4" sx={{ marginBottom: "24px" }}>
            {AlertTitle}
          </Typography>
          <Typography variant="body1">{AlertSummary}</Typography>
        </div>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "180px",
          }}
        >
          <Typography variant="overline">Learn more</Typography>
          <img src={QR} alt="QR Code" width="100%" />
        </Box>
      </Stack>
    </Paper>
  );
}

export default AlertSheet;
