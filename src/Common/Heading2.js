import { Typography } from "@mui/material";
import React from "react";

function Heading2(props) {
  return (
    <Typography
      gutterBottom
      variant="body1"
      sx={{
        fontSize: "16px",
        fontWeight: "550",
        textTransform: "capitalize",
        color: "rgba(0, 0, 0, 0.8)",
        margin: "0px",
        marginRight: "10px",
      }}
    >
      {props.text}
    </Typography>
  );
}

export default Heading2;
