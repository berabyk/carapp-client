import React from "react";

import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import {
  BottomNavigation,
  BottomNavigationAction,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  DashboardOutlined,
  DriveEta,
  EventSeat,
  Navigation,
  PhoneIphoneOutlined,
  PlaceOutlined,
  SettingsSuggestOutlined,
  SmartDisplayOutlined,
  TuneOutlined,
} from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";
import { IoIosCog } from "react-icons/io";

function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleChange = (event: any, newValue: string) => {
    navigate(newValue);
  };
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <BottomNavigation
      showLabels={!isSmallScreen}
      value={location.pathname}
      onChange={handleChange}
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0, padding: "10px" }}
    >
      <BottomNavigationAction
        label="DASHBOARD"
        value="/"
        icon={<DashboardOutlined />}
        sx={{ "& .MuiBottomNavigationAction-label": { marginTop: 1 } }}
      />
      <BottomNavigationAction
        label="QUICK CONTROLS"
        value="/quickcontrol"
        icon={<TuneOutlined />}
        sx={{ "& .MuiBottomNavigationAction-label": { marginTop: 1 } }}
      />
      <BottomNavigationAction
        label="NAVIGATION"
        value="/navigation"
        icon={<PlaceOutlined />}
        sx={{ "& .MuiBottomNavigationAction-label": { marginTop: 1 } }}
      />
      <BottomNavigationAction
        label="PHONE"
        value="/phone"
        icon={<PhoneIphoneOutlined />}
        sx={{ "& .MuiBottomNavigationAction-label": { marginTop: 1 } }}
      />
      <BottomNavigationAction
        label="MEDIA"
        value="/media"
        icon={<SmartDisplayOutlined />}
        sx={{ "& .MuiBottomNavigationAction-label": { marginTop: 1 } }}
      />
      <BottomNavigationAction
        label="SETTINGS"
        value="/settings"
        icon={<SettingsSuggestOutlined />}
        sx={{ "& .MuiBottomNavigationAction-label": { marginTop: 1 } }}
      />
    </BottomNavigation>
  );
}

export default BottomNav;
