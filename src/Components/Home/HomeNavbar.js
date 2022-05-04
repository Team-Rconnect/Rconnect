import {
  alpha,
  AppBar,
  Avatar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  TextField,
  Toolbar,
  Tooltip,
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
  const [userPresent, setUserPresent] = useState(false);
  const userIn = authCtx.isLoggedIn;
  const settings = ["Profile", "Groups", "Logout"];
  // const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const userProfile = localStorage.getItem("userId");

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleClick = () => {
    if (userPresent) {
      authCtx.onLogout();
      navigate("/");
    } else {
      navigate("/login");
    }
    console.log(authCtx.isLoggedIn, "handle clik userpresent");
  };

  const handleOption = (setting) => {
    if (setting === "Logout") {
      handleClick();
    }
    if (setting === "Groups") {
      navigate(`/users/${localStorage.getItem("userId")}/groups`);
    }
    if (setting === "Profile") {
      navigate(`/users/${userProfile}`);
    }
    console.log(setting, "settingf options");
  };

  useEffect(() => {
    userIn === true && setUserPresent(true);
    // console.log(authCtx.isLoggedIn, "in useeffect userpresernt", userIn);
  }, [userIn]);
  const [navbar, setNavbar] = useState(false);
  useEffect(() => {
    const changeBackground = () => {
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
          disableGutters={true}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "5vh",
            transition: "all 0.6s ease-in-out",
            // padding: "10px 40px",
            padding: `${navbar ? "4px 40px" : "10px 40px"}`,
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

          {userPresent ? (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar>
                    {authCtx.loggedUser.firstName &&
                      authCtx.loggedUser?.firstName[0].toUpperCase()}
                  </Avatar>
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography
                      textAlign="center"
                      onClick={() => handleOption(setting)}
                    >
                      {setting}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          ) : (
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
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default HomeNavbar;
