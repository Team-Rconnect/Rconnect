import {
  Box,
  Card,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  IconButton,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Heading1 from "../../Common/Heading1";
import Subtitle1 from "../../Common/Subtitle1";
import TextButton from "../../Common/TextButton";
import Subtitle2 from "../../Common/Subtitle2";
import PrimaryButton from "../../Common/PrimaryButton";
import BootstrapDialogTitle from "../../Common/BootstrapDialogTitle";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
import { useLocation } from "react-router-dom";

function ProfileAbout() {
  const [isProfile, setIsProfile] = useState(false);
  const [open, setOpen] = useState(false);
  const [about, setAbout] = useState("");
  const [aboutLen, setAboutLen] = useState(0);

  const location = useLocation();
  const userId = location.pathname.split("/")[2];

  const fetchAbout = async () => {
    setIsProfile(userId === localStorage.getItem("userID"));
    const response = await fetch(`http://localhost:3001/users/${userId}`);
    const json = await response.json();
    console.log(json.about);
    setAbout(json.about);
    setAboutLen(json.about.length);
  };

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
    // setAbout("");
    setOpen(true);
  };

  useEffect(() => {
    fetchAbout();
  }, []);

  return (
    <>
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
            {isProfile && (
              <IconButton onClick={editAbout}>
                <ModeEditOutlinedIcon />
              </IconButton>
            )}
          </Box>
          <Box sx={{ height: "5px" }}></Box>
          <Subtitle1 text={about ? about : ""} />
          {/* <TextButton text={"SEE MORE"} /> */}
        </Card>
      </div>
      <Dialog
        open={open}
        onClose={() => {
          setOpen(false);
          fetchAbout();
        }}
        scroll={"paper"}
        aria-labelledby="title"
        aria-describedby="description"
      >
        <BootstrapDialogTitle
          id="title"
          onClose={() => {
            setOpen(false);
            fetchAbout();
          }}
        >
          Edit About
        </BootstrapDialogTitle>
        {/* <DialogTitle id="title">Edit About</DialogTitle> */}
        <DialogContent dividers={true}>
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
        </DialogContent>
        <DialogActions sx={{ margin: "8px" }}>
          <PrimaryButton text="Save" onClick={handleSave} />
        </DialogActions>
      </Dialog>
    </>
  );
}

export default ProfileAbout;
