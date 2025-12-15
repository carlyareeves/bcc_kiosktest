import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Icon from "@mui/material/Icon";
import ButtonAlert from "./ButtonAlert";
import ButtonLanguage from "./ButtonLanguage";

function ButtonNav() {
  return (
    <Stack
      direction="column"
      width="100%"
      sx={{ gap: 2, alignItems: "center" }}
    >
      <ButtonLanguage />
      <Button sx={{ width: "100%", py: 1 }}>
        <Icon sx={{ fontSize: 48, color: "var(--secondary-Mist)" }}>
          accessible_menu
        </Icon>
      </Button>
      <Button sx={{ width: "100%", py: 1 }}>
        <Icon sx={{ fontSize: 48, color: "var(--secondary-Mist)" }}>
          accessible_forward
        </Icon>
      </Button>
      <ButtonAlert />
    </Stack>
  );
}

export default ButtonNav;
