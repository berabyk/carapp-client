import { Grid, Slider, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import CustomToggleButton from "../../../CustomToggleButton/CustomToggleButton";
import { GiFogLight } from "react-icons/gi";
import CarPic from "../../../CarPic/CarPic";

function Lights() {
  const customHeadlightButtons = [
    {
      value: "off",
      ariaLabel: "off",
      text: "Off",
    },
    {
      value: "parking",
      ariaLabel: "parking",
      text: "Parking",
    },
    {
      value: "on",
      ariaLabel: "on",
      text: "On",
    },
    {
      value: "auto",
      ariaLabel: "auto",
      text: "Auto",
    },
  ];

  const customFogButtons = [
    {
      value: "frontfog",
      ariaLabel: "frontfog",
      text: "Front Fog",
      icon: <GiFogLight size="24px" style={{ transform: "scaleX(-1)" }} />,
    },
    {
      value: "backfog",
      ariaLabel: "backfog",
      text: "Back Fog",
      icon: <GiFogLight size="24px" />,
    },
  ];

  const [defaultLightValue, setDefaultLightValue] = useState<string>("auto")
  const [defaultFogValue, setDefaultFogValue] = useState<string>("frontfog")
  function changeLights(newLight: string){
    console.log(newLight);
    setDefaultLightValue(newLight);
    
  }

  function changeFog(newFog: string){
    console.log(newFog);
    setDefaultFogValue(newFog); 
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <Stack spacing={5}>
          <Typography variant="h4" component="h1" fontWeight={"light"}>
            Lights
          </Typography>

          <Stack spacing={2}>
            <Typography variant="h6" component="h4" fontWeight={"medium"}>
              Headlight
            </Typography>

            <CustomToggleButton
              buttons={customHeadlightButtons}
              defaultValue={defaultLightValue}
              changeLights={changeLights}
            ></CustomToggleButton>
          </Stack>

          <Stack spacing={2}>
            <Typography variant="h6" component="h4" fontWeight={"medium"}>
              Fog Lights
            </Typography>

            <CustomToggleButton
              buttons={customFogButtons}
              defaultValue={defaultFogValue}
              changeLights={changeFog}
            ></CustomToggleButton>
          </Stack>

          <Stack spacing={2}>
            <Typography variant="h6" component="h4" fontWeight={"medium"}>
              Angle
            </Typography>

            <Slider
              min={0}
              max={60}
              defaultValue={11}
              aria-label="Default"
              valueLabelDisplay="auto"
              sx={{ maxWidth: "500px", color: "#2e319b" }}
            />
          </Stack>
        </Stack>
      </Grid>
      <Grid item md={6} display={{xs: "none", md:"block"}}>
        <CarPic defaultLightValue = {defaultLightValue}
        defaultFogValue={defaultFogValue}></CarPic>
      </Grid>
    </Grid>
  );
}

export default Lights;
