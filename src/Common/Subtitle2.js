import { Typography } from "@mui/material";
import React from "react";

function Subtitle2(props) {
  return (
    <Typography
      variant="subtitle2"
      color="text.secondary"
      sx={{ fontSize: "12px" }}
    >
      {props.text}
    </Typography>
  );
}

export default Subtitle2;
