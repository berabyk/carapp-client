import React from "react";

import { ThemeProvider } from "@emotion/react";
import { Box, createTheme, Stack } from "@mui/material";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Car from "./Car/Car";
import Driving from "./Driving/Driving";
import Seating from "./Seating/Seating";
import { Air } from "@mui/icons-material";
import Lights from "./Lights/Lights";
import Display from "./Display/Display";
import Services from "./Services/Services";
import Software from "./Software/Software";
import Sidebar from "../../SideBar/Sidebar";

function Settings() {
  return (
    <Stack direction={"row"} spacing={2} justifyContent={"space-between"}>
      <Sidebar />
      <Box
        flex={4}
        sx={{
          bgcolor: "#27252f",
          borderTopLeftRadius: 32,
          height: "calc(100vh - 64px)",
        }}
      >
        <Box p={3} marginLeft="20px" marginRight="20px" overflow="hidden">
          <Outlet />
        </Box>
      </Box>
    </Stack>
  );
}

export default Settings;
