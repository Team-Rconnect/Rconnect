import { IconButton } from "@mui/material";
import React from "react";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";

function EditIconBtn(props) {
  return (
    <IconButton onClick={props.onClick}>
      <ModeEditOutlinedIcon />
    </IconButton>
  );
}

export default EditIconBtn;
