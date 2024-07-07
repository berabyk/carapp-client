import {
  Box,
  Fab,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Switch,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import {
  AccountBox,
  Article,
  DirectionsCarOutlined,
  Group,
  Home,
  ModeNight,
  Person,
  Settings,
  Storefront,
} from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";
import {
  PiCarProfile,
  PiDownloadSimple,
  PiFan,
  PiHeadlights,
  PiRectangle,
  PiSeat,
  PiSteeringWheel,
  PiWrench,
} from "react-icons/pi";
import MenuIcon from "@mui/icons-material/Menu";

function Sidebar() {
  const location = useLocation();

  const menuItems = [
    {
      text: "Car",
      icon: <PiCarProfile size={24} className="sidebar-list-icon" />,
      path: "/settings",
      color: "chocolate",
    },
    {
      text: "Driving",
      icon: <PiSteeringWheel size={24} className="sidebar-list-icon" />,
      path: "/settings/driving",
      color: "#0099ff",
    },
    {
      text: "Seating",
      icon: <PiSeat size={24} className="sidebar-list-icon" />,
      path: "/settings/seating",
      color: "burlywood",
    },
    {
      text: "Air",
      icon: <PiFan size={24} className="sidebar-list-icon" />,
      path: "/settings/air",
      color: "aqua",
    },
    {
      text: "Lights",
      icon: <PiHeadlights size={24} className="sidebar-list-icon" />,
      path: "/settings/lights",
      color: "yellow",
    },
    {
      text: "Display",
      icon: <PiRectangle size={24} className="sidebar-list-icon" />,
      path: "/settings/display",
      color: "blue",
    },
    {
      text: "Services",
      icon: <PiWrench size={24} className="sidebar-list-icon" />,
      path: "/settings/services",
      color: "darkred",
    },
    {
      text: "Software",
      icon: <PiDownloadSimple size={24} className="sidebar-list-icon" />,
      path: "/settings/software",
      color: "purple",
    },
  ];

  const [isSettingOpened, setIsSettingOpened] = useState(false);

  return (
    <Box flex={1} p={2}>
      <Fab
        color="primary"
        size="small"
        aria-label="add"
        className="floating-button"
        sx={{ display: { xs: "flex", sm: "none" } }}
        onClick={() => setIsSettingOpened(!isSettingOpened)}
      >
        <MenuIcon />
      </Fab>
      <Box
        flex={2}
        p={2}
        sx={{
          display: { xs: isSettingOpened ? "block" : "none", sm: "block" },
        }}
      >
        <List className="sidebar-list">
          <ListSubheader
            component="div"
            id="nested-list-subheader"
            sx={{ color: "white", marginBottom: "30px" }}
          >
            <Typography variant="h4" component="h1">
              Settings
            </Typography>
          </ListSubheader>

          {menuItems.map((item) => (
            <ListItem key={item.text} disablePadding sx={{ marginBottom: 1 }}>
              <ListItemButton
                selected={location.pathname === item.path}
                component={Link}
                to={item.path}
                sx={{
                  borderRadius: 10,
                  color: location.pathname === item.path ? "white" : "inherit",
                  backgroundColor:
                    location.pathname === item.path
                      ? "rgba(0, 0, 0, 0.1)"
                      : "inherit",
                }}
              >
                <ListItemIcon
                  sx={{
                    color:
                      location.pathname === item.path ? item.color : "inherit",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
}

export default Sidebar;
