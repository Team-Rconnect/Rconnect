import React, { useContext, useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import {
  Box,
  Card,
  CardMedia,
  Container,
  useTheme,
  Button,
  Chip,
  // CardContent,
} from "@mui/material";
import UsersContext from "../../Context/UsersContext";
import { borderDark, borderLight, primary } from "../../Common/Pallete";
import TitleBox from "./TitleBox";
import { useNavigate } from "react-router-dom";
import Loading from "../../Common/Loading";
import Filters from "../Filters/Filters";
import ProfileIcon from "../../Assets/profile.png";

function Profiles() {
  const userCtx = useContext(UsersContext);
  // console.log(userCtx.users);
  const navigate = useNavigate();
  const theme = useTheme();
  const bpSMd = theme.breakpoints.down("sm"); //max-width:599.95px
  const bpSMu = theme.breakpoints.up("sm"); //min-width:600px
  const bpMDd = theme.breakpoints.down("md"); //max-width:899.95px
  // const bpMDu = theme.breakpoints.up("md"); //min-width:900px
  // const bpXLd = theme.breakpoints.down("xl"); //max-width:1535.95px
  // const bpXLu = theme.breakpoints.up("xl"); //min-width:1536px
  // console.log(bpSMd, bpSMu, bpMDd, bpMDu, bpXLd, bpXLu);
  const chips = [
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
  ];
  const {
    users,
    searchTerm,
    searchGender,
    searchBranches,
    searchYears,
    searchSkills,
  } = useContext(UsersContext);
  const [filtered, setFiltered] = useState([]);

  // console.log(searchTerm, "search terermdsfa");
  // console.log(
  //   searchGender
  //   // users && users.map((user) => user.firstName + user.lastName),
  //   // "userctx terermdsfa"
  // );
  useEffect(() => {
    const us =
      users &&
      users
        .filter((user) => {
          if (
            user.firstName !== undefined &&
            user.lastName !== undefined &&
            (user.firstName + " " + user.lastName)
              .toLowerCase()
              .includes(searchTerm.toLowerCase())
          ) {
            // console.log(user, "filter user");
            return user;
          }
          return false;
        })
        .filter((user) => {
          if (user.gender === searchGender || searchGender === "Both") {
            return user;
          }
          return false;
        })
        .filter((user) => {
          if (
            searchBranches.includes(user.branch) ||
            searchBranches.length === 0
          ) {
            return user;
          }
          return false;
        })
        .filter((user) => {
          if (searchYears.length === 0 || searchYears.includes(user.year)) {
            return user;
          }
          return false;
        })
        .filter((user) => {
          if (
            searchSkills.length === 0 ||
            searchSkills.some((r) => user.skills.includes(r))
          ) {
            return user;
          }
          return false;
        });
    setFiltered(us);
  }, [
    searchTerm,
    users,
    searchGender,
    searchBranches,
    searchYears,
    searchSkills,
  ]);

  const filterUsers = (branchList, yearsList, skillsList, gender) => {
    const us = users
      .filter((user) => {
        if (
          user.firstName !== undefined &&
          user.lastName !== undefined &&
          (user.firstName + " " + user.lastName)
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
        ) {
          // console.log(user, "filter user");
          return user;
        }
        return false;
      })
      .filter((user) => {
        if (branchList.includes(user.branch)) {
          return user;
        }
        return false;
      });
    console.log(us);
    setFiltered(us);
  };

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
        <Container
          sx={{
            display: "flex",
            height: `calc(100vh - 12vh)`,
            marginTop: "20px",
            [bpSMd]: { height: "100%" },
          }}
        >
          <Box>
            <Filters filterUsers={filterUsers} />
          </Box>
          <Container
            sx={{
              padding: "0px 0px 10px 0px",
              overflow: "scroll",
              overflowX: "hidden",
              [bpSMd]: { overflow: "hidden" },
            }}
          >
            {filtered &&
              filtered.map((user, index) => (
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
                    },
                  }}
                  key={index}
                >
                  <Box
                    sx={{
                      width: "100%",
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
                          width: 60,
                          height: 60,
                          margin: "10px 0px 10px 20px",
                          borderRadius: "50%",
                          border: "2px solid " + primary,
                          [bpMDd]: {
                            width: 50,
                            height: 50,
                          },
                        }}
                        image={user.picture || ProfileIcon}
                        alt={user.picture || ProfileIcon}
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
                            onClick={() => viewProfile(user._id)}
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
                                fontSize: "14px",
                              },
                            }}
                          >
                            View Profile
                          </Button>
                        </Box>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        margin: "0px 20px",
                        [bpSMu]: { display: "none" },
                      }}
                    >
                      <TitleBox user={user} />
                    </Box>
                    <Box sx={{ margin: "10px 15px 15px 15px" }}>
                      {user.skills.map((tag, index) => {
                        return (
                          <Chip
                            key={index}
                            size="small"
                            label={tag}
                            sx={{
                              margin: "4px",
                              fontSize: "14px",
                              letterSpacing: 0.5,
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
