import { Button, Paper, Stack, Typography, Icon, Box } from "@mui/material";
import IconCheck from "@mui/icons-material/Check";

function LangSheet() {
  return (
    <Paper
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
          <Button variant="text" color="secondary" startIcon={<IconCheck />}>
            English
          </Button>
          <Button variant="text" color="secondary">
            简体中文
          </Button>
          <Button variant="text" color="secondary">
            繁體中文
          </Button>
          <Button variant="text" color="secondary">
            日本語
          </Button>
          <Button variant="text" color="secondary">
            한국어
          </Button>
          <Button variant="text" color="secondary">
            العربية
          </Button>
          <Button variant="text" color="secondary">
            Español
          </Button>
          <Button variant="text" color="secondary">
            Français
          </Button>
          <Button variant="text" color="secondary">
            Tiếng Việt
          </Button>
          <Button variant="text" color="secondary">
            Filipino
          </Button>
        </Stack>
      </Box>
    </Paper>
  );
}

export default LangSheet;
