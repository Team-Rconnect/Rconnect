import {
  Box,
  Button,
  Container,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { bgSecondary, primary } from "../../Common/Pallete";
import login from "../../Assets/login.png";
import logoblue from "../../Assets/logobluesm.png";
import dotsb from "../../Assets/dotsb.png";
import thinkman from "../../Assets/thinkman.png";
import forgotstudent from "../../Assets/thinkman.png";
import boyphone from "../../Assets/boyphone.png";
import dotscross from "../../Assets/dotscross.png";
import { useTheme } from "@mui/system";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../Context/AuthContext";
import ErrorAlert from "../../Common/ErrorAlert";

function Forgotpassword() {
  const theme = useTheme();
  const navigate = useNavigate();

  const initialValues = { email: "" };
  const [formValues, setformValues] = useState(initialValues);
  const [formErrors, setformErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [errorText, setErrorText] = useState(false);

  const authCtx = useContext(AuthContext);

  const bpSMd = theme.breakpoints.down("sm"); //max-width:599.95px
  const bpXLd = theme.breakpoints.down("xl"); //max-width:1535.95px

  const [snackopen, setsnackOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setsnackOpen(false);
  };
  const handleChanges = (e) => {
    const { name, value } = e.target;
    setformValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setformErrors(handleValidation(formValues));
    console.log(handleValidation(formValues));
    if (Object.values(handleValidation(formValues)).length !== 0) {
      setErrorText(Object.values(handleValidation(formValues))[0]);
      setsnackOpen(true);
    } else {
      setIsSubmit(true);
      authCtx.onLogin(formValues.email);
      // navigate(`/users/${authCtx.loggedUser.username}`);
    }
  };

  const handleValidation = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    return errors;
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      // navigate("/changepassword");
    }
  }, [formErrors]);

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
          {/* left */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              // alignItems: "center",
              alignItems: "end",
              position: "relative",
              // padding: "20px",
              padding: "0px 20px",
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
            <img src={thinkman} alt={"forgot_image"} width="70%" style={{zIndex:1000}}/>
            {/* <img src={boyphone} alt={"forgot_image"} width="80%" style={{marginLeft:"30px"}} /> */}
            <Box
              sx={{
                overflow: "hidden",
                position: "absolute",
                bottom: -100,
                left: -10,
                opacity: 0.5,
                zIndex: 0,
                filter: "invert(100%)",
              }}
            >
              <img src={dotsb} alt={"dotswhite"} width="200px" />
            </Box>
          </Box>
          {/* right */}
          <Box
            sx={{
              flex: 1,
              padding: "40px",
              [bpSMd]: { padding: "20px" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
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
                  cursor: "pointer",
                }}
                onClick={() => navigate("/")}
              >
                {"< Home"}
              </Typography>
              <Box>
                <img src={logoblue} alt={"logoblue"} width="50px" />
              </Box>
            </Box>
            <Box sx={{ height: "25px", [bpSMd]: { height: "30px" } }}></Box>
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
              Forgot Password?
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{
                letterSpacing: 0.6,
                // color: "#bad5f8"
                [bpSMd]: { fontSize: "14px" },
              }}
            >
              Enter your email that you entered during your registration
            </Typography>
            <Box sx={{ height: "40px", [bpSMd]: { height: "30px" } }}></Box>
            <Typography
              variant="subtitle2"
              //   color="#fff"
              sx={{ margin: "10px 0px", letterSpacing: 0.6 }}
            >
              Registered Email
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
                    letterSpacing: 0.6,
                  },
                  disableUnderline: true,
                  placeholder: "e.g: s160123@rguktsklm.ac.in ",
                }}
                fullWidth
                variant="standard"
                name="email"
                value={formValues.email}
                onChange={handleChanges}
              />
            </Box>
            <Box sx={{ height: "20px" }}></Box>
            <Divider sx={{ margin: "15px 0px" }} />
            <Box sx={{ margin: "10px 0px" }}>
              <Button
                variant="contained"
                fullWidth={true}
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </Box>
            <Box sx={{ margin: "10px 0px" }}>
              <Button
                variant="outlined"
                fullWidth={true}
                sx={{
                  " &:hover": {
                    background: primary,
                    color: "white",
                  },
                }}
                onClick={() => navigate("/login")}
              >
                Cancel
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
      <ErrorAlert
        snackopen={snackopen}
        handleClose={handleClose}
        text={errorText}
      />
    </Box>
  );
}

export default Forgotpassword;
