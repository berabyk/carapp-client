import styled from '@emotion/styled';
import { Box } from '@mui/material';
import React, { Children } from 'react'


const StyledBox = styled(Box)(({ theme }) => ({
    backgroundColor: "rgb(30, 29, 34)",
    color: "#ffffff",
    borderRadius: "50px",
    padding: "10px 20px",
    textAlign: "center",
    fontWeight: "medium",
    fontSize: "1rem",
    boxShadow:"-5px 5px 7px -2px #2e319b",
    transition: "background-color 0.3s ease",
    "&:hover": {
      backgroundColor: "#2e319b",
    },
  }));

function TextBox(props: any) {
  return (
    <StyledBox>{props.children}</StyledBox>
  )
}

export default TextBox;