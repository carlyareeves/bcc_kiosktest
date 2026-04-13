import { Button, Icon, Stack } from "@mui/material";

function ButtonFilter() {
  return (
    <Stack direction={"row"}>
      <Button
        disableElevation
        startIcon={<Icon sx={{ color: "secondary.main" }}>directions_bus</Icon>}
        sx={{
          padding: "4px 24px",
          borderRadius: "99px 0 0 99px;",
          border: "3px solid var(--secondary-Sky)",
          backgroundColor: "white",
        }}
      >
        Bus
      </Button>
      <Button
        startIcon={
          <Icon sx={{ color: "secondary.main" }}>directions_boat</Icon>
        }
        sx={{
          padding: "4px 24px",
          borderRadius: "0",
          borderTop: "3px solid var(--secondary-Sky)",
          borderBottom: "3px solid var(--secondary-Sky)",
          backgroundColor: "white",
        }}
      >
        Ferry
      </Button>
      <Button
        startIcon={
          <Icon sx={{ color: "secondary.main" }}>directions_subway</Icon>
        }
        sx={{
          padding: "4px 24px",
          borderRadius: "0 99px 99px 0;",
          border: "3px solid var(--secondary-Sky)",
          backgroundColor: "white",
        }}
      >
        Train
      </Button>
    </Stack>
  );
}

export default ButtonFilter;
