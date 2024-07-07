import { Box } from "@mui/material";
import React, { useState } from "react";

interface CarPicProps {
  defaultLightValue?: string;
  defaultFogValue?: string;
}

function CarPic(props: CarPicProps) {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      className={`car-pic-container ${props.defaultLightValue}`}
    >
      <div className={`car-pic-container ${props.defaultFogValue}`}>
        <img
          src="/static/car.png"
          alt="car"
          style={{ height: "calc(100vh - 220px)" }}
          className="car-image"
        />
      </div>
    </Box>
  );
}

export default CarPic;
