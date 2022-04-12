import { Box, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import Heading2 from "../../Common/Heading2";
import SchoolIcon from "@mui/icons-material/School";
import CountUp from "react-countup";
import DomainIcon from "@mui/icons-material/Domain";
import PersonIcon from "@mui/icons-material/Person";
import HeadingLG from "../../Common/HeadingLG";
import { placements } from "../../Common/Constants";
import Heading1 from "../../Common/Heading1";
import SubtitleLG from "../../Common/SubtitleLG.js";
import { bgSecondary, bgTerinary, borderDark, borderLight, grey, primary } from "../../Common/Pallete";

function Counts() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px 0px",
        backgroundColor: "white",
      }}
    >
      <HeadingLG text="placements" />
      {/* <Typography variant="body1">Some dummy text</Typography> */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          margin: "40px 0px",
        }}
      >
        {placements &&
          placements.map((placement) => {
            return (
              <Box
                sx={{
                  padding: "20px",
                  margin: "10px 20px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  // opacity: 0.2,
                  borderRadius: "4px",
                  width: "250px",
                  height: "250px",
                  border: "1px solid "+grey,
                  transition: "all 0.4s ease-in-out",
                  // boxShadow: "0 0 5px -2px #d1e3fa",
                  "&:hover": {
                    // transform: "scale(1.02)",
                    opacity: 1,
                    backgroundColor: "#fff",
                    boxShadow: "0 0 10px -2px #d1e3fa",
                  },
                }}
              >
                <Box
                  sx={{
                    padding: "20px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: `${placement.color}`,
                    borderRadius: "50%",
                  }}
                >
                  {placement.icon}
                </Box>

                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: "30px",
                    color: `${placement.color}`,
                    margin: "30px 0px 0px 0px",
                  }}
                >
                  {placement.title === "Students placed" ? (
                    <>
                      {" "}
                      <CountUp start={0} end={1000} duration={1} />
                      {placement.title === "Placement percentage" ? "%" : "+"}
                    </>
                  ) : (
                    <>
                      <CountUp start={0} end={100} duration={1} />
                      {placement.title === "Placement percentage" ? "%" : "+"}
                    </>
                  )}
                </Typography>
                <SubtitleLG text={placement.title} />
              </Box>
            );
          })}
      </Box>
    </Box>
  );
}

export default Counts;
