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
        <Button variant="outlined" color="secondary">
          简体中文
        </Button>
        <Button variant="outlined" color="secondary">
          繁體中文
        </Button>
        <Button variant="outlined" color="secondary">
          日本語
        </Button>
        <Button variant="outlined" color="secondary">
          한국어
        </Button>
        <Button variant="outlined" color="secondary">
          العربية
        </Button>
        <Button variant="outlined" color="secondary">
          Español
        </Button>
        <Button variant="outlined" color="secondary">
          Français
        </Button>
        <Button variant="outlined" color="secondary">
          Tiếng Việt
        </Button>
        <Button variant="outlined" color="secondary">
          Filipino
        </Button>
      </Stack>
    </Paper>
  );
}

export default LangSheet;
