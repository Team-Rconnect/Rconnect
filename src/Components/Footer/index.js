import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { borderLight } from "../../Common/Pallete";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function Footer() {
  return (
    <Box
      sx={{
        width: `calc(100% - 20px)`,
        height: "40px",
        marginRight: "5px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px",
        borderColor: borderLight,
        backgroundColor: "white",
        position: "relative",
        bottom: "0",
      }}
    >
      <Typography variant="body1">RConnect</Typography>
      <Typography variant="body1">copyright@2022</Typography>
      <Stack spacing={2} direction="row">
        <InstagramIcon />
        <FacebookIcon />
        <TwitterIcon />
      </Stack>
    </Box>
  );
}
