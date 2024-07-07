import { WbSunnyOutlined } from "@mui/icons-material";
import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";

function NotificationCenter() {
  function getCurrentTime() {
    const date = new Date();
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;
    hours = hours ? hours : 12;
    const minutesStr = minutes < 10 ? "0" + minutes : minutes;

    const strTime = `${hours}:${minutesStr} ${ampm}`;
    return strTime;
  }

  function getCurrentDate() {
    const date = new Date();
    const day = date.getDate();
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const month = monthNames[date.getMonth()];
    return `${month} ${day}`;
  }
  

  const [time, setTime] = useState(getCurrentTime());
  const [date, setDate] = useState(getCurrentDate());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(getCurrentTime());
      setDate(getCurrentDate());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Grid container paddingInline={4} alignItems="center" height="100%">
      <Grid item xs={5} textAlign="start">
        {date} <WbSunnyOutlined sx={{fontSize:"14px"}}/> 18°C
      </Grid>
      <Grid item xs={2} textAlign="center">
        {time}
      </Grid>
      <Grid item xs={5} textAlign="end">
        Battery
      </Grid>
    </Grid>
  );
}

export default NotificationCenter;
