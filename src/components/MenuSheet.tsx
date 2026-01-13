import { Button, Paper, Stack, Typography, Icon, Box } from "@mui/material";
import { SvgIconContrast } from "./IconContrast";
import { SvgIconTypeSize } from "./IconTypeSize";
import { SvgIconScreenHeight } from "./IconScreenHeight";

function MenuSheet() {
  return (
    <Paper
      elevation={6}
      className="menu_sheet"
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
          Modify view
        </Typography>
        <Stack direction="column" gap="8px" sx={{ alignItems: "flex-start" }}>
          <Button
            variant="text"
            color="secondary"
            startIcon={<SvgIconContrast />}
          >
            High contrast
          </Button>
          <Button
            variant="text"
            color="secondary"
            startIcon={<SvgIconTypeSize />}
          >
            Larger type
          </Button>
          <Button
            variant="text"
            color="secondary"
            startIcon={<SvgIconScreenHeight />}
          >
            Reduce screen height
          </Button>
        </Stack>
      </Box>
    </Paper>
  );
}

export default MenuSheet;
