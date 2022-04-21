import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Card,
  CardMedia,
  Grid,
} from "@mui/material";
import React, { useContext } from "react";
import AddIcon from "@mui/icons-material/Add";
import Navbar from "../Navbar/Navbar";
import HeadingMD from "../../Common/HeadingMD.js";
import { primary } from "../../Common/Pallete";
import { useTheme } from "@mui/system";
import Heading1 from "../../Common/Heading1";
import Subtitle1 from "../../Common/Subtitle1";
// import PrimaryButton from "../../Common/PrimaryButton";
import UsersContext from "../../Context/UsersContext";

function Groups() {
  //   const theme = useTheme();
  //   const bpSMd = theme.breakpoints.down("sm");
  const userCtx = useContext(UsersContext);
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
        <Box sx={{ marginTop: "30px" }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12, lg: 16 }}
          >
            {Array.from(Array(15)).map((_, index) => (
              <Grid item xs={4} sm={4} md={4} lg={4} key={index}>
                <Card>
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
                      <Heading1 text={"Interns 2021 Rgukt sklm"} />
                      <Box sx={{ height: "5px" }}></Box>
                      <Subtitle1
                        text={
                          "Freelance UX/UI designer, 80+ projects in web design, mobile apps (ios & android) and creative projects. Open to offers"
                        }
                      />
                      <Box sx={{ display: "flex", margin: "10px 0px" }}>
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
