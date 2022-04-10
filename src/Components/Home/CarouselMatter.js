import { Box, Button, Typography, useTheme } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { primary } from "../../Common/Pallete";

function CarouselMatter() {
  const theme = useTheme();
  const navigate = useNavigate();
  const bpSMd = theme.breakpoints.down("sm");

  const handleClick = () => {
    navigate("/users");
  };
  return (
    <Box
      sx={{
        position: "absolute",
        top: "0px",
        left: "0px",
        zIndex: "1",
        width: "100%",
        height: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          padding: "0px 100px",
          backgroundColor: "rgba(23, 110, 222,0.75)",
          //   backgroundColor: "rgba(0, 0, 0,0.85)",
        }}
      >
        <Typography
          // gutterBottom
          variant="h1"
          sx={{
            fontSize: "60px",
            // textTransform: "uppercase",
            letterSpacing: 2.5,
            color: "#fff",
            // color: primary,
            margin: "20px 0px 5px 0px",
            [bpSMd]: { fontSize: "30px" },
          }}
        >
          Gateway to a great career
        </Typography>
        <Typography
          variant="subtitle1"
          color="#fff"
          margin="10px 0px 40px 0px"
          sx={{
            fontSize: "18px",
            letterSpacing: 1,
            [bpSMd]: { fontSize: "14px", lineHeight: 1.4 },
          }}
        >
          Connect with youngest talents of RGUKT
        </Typography>
        <Button
          variant="outlined"
          // disableElevation
          sx={{
            // backgroundColor: "#fff",
            color: "#fff",
            borderRadius: "50px",
            paddingLeft: "35px",
            paddingRight: "35px",
            borderColor: "#fff",

            fontSize: "20px",
            // borderColor: primary,
            "&:hover": {
              backgroundColor: "#fff",
              //   color: "#000",
              color: primary,
              fontWeight: "bold",
            },
          }}
          onClick={handleClick}
        >
          Get into
        </Button>
      </Box>
    </Box>
  );
}

export default CarouselMatter;
