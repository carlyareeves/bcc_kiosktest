import { Button, Icon } from "@mui/material";
import { useState } from "react";
import AlertSheet from "./AlertSheet";
import "material-symbols/outlined.css";

function ButtonAlert() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="weather_alert">
      <Button
        onClick={toggleVisibility}
        sx={{
          width: "100%",
          aspectRatio: "1 / 1",
          py: 2,
          borderRadius: "0px",
          backgroundColor: isVisible
            ? "var(--feedbackBg-Warning)"
            : "var(--feedbackBg-WarningLight)",
        }}
      >
        <Icon sx={{ fontSize: 80, color: "var(--neutral-DarkGrey)" }}>
          flood
        </Icon>
      </Button>

      <div
        style={{
          transform: isVisible ? "translateY(0px)" : "translateY(200px)",
          opacity: isVisible ? 1 : 0,
          transition:
            "opacity 200ms ease-in-out, visibility 200ms ease-in-out, transform 200ms ease-in-out",
          visibility: isVisible ? "visible" : "hidden",
        }}
      >
        <AlertSheet />
      </div>
    </div>
  );
}

export default ButtonAlert;
