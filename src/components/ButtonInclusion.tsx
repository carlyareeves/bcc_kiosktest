import { Button, Icon } from "@mui/material";
import { useState } from "react";
import MenuSheet from "./MenuSheet";
import "material-symbols/outlined.css";

function ButtonInclusion() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleAccessVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="language_menu">
      <Button
        onClick={toggleAccessVisibility}
        sx={{
          width: "100%",
          //   aspectRatio: "1 / 1",
          height: "100px",
          py: 1,
          borderRadius: "0px",
          backgroundColor: isVisible
            ? "var(--neutral-Black)"
            : "var(--neutral-DarkGrey)",
        }}
      >
        <Icon
          sx={{
            fontSize: 48,
            color: isVisible
              ? "var(--feedbackBg-Positive)"
              : "var(--secondary-Mist)",
          }}
        >
          accessible_menu
        </Icon>
      </Button>

      <div
        className="position_test"
        style={{
          transform: isVisible ? "translateY(0px)" : "translateY(100px)",
          opacity: isVisible ? 1 : 0,
          transition:
            "opacity 200ms ease-in-out, visibility 200ms ease-in-out, transform 200ms ease-in-out",
          visibility: isVisible ? "visible" : "hidden",
        }}
      >
        <MenuSheet />
      </div>
    </div>
  );
}

export default ButtonInclusion;
