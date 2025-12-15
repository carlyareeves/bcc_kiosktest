import { Paper, Stack } from "@mui/material";

function LangSheet() {
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
        backgroundColor: "var(--neutral-BlueGrey)",
      }}
    >
      <Stack
        direction="row"
        gap="30px"
        sx={{ justifyContent: "space-between" }}
      >
        Language buttons here
      </Stack>
    </Paper>
  );
}

export default LangSheet;
