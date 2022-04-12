import React, { useContext } from "react";
import { Search } from "@mui/icons-material";
import {
  Box,
  InputAdornment,
  TextField,
  IconButton,
  Button,
  AppBar,
  Toolbar,
  useScrollTrigger,
  Slide,
  Typography,
  alpha,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/system";
import PropTypes from "prop-types";
import logo from "../../Assets/logowhitesm.png";
import { bgSecondary, borderLight, primary } from "../../Common/Pallete";
import { theme } from "../../Common/Constants";
import AuthContext from "../../Context/AuthContext";

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};
function Navbar(props) {
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
  const handleHome = () => {
    navigate("/");
  };

  return (
    <HideOnScroll {...props}>
      <AppBar position="sticky">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "5vh",
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
                [bpSMd]: { display: "none" },
                cursor: "pointer",
              }}
              onClick={handleHome}
            >
              RConnect
            </Typography>
          </Box>
          <Box
            sx={{
              backgroundColor: alpha(theme.palette.common.black, 0.14),
              padding: "5px",
              borderRadius: "10px",
              width: "50%",
            }}
          >
            <TextField
              fullWidth
              InputProps={{
                style: {
                  color: "#fff",
                },
                disableUnderline: true,
                placeholder: "Search...",
                startAdornment: (
                  <InputAdornment position="start">
                    <IconButton>
                      <Search
                        sx={{
                          color: "#fff",
                        }}
                      />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              variant="standard"
            />
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
            {authCtx.isLoggedIn ? "Logout" : "Login"}
          </Button>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
}

export default Navbar;
