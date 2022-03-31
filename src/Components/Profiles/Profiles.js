import React, { useContext } from "react";
import Navbar from "../Navbar/Navbar";
import {
  Box,
  Card,
  CardMedia,
  Container,
  useTheme,
  Button,
  Chip,
  CardContent,
} from "@mui/material";
import UsersContext from "../../Context/UsersContext";
import { borderDark, borderLight, primary } from "../../Common/Pallete";
import TitleBox from "./TitleBox";
import { useNavigate } from "react-router-dom";
import Loading from "../../Common/Loading";
import Filters from "../Filters/Filters";

function Profiles() {
  const userCtx = useContext(UsersContext);
  // console.log(userCtx.users);
  const theme = useTheme();
  const navigate = useNavigate();
  const bpSMd = theme.breakpoints.down("sm"); //max-width:599.95px
  const bpSMu = theme.breakpoints.up("sm"); //min-width:600px
  const bpMDd = theme.breakpoints.down("md"); //max-width:899.95px
  const bpMDu = theme.breakpoints.up("md"); //min-width:900px
  const bpXLd = theme.breakpoints.down("xl"); //max-width:1535.95px
  const bpXLu = theme.breakpoints.up("xl"); //min-width:1536px
  // console.log(bpSMd, bpSMu, bpMDd, bpMDu, bpXLd, bpXLu);

  const viewProfile = (username) => {
    console.log(username);
    navigate(`/users/${username}`);
  };
  return (
    <div>
      <Navbar />
      {!userCtx.users ? (
        <Loading />
      ) : (
        <Container sx={{ paddingTop: "100px", display: "flex" }}>
          <Filters />
          <Container>
            {userCtx.users.map((user, index) => (
              <Card
                sx={{
                  display: "flex",
                  marginBottom: "10px",
                  padding: "5px",
                  boxShadow: "0 0 10px -2px #d1e3fa",
                  border: 1,
                  borderColor: borderLight,
                  borderRadius: "10px",
                  fontFamily: "Gordita",
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    border: "1px solid " + primary,
                    boxShadow: "0 0 15px -2px #D4D9E2",
                    color: primary,
                  },
                }}
                key={index}
              >
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
                        width: 70,
                        height: 70,
                        margin: "10px 0px 10px 20px",
                        borderRadius: "50%",
                        border: "2px solid " + primary,
                        [bpMDd]: {
                          width: 50,
                          height: 50,
                        },
                      }}
                      image={user.picture}
                      alt={user.picture}
                    />
                    <Box
                      sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                        // backgroundColor: "#fffccc",
                        margin: "10px",
                        [bpSMd]: {
                          justifyContent: "right",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          [bpSMd]: {
                            display: "none",
                          },
                        }}
                      >
                        <TitleBox user={user} />
                      </Box>
                      <Box>
                        <Button
                          variant="outlined"
                          onClick={() => viewProfile(user.username)}
                          sx={{
                            borderRadius: "30px",
                            border: 2,
                            fontWeight: "500",
                            textTransform: "none",
                            "&:hover": {
                              border: "2px solid " + primary,
                              backgroundColor: primary,
                              color: "white",
                              boxShadow: "0 2px 12px 2px #D4D9E2",
                            },
                            [bpSMd]: {
                              fontSize: "10px",
                            },
                          }}
                        >
                          View Profile
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                  <Box
                    sx={{ margin: "0px 20px", [bpSMu]: { display: "none" } }}
                  >
                    <TitleBox user={user} />
                  </Box>
                  <Box sx={{ margin: "10px 15px 15px 15px" }}>
                    {[
                      "#webdesign",
                      "#COA",
                      "#programming",
                      "#competitiveprogramming",
                      "#AI",
                      "#ML",
                      "#appdesign",
                      "#network",
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
                            margin: "4px",
                            cursor: "pointer",
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
                </Box>
              </Card>
            ))}
          </Container>
        </Container>
      )}
    </div>
  );
}

export default Profiles;
