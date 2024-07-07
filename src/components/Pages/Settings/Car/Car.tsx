import { Box, Grid, Stack, styled, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CarPic from "../../../CarPic/CarPic";
import TextBox from "../../../TextBox/TextBox";
import { GetCarByCarId } from "../../../../services/HttpService";
import { CarModel } from "../../../../services/CarModel";

function Car() {
  const [car, setCar] = useState<CarModel | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const carId = 2;

  const getCarById = () => {
    GetCarByCarId("car", carId)
      .then((res: Response) => res.json())
      .then((res: any) => {
        console.log(res);
        setIsLoaded(true);
        setCar(res);
      })
      .catch((err) => {
        console.log(err);
        setError(err);
      });
  };

  useEffect(() => {
    getCarById();
  }, []);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <Stack spacing={5}>
          <Typography variant="h4" component="h1" fontWeight={"light"}>
            Car
          </Typography>

          <Stack spacing={3}>
            <Typography variant="h5" component="h4" fontWeight={"medium"}>
              Brand
            </Typography>

            <TextBox>
              <Typography variant="body1" component="p" fontWeight={"medium"}>
                {isLoaded ? car!.brand : "Loading..."}
              </Typography>
            </TextBox>
          </Stack>

          <Stack spacing={3}>
            <Typography variant="h5" component="h4" fontWeight={"medium"}>
              Model
            </Typography>

            <TextBox>
              <Typography variant="body1" component="p" fontWeight={"medium"}>
              {isLoaded ? car!.model : "Loading..."}

              </Typography>
            </TextBox>
          </Stack>
        </Stack>
      </Grid>
      <Grid item md={6} display={{ xs: "none", md: "block" }}>
        <CarPic></CarPic>
      </Grid>
    </Grid>
  );
}

export default Car;
