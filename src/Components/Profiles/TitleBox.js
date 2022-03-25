import { Box, Typography } from "@mui/material";
import React from "react";
import { primary } from "../../Common/Pallete";

function TitleBox(props) {
  return (
    <Box>
      <Typography
        variant="body1"
        sx={{
          fontSize: "16px",
          fontWeight: "550",
          color: "rgba(0, 0, 0, 0.8)",
          "&:hover": {
            color: primary,
            cursor: "pointer",
          },
        }}
      >{`${props.user.name.first}  ${props.user.name.last}`}</Typography>
      <Typography
        variant="subtitle1"
        sx={{ fontSize: "14px" }}
        color="text.primary"
      >
        {props.user.email}
      </Typography>
      <Typography
        variant="subtitle2"
        sx={{ fontSize: "12px" }}
        color="text.secondary"
      >
        {`${props.user.location.city}, ${props.user.location.country}`}
      </Typography>
    </Box>
  );
}

export default TitleBox;
