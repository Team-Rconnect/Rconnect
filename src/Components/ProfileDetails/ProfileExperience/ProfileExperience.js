import {
  Box,
  Card,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Divider,
  IconButton,
  TextField,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import BootstrapDialogTitle from "../../../Common/BootstrapDialogTitle";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import AddIcon from "@mui/icons-material/Add";
import Heading1 from "../../../Common/Heading1";
import Heading2 from "../../../Common/Heading2";
import PrimaryButton from "../../../Common/PrimaryButton";
import Subtitle1 from "../../../Common/Subtitle1";
import Subtitle2 from "../../../Common/Subtitle2";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";

function ProfileExperience() {
  const [experiences, setExperiences] = useState([]);
  const [isProfile, setIsProfile] = useState(true);
  const [isExperienceDetails, setIsExperienceDetails] = useState(false);
  const [open, setOpen] = useState(false);
  const [experience, setExperience] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const theme = useTheme();
  const bpSMd = theme.breakpoints.down("sm"); //max-width:599.95px

  const fetchExperiences = async () => {
    const response = await fetch(`http://localhost:5000/experience`);
    const json = await response.json();
    setExperiences([...json]);
  };

  const handleChange = (event) => {
    setExperience(event.target.value);
  };

  const editExperience = () => {
    setExperience("");
    console.log(location.pathname);
    navigate(`${location.pathname}/details/experience`);
    // setOpen(true);
  };

  useEffect(() => {
    fetchExperiences();
  }, []);

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
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {isProfile && location.pathname.includes("experience") && (
              <>
                <IconButton onClick={() => navigate(-1)}>
                  <KeyboardBackspaceIcon />
                </IconButton>
                <Box sx={{ width: "10px" }}></Box>
              </>
            )}
            <Heading1 text={"Experience"} />
          </Box>
          {isProfile && (
            <Box>
              {isProfile && !location.pathname.includes("experience") ? (
                <>
                  <IconButton>
                    <AddIcon />
                  </IconButton>
                  <IconButton onClick={editExperience}>
                    <ModeEditOutlinedIcon />
                  </IconButton>
                </>
              ) : (
                <IconButton>
                  <AddIcon />
                </IconButton>
              )}
            </Box>
          )}
        </Box>
        {experiences &&
          experiences.map((experience, index) => {
            return (
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  marginTop: "20px",
                  justifyContent: "space-between",
                }}
                key={experience.id}
              >
                <Box>
                  <CardMedia
                    component="img"
                    sx={{
                      width: 50,
                      height: 50,
                      objectFit: "contain",
                      [bpSMd]: { width: 30, height: 30 },
                    }}
                    image={experience.imageURL}
                    alt={experience.imageURL}
                  />
                </Box>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    // backgroundColor: "#fffccc",
                    margin: "0px 20px",
                  }}
                >
                  <Heading2 text={experience.title} />
                  <Box sx={{ height: "4px" }}></Box>
                  <Subtitle1
                    text={`${experience.company} - ${experience.position}`}
                  />
                  <Box sx={{ height: "4px" }}></Box>
                  <Subtitle2
                    text={`${experience.start_date} - ${experience.end_date}`}
                  />
                  <Box sx={{ marginBottom: "10px" }}></Box>
                  {index !== experiences.length - 1 && <Divider />}
                </Box>
              </Box>
            );
          })}
      </Card>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        scroll={"paper"}
        aria-labelledby="title"
        aria-describedby="description"
      >
        <BootstrapDialogTitle id="title" onClose={() => setOpen(false)}>
          Edit Experience
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
            value={experience}
            onChange={handleChange}
            placeholder="Enter your experience..."
          />
        </DialogContent>
        <DialogActions sx={{ margin: "8px" }}>
          <PrimaryButton text="Save" />
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ProfileExperience;
