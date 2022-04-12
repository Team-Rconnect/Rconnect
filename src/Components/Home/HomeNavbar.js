import {
  alpha,
  AppBar,
  Box,
  Button,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../Context/AuthContext";
import { primary } from "../../Common/Pallete";
import logo from "../../Assets/logowhitesm.png";

function HomeNavbar() {
  const theme = useTheme();
  const navigate = useNavigate();
  const bpSMd = theme.breakpoints.down("sm"); //max-width:599.95px
  const authCtx = useContext(AuthContext);

  const handleClick = () => {
    if (authCtx.isLoggedIn) {
      authCtx.onLogout();
      navigate("/");
    } else {
      navigate("/login");
    }
  };
  const [navbar, setNavbar] = useState(false);
  useEffect(() => {
    const changeBackground = () => {
      console.log(window.scrollY);
      if (window.scrollY > 0) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    };
    window.addEventListener("scroll", changeBackground);

    return;
  }, []);
  return (
    <Box
      sx={{
        position: "absolute",
        top: "0px",
        left: "0px",
        zIndex: "2",
        width: "100%",
        transition: "all 0.6s ease-in-out",
      }}
      className={`${navbar && "stickynavbar"}`}
    >
      <AppBar position="sticky" elevation={navbar ? 3 : 0} color="transparent">
        <Toolbar
          disableGutters="true"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "5vh",
            transition: "all 0.6s ease-in-out",
            // padding: "10px 40px",
            padding: `${navbar ?"4px 40px": "10px 40px"}`,
            // backgroundColor: "rgba(0, 0, 0,0.1)",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              // backgroundColor: "#fff000",
            }}
          >
            <Box>
              <img src={logo} alt={"logo"} width="35px" />
            </Box>
            <Typography
              // gutterBottom
              variant="h1"
              sx={{
                fontWeight: "600",
                letterSpacing: 1,
                marginBottom: "5px",
                color: "white",
                [bpSMd]: { display: "none" },
              }}
            >
              RConnect
            </Typography>
          </Box>
          <Button
            variant="outlined"
            // disableElevation
            sx={{
              // backgroundColor: "#fff",
              color: "#fff",
              borderRadius: "20px",
              paddingLeft: "35px",
              paddingRight: "35px",
              borderColor: alpha(theme.palette.common.black, 0.14),
              "&:hover": {
                backgroundColor: "#fff",
                color: primary,
              },
            }}
            onClick={handleClick}
          >
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default HomeNavbar;
