import { Button, Paper, Stack } from "@mui/material";

function LangSheet() {
  return (
    <Paper
      elevation={6}
      className="language_sheet"
      sx={{
        position: "absolute",
        left: "100%",
        bottom: "0px",
        width: "calc(100vw - 12vw)",
        minHeight: "260px",
        padding: "64px",
        borderRadius: "0",
        backgroundColor: "var(--neutral-Black)",
      }}
    >
      <Stack
        direction="row"
        gap="30px"
        sx={{ justifyContent: "space-between" }}
      >
        <Button variant="outlined" color="secondary">
          English
        </Button>
      </Stack>
    </Paper>
  );
}

export default LangSheet;
