import { Box, Typography } from "@mui/material";
import React from "react";
import Heading1 from "../../Common/Heading1";
import { primary } from "../../Common/Pallete";
import Subtitle1 from "../../Common/Subtitle1";
import Subtitle2 from "../../Common/Subtitle2";

function TitleBox(props) {
  return (
    <Box>
      <Heading1 text={`${props.user.name.first}  ${props.user.name.last}`} />
      {/* <Typography
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
      >{`${props.user.name.first}  ${props.user.name.last}`}</Typography> */}
      <Subtitle1 text={props.user.email} />
      <Subtitle2
        text={`${props.user.location.city}, ${props.user.location.country}`}
      />
    </Box>
  );
}

export default TitleBox;
