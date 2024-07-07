import { Grid, Slider, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CustomToggleButton from "../../../CustomToggleButton/CustomToggleButton";
import { GiFogLight } from "react-icons/gi";
import CarPic from "../../../CarPic/CarPic";
import {
  ChangeLightByCarId,
  GetLightsByCarId,
} from "../../../../services/HttpService";

function Lights() {
  const carId = 2;

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

  const [defaultLightValue, setDefaultLightValue] = useState<string>("auto");
  const [defaultFogValue, setDefaultFogValue] = useState<string>("frontfog");
  const [defaultAngle, setDefaultAngle] = useState<number>(11);

  //GET Lights
  const getLightsByCarId = () => {
    GetLightsByCarId("light", carId)
      .then((res: Response) => res.json())
      .then((res: any) => {
        setDefaultLightValue(res.headLights);
        setDefaultFogValue(res.fogLights);
        setDefaultAngle(res.angle);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getLightsByCarId();
  }, []);

  //PUT Lights
  const saveLight = (selectedType: string, selectedValue: string) => {
    console.log(carId);
    ChangeLightByCarId("Light", carId, {
      [`${selectedType}`]: selectedValue,
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));
  };

  function changeLights(newLight: string) {
    saveLight("headLights", newLight);
    setDefaultLightValue(newLight);
  }

  function changeFog(newFog: string) {
    saveLight("fogLights", newFog);

    setDefaultFogValue(newFog);
  }

  const handleChangeCommitted = (
    event: Event | React.SyntheticEvent,
    value: number | number[]
  ) => {
    saveLight("angle", String(value));
  };

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
              key={`headlightButton-${defaultLightValue}`}
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
              key={`foglightButton-${defaultFogValue}`}
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
              onChangeCommitted={handleChangeCommitted}
              min={0}
              max={60}
              key={`slider-${defaultAngle}`}
              defaultValue={defaultAngle}
              aria-label="Default"
              valueLabelDisplay="auto"
              sx={{ maxWidth: "500px", color: "#2e319b" }}
            />
          </Stack>
        </Stack>
      </Grid>
      <Grid item md={6} display={{ xs: "none", md: "block" }}>
        <CarPic
          defaultLightValue={defaultLightValue}
          defaultFogValue={defaultFogValue}
        ></CarPic>
      </Grid>
    </Grid>
  );
}

export default Lights;
