import Stack from "@mui/material/Stack";
import ButtonAlert from "./ButtonAlert";
import ButtonLanguage from "./ButtonLanguage";
import ButtonInclusion from "./ButtonInclusion";

function ButtonNav() {
  return (
    <Stack
      direction="column"
      width="100%"
      sx={{ gap: 2, alignItems: "center" }}
    >
      <ButtonLanguage />
      <ButtonInclusion />
      <ButtonAlert />
    </Stack>
  );
}

export default ButtonNav;
