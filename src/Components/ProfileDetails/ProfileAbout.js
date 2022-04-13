import {
  Box,
  Button,
  Card,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  TextField,
} from "@mui/material";
import PropTypes from "prop-types";
import React, { useState } from "react";
import EditIconBtn from "../../Common/EditIconBtn";
import Heading1 from "../../Common/Heading1";
import Subtitle1 from "../../Common/Subtitle1";
import TextButton from "../../Common/TextButton";
import Subtitle2 from "../../Common/Subtitle2";
import PrimaryButton from "../../Common/PrimaryButton";
import CloseIcon from "@mui/icons-material/Close";

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

function ProfileAbout() {
  const [isProfile, setIsProfile] = useState(true);
  const [open, setOpen] = useState(false);
  const [about, setAbout] = useState("");
  const [aboutLen, setAboutLen] = useState(0);

  const handleChange = (event) => {
    setAbout(event.target.value);
    setAboutLen(event.target.value.length);
  };

  const handleSave = () => {
    if (aboutLen !== 0) {
      setOpen(false);
    }
  };

  const editAbout = () => {
    setOpen(true);
  };
  return (
    <div>
      <Card sx={{ marginBottom: "15px", padding: "15px 20px" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Heading1 text={"About"} />
          {isProfile && <EditIconBtn onClick={editAbout} />}
        </Box>
        <Box sx={{ height: "5px" }}></Box>
        <Subtitle1
          text={
            "I'm more experienced in eCommerce web projects and mobile banking apps, but also like to work with creative projects, such as landing pages or unsual corporate websites"
          }
        />
        <TextButton text={"SEE MORE"} />
      </Card>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        scroll={"paper"}
        aria-labelledby="title"
        aria-describedby="description"
      >
        <BootstrapDialogTitle id="title" onClose={() => setOpen(false)}>
          Edit About
        </BootstrapDialogTitle>
        {/* <DialogTitle id="title">Edit About</DialogTitle> */}
        <DialogContent dividers="true">
          <DialogContentText id="description" tabIndex={-1}>
            <Subtitle1 text="You can write about your years of experience, industry, or skills. People also talk about their achievements or previous job experiences." />
            <Box sx={{ height: "20px" }}></Box>

            <TextField
              id="outlined-multiline-static"
              multiline
              fullWidth
              rows={6}
              inputProps={{ maxLength: 300 }}
              value={about}
              onChange={handleChange}
              placeholder="Enter your about..."
            />
            <Box sx={{ display: "flex", justifyContent: "end" }}>
              <Subtitle2 text={`${aboutLen} / 300`} />
            </Box>
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ margin: "8px" }}>
          <PrimaryButton text="Save" onClick={handleSave} />
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ProfileAbout;
