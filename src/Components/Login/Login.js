import {
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { bgSecondary, primary } from "../../Common/Pallete";
import login from "../../Assets/login.png";
import dotswhite from "../../Assets/dotswhite.png";
import dotsb from "../../Assets/dotsb.png";
import dotscross from "../../Assets/dotscross.png";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { useTheme } from "@mui/system";
function Login() {
  const theme = useTheme();
  const bpSMd = theme.breakpoints.down("sm"); //max-width:599.95px
  const bpSMu = theme.breakpoints.up("sm"); //min-width:600px
  const bpMDd = theme.breakpoints.down("md"); //max-width:899.95px
  const bpMDu = theme.breakpoints.up("md"); //min-width:900px
  const bpXLd = theme.breakpoints.down("xl"); //max-width:1535.95px
  const bpXLu = theme.breakpoints.up("xl"); //min-width:1536px
  return (
    <Box
      height="100vh"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        backgroundColor: bgSecondary,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          bottom: -60,
          left: -100,
          width: 200,
          height: 200,
          borderRadius: "50%",
          border: "50px solid " + primary,
        }}
      ></Box>
      <Box
        sx={{
          position: "absolute",
          top: -150,
          right: -150,
          width: 400,
          height: 400,
          borderRadius: "50%",
          backgroundColor: primary,

          //   zIndex: "1",
        }}
      ></Box>
      <Container maxWidth="md" sx={{ zIndex: 2 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            backgroundColor: "#fff",
            boxShadow: "0 0 20px -2px #d1e3fa",
            [bpXLd]: {
              boxShadow: "0 0 20px -16px #000",
            },
            [bpSMd]: { boxShadow: "0 0 10px -6px #000" },
          }}
        >
          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              padding: "20px",
              overflow: "hidden",
              backgroundColor: primary,
              [bpSMd]: { display: "none" },
            }}
          >
            <Box
              sx={{
                overflow: "hidden",
                position: "absolute",
                top: -25,
                right: -120,
                opacity: 0.5,
                filter: "invert(100%)",
              }}
            >
              <img src={dotscross} alt={"dotswhite"} width="400px" />
            </Box>
            <img src={login} alt={"login_image"} width="90%" />
            <Box
              sx={{
                overflow: "hidden",
                position: "absolute",
                bottom: -70,
                left: -10,
                opacity: 0.5,
                filter: "invert(100%)",
              }}
            >
              <img src={dotsb} alt={"dotswhite"} width="200px" />
            </Box>
          </Box>
          <Box
            sx={{
              flex: 1,
              padding: "40px",
              [bpSMd]: { padding: "20px" },
            }}
          >
            <Typography
              // gutterBottom
              variant="body1"
              sx={{
                fontSize: "18px",
                fontWeight: "600",
                textTransform: "capitalize",
                letterSpacing: 0.7,
                color: primary,
                marginRight: "10px",
              }}
            >
              Rconnect
            </Typography>
            <Box sx={{ height: "40px", [bpSMd]: { height: "30px" } }}></Box>
            <Typography
              variant="h1"
              sx={{
                fontSize: "30px",
                lineHeight: 2,
                textTransform: "capitalize",
                marginRight: "10px",
                fontWeight: "500",
                // color: "white",
                [bpSMd]: { fontSize: "25px" },
              }}
            >
              Hello! Welcome back
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{
                letterSpacing: 0.6,
                // color: "#bad5f8"
                [bpSMd]: { fontSize: "14px" },
              }}
            >
              Log in with your data that you entered during your registration
            </Typography>
            <Box sx={{ height: "60px", [bpSMd]: { height: "30px" } }}></Box>
            <Typography
              variant="subtitle2"
              //   color="#fff"
              sx={{ margin: "10px 0px", letterSpacing: 0.6 }}
            >
              University Email
            </Typography>
            <Box
              sx={{
                bgcolor: "rgba(0, 0, 0, 0.1)",
                padding: "10px",
                borderRadius: "2px",
                [bpSMd]: { padding: "5px 10px" },
              }}
            >
              <TextField
                InputProps={{
                  style: {
                    // color: "#fff",
                    letterSpacing: 0.6,
                  },
                  disableUnderline: true,
                  placeholder: "e.g: s160097@rguktsklm.ac.in ",
                }}
                fullWidth
                variant="standard"
              />
            </Box>
            <Box sx={{ height: "10px" }}></Box>
            <Typography
              variant="subtitle2"
              //   color="#fff"
              sx={{ margin: "10px 0px", letterSpacing: 0.6 }}
            >
              Password
            </Typography>
            <Box
              sx={{
                bgcolor: "rgba(0, 0, 0, 0.1)",
                padding: "10px",
                borderRadius: "2px",
                [bpSMd]: { padding: "5px 10px" },
                // width: "100%",
              }}
            >
              <TextField
                fullWidth
                InputProps={{
                  style: {
                    // color: "#fff",
                    letterSpacing: 0.6,
                  },
                  disableUnderline: true,
                  placeholder: "Enter password",
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton>
                        <VisibilityOutlinedIcon
                          sx={
                            {
                              // color: "#ccc"
                            }
                          }
                        />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                variant="standard"
              />
            </Box>
            <Box sx={{ display: "flex", justifyContent: "end" }}>
              <Typography
                variant="subtitle2"
                sx={{
                  margin: "15px 0px",
                  letterSpacing: 0.7,
                  color: primary,
                  fontSize: "13px",
                  fontWeight: "600",
                  cursor: "pointer",
                }}
              >
                Forgot Password?
              </Typography>
            </Box>

            <Divider sx={{ margin: "15px 0px" }} />
            <Box sx={{ margin: "20px 0px 10px 0px" }}>
              <Button
                variant="contained"
                fullWidth={true}
                // disableElevation
                sx={{
                  //   backgroundColor: "#fff",
                  //   color: primary,
                  //   fontWeight: "600",
                  "&:hover": {
                    // backgroundColor: "#fff",
                    // disableElevation: "true",
                  },
                }}
              >
                Login
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Login;
