"use client";
import { Button } from "@mui/material";
import styled from "styled-components";

export const HomeButton = styled(Button)`
  color: blue;
  border: 1px solid black;
  width: 200px;
  &:hover {
    color: red;
  }
`;

export const HomeButton2 = styled(Button)({
  color: "green",
  border: "1px solid black",
  width: "200px",
});

export const HomeButton3 = styled(Button)(({ theme }) => ({
  color: theme?.palette?.primary?.main,
  backgroundColor: theme?.palette?.primary?.main,
  border: "1px solid black",
  width: "200px",
}));

import React from "react";

export default function HomeButtonComponent() {
  return (
    <Button
      variant="contained"
      sx={(theme) => ({
        backgroundColor: theme.palette.secondary.main,
      })}
    >
      Contained
    </Button>
  );
}

