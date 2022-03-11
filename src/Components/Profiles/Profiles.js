import React, { useContext } from "react";
import Navbar from "../Navbar/Navbar";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Container,
  Typography,
  Chip,
} from "@mui/material";
import UsersContext from "../../Context/UsersContext";
import { borderLight, primary } from "../../Common/Pallete";

function Profiles() {
  const userCtx = useContext(UsersContext);
  console.log(userCtx.users);

  return (
    <div>
      <Navbar />
      {!userCtx.users ? (
        <p>Loading ...</p>
      ) : (
        <Container maxWidth="md" sx={{ paddingTop: "100px" }}>
          {userCtx.users.map((user, index) => (
            <Card
              sx={{
                display: "flex",
                marginBottom: "10px",
                boxShadow: "0 0 10px -2px #d1e3fa",
                border: 1,
                borderColor: borderLight,
                borderRadius: "10px",
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale3d(1.02, 1.02, 0.5)",
                  boxShadow: "0 0 15px -2px #D4D9E2",
                  color: primary,
                  cursor: "pointer",
                },
              }}
              key={index}
            >
              <CardMedia
                component="img"
                sx={{ width: 151 }}
                image={user.picture.large}
                alt="Live from space album cover"
              />
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "start",
                  }}
                >
                  <CardContent>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <Typography
                        variant="body1"
                        sx={{
                          fontSize: "16px",
                          fontWeight: "550",
                          color: "rgba(0, 0, 0, 0.8)",
                        }}
                      >{`${user.name.first}  ${user.name.last}`}</Typography>
                      <Typography
                        variant="subtitle1"
                        sx={{ fontSize: "14px" }}
                        color="text.primary"
                      >
                        {user.email}
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        sx={{ fontSize: "12px" }}
                        color="text.secondary"
                      >
                        {`${user.location.city}, ${user.location.country}`}
                      </Typography>
                    </Box>
                  </CardContent>
                  <CardContent>
                    <Button
                      variant="outlined"
                      sx={{
                        borderRadius: "30px",
                        border: 2,
                        fontWeight: "500",
                        textTransform: "none",
                        "&:hover": {
                          border: 2,
                        },
                      }}
                    >
                      View Profile
                    </Button>
                  </CardContent>
                </Box>
                <CardContent>
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
                  ].map((tag, index) => {
                    return (
                      <Chip
                        key={index}
                        variant="outlined"
                        color="info"
                        size="small"
                        label={tag}
                        sx={{ margin: "2px" }}
                      />
                    );
                  })}
                </CardContent>
              </Box>
            </Card>
          ))}
        </Container>
      )}
    </div>
  );
}

export default Profiles;
