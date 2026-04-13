import { Button, Stack } from "@mui/material";

function FilterEvents() {
  return (
    <Stack direction={"row"}>
      <Button
        disableElevation
        sx={{
          padding: "4px 24px",
          borderRadius: "99px 0 0 99px;",
          border: "3px solid var(--secondary-Sky)",
          backgroundColor: "var(--secondary-Sky)",
        }}
      >
        Today
      </Button>
      <Button
        sx={{
          padding: "4px 24px",
          borderRadius: "0 99px 99px 0;",
          border: "3px solid var(--secondary-Sky)",
          marginLeft: "-3px",
          backgroundColor: "white",
        }}
      >
        This weekend
      </Button>
    </Stack>
  );
}

export default FilterEvents;
