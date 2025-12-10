import { Button } from "@mui/material";
import RestartAltIcon from "@mui/icons-material/RestartAlt";

const ButtonReload: React.FC = () => {
  const handleHardReload = () => {
    window.location.reload();
  };

  return (
    <>
      <Button
        onClick={handleHardReload}
        variant="outlined"
        startIcon={<RestartAltIcon />}
        sx={{
          borderRadius: 999,
          padding: "10px 20px",
          textTransform: "none",
          fontSize: "32px",
          color: "white",
          borderColor: "white",
        }}
      >
        Reload
      </Button>
    </>
  );
};

export default ButtonReload;
