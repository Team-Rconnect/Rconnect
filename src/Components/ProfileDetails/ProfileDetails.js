import {
  Box,
  Card,
  CardMedia,
  Chip,
  Container,
  useTheme,
  Dialog,
  DialogActions,
  DialogContent,
  Slider,
  Button,
  useMediaQuery,
  TextField,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import "../../Common/ImagePick.css";
import Cropper from "react-easy-crop";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Heading1 from "../../Common/Heading1";
import Loading from "../../Common/Loading";
import { borderDark, primary } from "../../Common/Pallete";
import PrimaryButton from "../../Common/PrimaryButton";
import Subtitle1 from "../../Common/Subtitle1";
import Navbar from "../Navbar/Navbar";
import ProfileAbout from "./ProfileAbout";
import ProfileIcon from "../../Assets/profile.png";
import BootstrapDialogTitle from "../../Common/BootstrapDialogTitle";
import ProfileExperience from "./ProfileExperience/ProfileExperience";
import ProfileEducation from "./ProfileEducation/ProfileEducation";
import ProfileProjects from "./ProfileProjects/ProfileProjects";
import { generateDownload } from "../../Common/cropImage";

function ProfileDetails() {
  const [user, setUser] = useState({});
  const [open, setOpen] = useState(false);
  const [openAddTo, setOpenAddTo] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname.split("/")[2];

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const bpSMd = theme.breakpoints.down("sm"); //max-width:599.95px
  // const bpSMu = theme.breakpoints.up("sm"); //min-width:600px
  // const bpMDd = theme.breakpoints.down("md"); //max-width:899.95px
  // const bpMDu = theme.breakpoints.up("md"); //min-width:900px
  // const bpXLd = theme.breakpoints.down("xl"); //max-width:1535.95px
  // const bpXLu = theme.breakpoints.up("xl"); //min-width:1536px

  const inputRef = React.useRef();

  const triggerFileSelectPopup = () => inputRef.current.click();

  const [image, setImage] = React.useState(null);
  const [croppedArea, setCroppedArea] = React.useState(null);
  const [crop, setCrop] = React.useState({ x: 0, y: 0 });
  const [zoom, setZoom] = React.useState(1);
  const [groups, setGroups] = useState([]);
  const [searchGroup, setSearchGroup] = useState("");

  const onCropComplete = (croppedAreaPercentage, croppedAreaPixels) => {
    setCroppedArea(croppedAreaPixels);
  };

  const onSelectFile = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.addEventListener("load", () => {
        setImage(reader.result);
      });
    }
  };

  const onDownload = () => {
    setImage(image);
    setOpen(false);
    generateDownload(image, croppedArea);
  };

  const fetchUser = async (userId) => {
    // console.log(userId);
    const response = await fetch(`http://localhost:3001/users/${userId}`);
    const json = await response.json();
    console.log(json);
    setUser({ ...json });
  };

  const fetchGroups = async () => {
    const response = await fetch(`http://localhost:5000/groups`);
    const data = await response.json();
    // console.log(data, "data from db.json");
    setGroups(data);
  };

  const openImage = () => {
    setOpen(true);
    setImage(user.picture || ProfileIcon);
  };

  useEffect(() => {
    fetchUser(currentPath);
    fetchGroups();
  }, []);

  return (
    <div>
      <Navbar />
      {!user ? (
        <Loading />
      ) : (
        <Container maxWidth="md" sx={{ marginTop: "40px" }}>
          {/* banner */}
          <Card sx={{ marginBottom: "15px" }}>
            <CardMedia
              component="img"
              height="140"
              image="https://i.pinimg.com/originals/98/24/3b/98243bd48c963ca65580c5b6fb93be1f.jpg"
              alt="green iguana"
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                padding: "15px 20px",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  // padding: "10px 20px",
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    height: 60,
                    [bpSMd]: { height: 35 },
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      width: 100,
                      height: 100,
                      // margin: "10px 0px 10px 20px",
                      borderRadius: "50%",
                      position: "absolute",
                      top: -60,
                      left: 0,
                      border: "2px solid " + primary,
                      [bpSMd]: { width: 80, height: 80 },
                    }}
                    image={image ? image : user.picture || ProfileIcon}
                    alt={user.picture}
                    onClick={openImage}
                  />
                </Box>

                <Heading1
                  text={`${user.firstName || "-"}  ${user.lastName || "-"}`}
                />
                <Box sx={{ height: "5px" }}></Box>
                <Subtitle1
                  text={
                    "Freelance UX/UI designer, 80+ projects in web design, mobile apps (ios & android) and creative projects. Open to offers"
                  }
                />
                <Box sx={{ display: "flex", margin: "10px 0px" }}>
                  <PrimaryButton text={"Contact Info"} />
                  <Button
                    variant="outlined"
                    sx={{ textTransform: "none" }}
                    size="small"
                    onClick={() => setOpenAddTo(true)}
                  >
                    Add to
                  </Button>
                </Box>
              </Box>
            </Box>
          </Card>
          {/* about */}
          <ProfileAbout />
          {/* skills */}
          <Card sx={{ marginBottom: "15px", padding: "15px 20px" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Heading1 text={"Skills"} />
              {/* {isProfile && <EditIconBtn onClick={editSkills} />} */}
            </Box>
            <Box sx={{ margin: "15px 0px" }}>
              {[
                "#webdesign",
                "#COA",
                "programming",
                "#competitiveprogramming",
                "#AI",
                "#ML",
                "#appdesign",
                "#networking",
                "#reactjs",
                "#flutter",
                "#ML",
                "#appdesign",
                "#networking",
                "#reactjs",
                "#flutter",
              ].map((tag, index) => {
                return (
                  <Chip
                    key={index}
                    size="small"
                    label={tag}
                    sx={{
                      margin: "5px",
                      cursor: "pointer",
                      fontSize: "14px",
                      letterSpacing: 0.5,
                      backgroundColor: "white",
                      border: "1px solid " + borderDark,
                      "&:hover": {
                        backgroundColor: primary,
                        color: "white",
                      },
                    }}
                  />
                );
              })}
            </Box>
          </Card>
          {/* experience */}
          <ProfileExperience />
          {/* education */}
          <ProfileEducation />
          {/* projects */}
          <ProfileProjects />
        </Container>
      )}
      {/* profile pic dialog */}
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        scroll={"paper"}
        fullScreen={fullScreen}
        fullWidth={true}
        maxWidth="sm"
        aria-labelledby="title"
        aria-describedby="description"
      >
        <BootstrapDialogTitle id="title" onClose={() => setOpen(false)}>
          Edit Image
        </BootstrapDialogTitle>
        {/* <DialogTitle id="title">Edit About</DialogTitle> */}
        <DialogContent dividers={true}>
          <div className="container">
            <div className="container-cropper">
              {image ? (
                <>
                  <div className="cropper">
                    <Cropper
                      image={image}
                      crop={crop}
                      zoom={zoom}
                      aspect={1}
                      objectFit="contain"
                      cropShape="round"
                      onCropChange={setCrop}
                      onZoomChange={setZoom}
                      onCropComplete={onCropComplete}
                    />
                  </div>
                </>
              ) : null}
            </div>
          </div>
        </DialogContent>
        <DialogActions sx={{ margin: "8px" }}>
          <input
            type="file"
            accept="image/*"
            ref={inputRef}
            onChange={onSelectFile}
            style={{ display: "none" }}
          />
          <Button
            variant="outlined"
            color="primary"
            size="small"
            onClick={triggerFileSelectPopup}
          >
            Change
          </Button>
          {/* <Button variant="contained" color="secondary">
            Download
          </Button> */}
          <PrimaryButton text="Save" onClick={onDownload} />
        </DialogActions>
      </Dialog>
      {/* add to dialog */}
      <Dialog
        open={openAddTo}
        onClose={() => setOpenAddTo(false)}
        scroll={"paper"}
        fullScreen={fullScreen}
        fullWidth={true}
        maxWidth="sm"
        aria-labelledby="title"
        aria-describedby="description"
      >
        <BootstrapDialogTitle id="title" onClose={() => setOpenAddTo(false)}>
          Add to group
        </BootstrapDialogTitle>
        {/* <DialogTitle id="title">Edit About</DialogTitle> */}
        <DialogContent dividers={true}>
          <TextField
            placeholder="Search..."
            value={searchGroup}
            fullWidth={true}
            size="small"
            onChange={(e) => setSearchGroup(e.target.value)}
          />

          {groups
            .filter((group) => {
              if (searchGroup === "") {
                return group;
              } else if (
                group.name.toLowerCase().includes(searchGroup.toLowerCase())
              ) {
                return group;
              }
            })
            .map((val, key) => {
              return (
                <List
                  sx={{
                    width: "100%",
                    bgcolor: "background.paper",
                  }}
                >
                  <ListItem
                    alignItems="flex-start"
                    sx={{
                      "&:hover": {
                        border: "1px solid " + primary,
                        // boxShadow: "0 0 15px -2px #D4D9E2",
                        boxSizzing: "border-box",
                      },
                    }}
                  >
                    <ListItemText primary={val.name} />
                  </ListItem>
                </List>
              );
            })}
        </DialogContent>
        <DialogActions sx={{ margin: "8px" }}>
          <PrimaryButton text="Save" onClick={onDownload} />
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ProfileDetails;
