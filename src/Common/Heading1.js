import { Typography } from "@mui/material";
import React from "react";

function Heading1(props) {
  return (
    <Typography
      // gutterBottom
      variant="h1"
      sx={{
        fontSize: "18px",
        textTransform: "capitalize",
        marginRight: "10px",
      }}
    >
      {props.text}
    </Typography>
  );
}

export default Heading1;
