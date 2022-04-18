import { Box, Card, CardMedia, Chip, Container, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Heading1 from "../../Common/Heading1";
import Loading from "../../Common/Loading";
import { borderDark, primary } from "../../Common/Pallete";
import PrimaryButton from "../../Common/PrimaryButton";
import Subtitle1 from "../../Common/Subtitle1";
import Navbar from "../Navbar/Navbar";
import ProfileAbout from "./ProfileAbout";
import ProfileExperience from "./ProfileExperience/ProfileExperience";
import ProfileEducation from "./ProfileEducation/ProfileEducation";
import ProfileProjects from "./ProfileProjects/ProfileProjects";

function ProfileDetails() {
  const [user, setUser] = useState({});
  const location = useLocation();
  const currentPath = location.pathname.split("/")[2];

  const theme = useTheme();
  const bpSMd = theme.breakpoints.down("sm"); //max-width:599.95px
  // const bpSMu = theme.breakpoints.up("sm"); //min-width:600px
  // const bpMDd = theme.breakpoints.down("md"); //max-width:899.95px
  // const bpMDu = theme.breakpoints.up("md"); //min-width:900px
  // const bpXLd = theme.breakpoints.down("xl"); //max-width:1535.95px
  // const bpXLu = theme.breakpoints.up("xl"); //min-width:1536px

  const fetchUser = async (username) => {
    console.log(username);
    const response = await fetch(
      `http://localhost:5000/users/?username=${username}`
    );
    const json = await response.json();
    setUser({ ...json[0] });
  };

  useEffect(() => {
    fetchUser(currentPath);
  }, [currentPath]);

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
                    image={user.picture}
                    alt={user.picture}
                  />
                </Box>

                <Heading1 text={`${user.name?.first}  ${user.name?.last} `} />
                <Box sx={{ height: "5px" }}></Box>
                <Subtitle1
                  text={
                    "Freelance UX/UI designer, 80+ projects in web design, mobile apps (ios & android) and creative projects. Open to offers"
                  }
                />
                <Box sx={{ display: "flex", margin: "10px 0px" }}>
                  <PrimaryButton text={"Contact Info"} />
                  {/* <Button
                    variant="outlined"
                    sx={{ textTransform: "none" }}
                    size="small"
                  >
                    1,043 Connections
                  </Button> */}
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
    </div>
  );
}

export default ProfileDetails;
