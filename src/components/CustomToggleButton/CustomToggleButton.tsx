import {
  Box,
  styled,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const CustomToggleButtons = styled(ToggleButton)(({ theme }) => ({
  "&.Mui-selected": {
    backgroundColor: "#2e319b",
    color: "#ffffff",
    borderRadius: "50px",

    "&:hover": {
      backgroundColor: "#3a3ab3",
    },
  },

  "&:hover": {
    borderRadius: "50px",
  },
  position: "relative",
  overflow: "hidden",
  margin: "5px",
  textTransform: "none",
  color: "#8a8a94",
  borderRadius: "50px",
  border: "0",
  background: "#1e1d22",
  flex: 1,
}));

interface ToggleButtonProps {
  value: string;
  ariaLabel: string;
  text: string;
  icon?: any;
}

interface AllButtonsProps {
  buttons: ToggleButtonProps[];
  defaultValue: string;
  changeLights: (newAlignment: string)=> void;
}

function CustomToggleButton( props : AllButtonsProps) {
  const [alignment, setAlignment] = useState<string | null>(props.defaultValue);

  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null
  ) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
      props.changeLights(newAlignment);
    }
  };

  return (
    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleAlignment}
      aria-label="Headlights"
      style={{
        background: "#1e1d22",
        borderRadius: "50px",
        maxWidth:"500px"
      }}
    >
      {props.buttons.map((item) => (
        <CustomToggleButtons value={item.value} aria-label={item.ariaLabel}>
          {item.icon != null ? (
            <>
              {item.icon} <Box paddingRight="10px"></Box>{" "}
            </>
          ) : (
            ""
          )}{" "}
          {item.text}
        </CustomToggleButtons>
      ))}
    </ToggleButtonGroup>
  );
}

export default CustomToggleButton;
