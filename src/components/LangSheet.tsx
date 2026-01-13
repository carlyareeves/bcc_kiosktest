import { Button, Paper, Stack, Typography, Icon, Box } from "@mui/material";

function LangSheet() {
  return (
    <Paper
      elevation={6}
      className="language_sheet"
      sx={{
        position: "absolute",
        left: "100%",
        bottom: "0px",
        padding: "32px",
        borderRadius: "0",
        backgroundColor: "hsl(0 0 0 / 0.8)",
      }}
    >
      <Box
        sx={{
          minWidth: "max-content",
        }}
      >
        <Button sx={{ mb: 2 }}>
          <Icon sx={{ fontSize: 48, color: "var(--secondary-Mist)" }}>
            arrow_back
          </Icon>
        </Button>
        <Typography variant="h3" color="white" sx={{ marginBottom: "48px" }}>
          Select language
        </Typography>
        <Stack direction="column" gap="8px" sx={{ alignItems: "flex-start" }}>
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
      </Box>
    </Paper>
  );
}

export default LangSheet;
