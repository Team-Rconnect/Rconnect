import {
  Box,
  Button,
  Card,
  CardMedia,
  Chip,
  Container,
  Divider,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Heading1 from "../../Common/Heading1";
import Loading from "../../Common/Loading";
import { borderDark, primary } from "../../Common/Pallete";
import PrimaryButton from "../../Common/PrimaryButton";
import Subtitle1 from "../../Common/Subtitle1";
import Subtitle2 from "../../Common/Subtitle2";
import TextButton from "../../Common/TextButton";
import Navbar from "../Navbar/Navbar";
import projectIcon from "../../Assets/project_icon.png";
import educationIcon from "../../Assets/education.png";
import Heading2 from "../../Common/Heading2";
import TextIconButton from "../../Common/TextIconButton";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function ProfileDetails() {
  const [user, setUser] = useState({});
  const [projects, setProjects] = useState([]);
  const [educations, setEducations] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [projectsViewCount, setProjectsViewCount] = useState(3);

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

  const fetchProjects = async () => {
    const response = await fetch(`http://localhost:5000/projects`);
    const json = await response.json();
    setProjects([...json]);
  };

  const fetchEducations = async () => {
    const response = await fetch(`http://localhost:5000/education`);
    const json = await response.json();
    setEducations([...json]);
  };

  const fetchExperiences = async () => {
    const response = await fetch(`http://localhost:5000/experience`);
    const json = await response.json();
    setExperiences([...json]);
  };

  const viewProjectsMore = () => {
    console.log(projects.length);
    let c =
      projects.length - projectsViewCount < 3 &&
      projects.length !== projectsViewCount
        ? projectsViewCount + (projects.length - projectsViewCount)
        : projectsViewCount + 3;
    setProjectsViewCount(c > projects.length ? 3 : c);
    console.log(c);
  };

  useEffect(() => {
    fetchUser(currentPath);
    fetchProjects();
    fetchEducations();
    fetchExperiences();
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
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  // backgroundColor: "#f1f1f1",
                  justifyContent: "space-between",
                  [bpSMd]: { justifyContent: "space-between" },
                }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    width: 100,
                    height: 100,
                    margin: "10px 0px 10px 20px",
                    borderRadius: "50%",
                    border: "2px solid " + primary,
                  }}
                  image={user.picture}
                  alt={user.picture}
                />

                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    // backgroundColor: "#fffccc",
                    margin: "15px 20px",
                  }}
                >
                  <Heading1 text={`${user.name?.first}  ${user.name?.last} `} />
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
                    >
                      1,043 Connections
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Card>
          {/* about */}
          <Card sx={{ marginBottom: "15px", padding: "15px 20px" }}>
            <Heading1 text={"About"} />
            <Subtitle1
              text={
                "I'm more experienced in eCommerce web projects and mobile banking apps, but also like to work with creative projects, such as landing pages or unsual corporate websites"
              }
            />
            <TextButton text={"SEE MORE"} />
          </Card>
          {/* skills */}
          <Card sx={{ marginBottom: "15px", padding: "15px 20px" }}>
            <Heading1 text={"Skills"} />
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
          <Card sx={{ marginBottom: "15px", padding: "15px 20px" }}>
            <Heading1 text={"Experience"} />
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
                      <Subtitle1
                        text={`${experience.company} - ${experience.position}`}
                      />
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
          {/* education */}
          <Card sx={{ marginBottom: "15px", padding: "15px 20px" }}>
            <Heading1 text={"Education"} />
            {educations &&
              educations.map((education, index) => {
                return (
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      marginTop: "20px",
                      justifyContent: "space-between",
                    }}
                    key={education.id}
                  >
                    <Box>
                      <CardMedia
                        component="img"
                        sx={{
                          width: 50,
                          height: 50,
                          borderRadius: "50%",
                        }}
                        image={educationIcon}
                        alt={educationIcon}
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
                      <Heading2 text={education.title} />
                      <Subtitle1
                        text={`${education.degree} ${education.field && "-"} ${
                          education.field
                        }`}
                      />
                      <Subtitle2
                        text={`${education.start_date} - ${education.end_date}`}
                      />
                      <Box sx={{ marginBottom: "10px" }}></Box>
                      {index !== educations.length - 1 && <Divider />}
                    </Box>
                  </Box>
                );
              })}
          </Card>
          {/* projects */}
          <Card sx={{ marginBottom: "15px", padding: "15px 20px" }}>
            <Heading1 text={"Projects"} />
            {projects &&
              projects.slice(0, projectsViewCount).map((project, index) => {
                return (
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      marginTop: "20px",
                      justifyContent: "space-between",
                    }}
                    key={project.id}
                  >
                    <Box>
                      <CardMedia
                        component="img"
                        sx={{
                          width: 50,
                          height: 50,
                          borderRadius: "50%",
                        }}
                        image={projectIcon}
                        alt={projectIcon}
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
                      <Heading2 text={project.title} />
                      <Subtitle1 text={project.description} />
                      <Subtitle2 text={"Jun 2016 - Present"} />
                      <Box sx={{ display: "flex", marginBottom: "10px" }}>
                        <TextButton text={"View project"} />
                      </Box>
                      {index !== projectsViewCount - 1 && <Divider />}
                    </Box>
                  </Box>
                );
              })}
            <TextIconButton
              text={
                projectsViewCount >= projects.length ? "SEE LESS" : "SEE MORE"
              }
              onClick={viewProjectsMore}
              endIcon={
                projectsViewCount >= projects.length ? (
                  <KeyboardArrowUpIcon size={20} />
                ) : (
                  <KeyboardArrowDownIcon fontSize="large" />
                )
              }
            />
          </Card>
        </Container>
      )}
    </div>
  );
}

export default ProfileDetails;
