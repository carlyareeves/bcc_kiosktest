import { Button, Paper, Stack, Typography, Icon } from "@mui/material";

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
        minHeight: "25vh",
        padding: "64px",
        borderRadius: "0",
        backgroundColor: "var(--neutral-Black)",
      }}
    >
      <Button sx={{ py: 1, mb: 2 }}>
        <Icon sx={{ fontSize: 32, color: "var(--secondary-Mist)" }}>
          arrow_back
        </Icon>
      </Button>
      <Typography variant="h3" color="white" sx={{ marginBottom: "32px" }}>
        Select language
      </Typography>
      <Stack
        direction="row"
        gap="30px"
        sx={{ justifyContent: "flex-start", flexWrap: "wrap" }}
      >
        <Button variant="contained" color="secondary">
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
