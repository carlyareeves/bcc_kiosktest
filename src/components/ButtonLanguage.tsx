import { Button, Icon } from "@mui/material";
import { useState } from "react";
import LangSheet from "./LangSheet";
import "material-symbols/outlined.css";

function ButtonLanguage() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleLangVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="language_menu">
      <Button
        onClick={toggleLangVisibility}
        sx={{
          width: "100%",
          // aspectRatio: "1 / 1",
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
          g_translate
        </Icon>
      </Button>

      <div
        // className="position_test"
        style={{
          transform: isVisible ? "translateX(0px)" : "translateX(-100px)",
          opacity: isVisible ? 1 : 0,
          transition:
            "opacity 200ms ease-in-out, visibility 200ms ease-in-out, transform 200ms ease-in-out",
          visibility: isVisible ? "visible" : "hidden",
        }}
      >
        <LangSheet />
      </div>
    </div>
  );
}

export default ButtonLanguage;
