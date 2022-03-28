import { Typography } from "@mui/material";
import React from "react";

function Subtitle1(props) {
  return (
    <Typography
      variant="subtitle1"
      color="text.primary"
      sx={{ fontSize: "14px" }}
    >
      {props.text}
    </Typography>
  );
}

export default Subtitle1;
