"use client";
import { useTheme } from "@mui/material";
import React from "react";

function Heading() {
  const theme = useTheme();
  return (
    <div>
      <h1 id="rc" style={{ color: theme.palette.primary.main }}>
        Recommended Products
      </h1>
    </div>
  );
}

export default Heading;
