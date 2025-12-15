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
          aspectRatio: "1 / 1",
          py: 1,
          borderRadius: "0px",
          backgroundColor: isVisible
            ? "var(--primary-Yellow)"
            : "var(--neutral-DarkGrey)",
        }}
      >
        <Icon
          sx={{
            fontSize: 48,
            color: isVisible
              ? "var(--neutral-OffWhite)"
              : "var(--secondary-Mist)",
          }}
        >
          language
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
        <LangSheet />
      </div>
    </div>
  );
}

export default ButtonLanguage;
