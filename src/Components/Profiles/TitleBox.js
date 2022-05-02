import { Box, Typography } from "@mui/material";
import React from "react";
import Heading1 from "../../Common/Heading1";
import { primary } from "../../Common/Pallete";
import Subtitle1 from "../../Common/Subtitle1";
import Subtitle2 from "../../Common/Subtitle2";

/*
connections: 0
education: []
experience: []
firstName: "alia"
lastName: "bhatt"
projects: []
skills: []
userImage: "uploads/2022-04-09T18:11:31.546Zpic6.jpeg"
__v: 0
_id: "6251cc535610b807f1ab2ce1"
*/
function TitleBox(props) {
  return (
    <Box>
      <Heading1 text={`${props.user.firstName}  ${props.user.lastName}`} />
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
      <Subtitle1 text={props.user.gender || "- -"} />
      <Subtitle2
        text={`${props.user.branch || "- -"}, ${props.user.year || "- -"}`}
      />
    </Box>
  );
}

export default TitleBox;
