import { Icon, ButtonBase } from "@mui/material";
import { useState } from "react";
import AlertSheet from "./AlertSheet";
import "material-symbols/outlined.css";

function ButtonAlert() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleAlertVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="weather_alert">
      <ButtonBase
        onClick={toggleAlertVisibility}
        sx={{
          width: "100%",
          // display: "flex",
          // flexDirection: "column",
          aspectRatio: "1 / 1",
          py: 2,
          borderRadius: "0px",
          backgroundColor: isVisible
            ? "var(--feedbackBg-MidWarning)"
            : "var(--feedbackBg-MidWarningLight)",
        }}
      >
        <Icon
          sx={{
            fontSize: 48,
            color: isVisible
              ? "var(--neutral-OffWhite)"
              : "var(--feedbackContent-MidWarning)",
          }}
        >
          emergency_heat_2
        </Icon>
        {/* <Typography variant="caption">Heat Warning</Typography> */}
      </ButtonBase>

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
