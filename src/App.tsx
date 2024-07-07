import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { ThemeProvider } from "@emotion/react";
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  createTheme,
  Stack,
} from "@mui/material";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import Settings from "./components/Pages/Settings/Settings";
import Navigation from "./components/Pages/Navigation/Navigation";
import Dashboard from "./components/Pages/Dashboard/Dashboard";
import Car from "./components/Pages/Settings/Car/Car";
import Driving from "./components/Pages/Settings/Driving/Driving";
import Seating from "./components/Pages/Settings/Seating/Seating";
import Lights from "./components/Pages/Settings/Lights/Lights";
import Display from "./components/Pages/Settings/Display/Display";
import Services from "./components/Pages/Settings/Services/Services";
import Software from "./components/Pages/Settings/Software/Software";
import Air from "./components/Pages/Settings/Air/Air";
import BottomNav from "./components/BottomNav/BottomNav";
import NotificationCenter from "./components/NotificationCenter/NotificationCenter";
import QuickControl from "./components/Pages/QuickControl/QuickControl";
import Phone from "./components/Pages/Phone/Phone";
import Media from "./components/Pages/Media/Media";


function App() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#2e319b",
      }
    },
  });

  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <Box
          bgcolor={"background.default"}
          color={"text.primary"}
          sx={{ minHeight: "100vh" }}
        >
          <BrowserRouter>
            <Box
              sx={{
                height: "64px",
              }}
            >
              <NotificationCenter></NotificationCenter>
            </Box>
            <Routes>
              <Route path="/" element={<Dashboard />}></Route>
              
              <Route path="quickcontrol" element={<QuickControl />}></Route>
              <Route path="navigation" element={<Navigation />}></Route>
              <Route path="phone" element={<Phone />}></Route>
              <Route path="media" element={<Media />}></Route>
              <Route path="settings" element={<Settings />}>
                <Route path="" element={<Car />}></Route>
                <Route path="driving" element={<Driving />}></Route>
                <Route path="seating" element={<Seating />}></Route>
                <Route path="air" element={<Air />}></Route>
                <Route path="lights" element={<Lights />}></Route>
                <Route path="display" element={<Display />}></Route>
                <Route path="services" element={<Services />}></Route>
                <Route path="software" element={<Software />}></Route>
              </Route>
            </Routes>
          <BottomNav/>
          </BrowserRouter>
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default App;
