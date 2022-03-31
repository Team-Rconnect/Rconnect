import { Typography } from "@mui/material";
import React from "react";

function Subtitle3(props) {
  return (
    <Typography
      variant="subtitle2"
      color="text.primary"
      sx={{ fontSize: "12px", fontWeight: "600" }}
    >
      {props.text}
    </Typography>
  );
}

export default Subtitle3;
