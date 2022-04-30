import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Card,
  CardMedia,
  Grid,
} from "@mui/material";
import React, { useEffect, useState, useContext } from "react";
import AddIcon from "@mui/icons-material/Add";
import Navbar from "../Navbar/Navbar";
import HeadingMD from "../../Common/HeadingMD.js";
import { primary } from "../../Common/Pallete";
import Heading1 from "../../Common/Heading1";
import { useNavigate } from "react-router-dom";
import styles from "../Groups/Groups.module.css";
import Subtitle1 from "../../Common/Subtitle1";
// import PrimaryButton from "../../Common/PrimaryButton";
import UsersContext from "../../Context/UsersContext";

function Groups() {
  //   const theme = useTheme();
  //   const bpSMd = theme.breakpoints.down("sm");
  const [groups, setGroups] = useState([]);
  const userCtx = useContext(UsersContext);
  const navigate = useNavigate();

  const fetchGroups = async () => {
    const response = await fetch(`http://localhost:5000/groups`);
    const json = await response.json();
    setGroups([...json]);
  };

  const openGroup = (id) => {
    navigate(`/users/${localStorage.getItem("userId")}/groups/${id}`);
  };

  useEffect(() => {
    fetchGroups();
  }, []);

  return (
    <div>
      <Navbar />
      <Box sx={{ padding: "25px" }}>
        {/* Header and create button */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <HeadingMD text="Groups" />
            <Box
              sx={{
                height: "4px",
                width: "60px",
                margin: "5px 0px 4px 0px",
                backgroundColor: primary,
              }}
            ></Box>
            <Box
              sx={{
                height: "4px",
                width: "35px",
                backgroundColor: primary,
              }}
            ></Box>
          </Box>
          <Button variant="contained" startIcon={<AddIcon />}>
            Create group
          </Button>
        </Box>
        {/* Groups list */}
        <Box sx={{ marginTop: "30px" }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12, lg: 16 }}
          >
            {groups.map((group, index) => (
              <Grid
                item
                xs={4}
                sm={4}
                md={4}
                lg={4}
                key={index}
                className={styles.grid}
              >
                <Card onClick={() => openGroup(group.id)}>
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
                      // bgcolor: "yellow",
                    }}
                  >
                    <Box
                      sx={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        // alignItems: "stretch",
                        // padding: "10px 20px",
                      }}
                    >
                      <Heading1 text={group.name} />
                      <Box sx={{ height: "5px" }}></Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-between",
                          alignItems: "stretch",
                          // bgcolor: "red",
                        }}
                      >
                        <Subtitle1
                          text={
                            "Freelance UX/UI designer, 80+ projects in web design, mobile apps (ios & android) and creative projects. Open to offers"
                          }
                        />
                        <Box
                          sx={{
                            display: "flex",
                            margin: "10px 0px",
                          }}
                        >
                          <AvatarGroup
                            total={userCtx.users && userCtx.users.length}
                          >
                            {userCtx.users &&
                              userCtx.users.map((user, index) => (
                                <Avatar
                                  src={user.picture}
                                  sx={{ bgcolor: primary }}
                                />
                              ))}
                          </AvatarGroup>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </div>
  );
}

export default Groups;
