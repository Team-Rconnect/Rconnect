import { Box, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import Heading2 from "../../Common/Heading2";
import SchoolIcon from "@mui/icons-material/School";
import CountUp from "react-countup";
import DomainIcon from "@mui/icons-material/Domain";
import PersonIcon from "@mui/icons-material/Person";

function Counts() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "lightgray",
      }}
    >
      <Heading2 text={"student placed statistics"} />
      <Stack
        direction="row"
        spacing={5}
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          // backgroundColor: "#fffccc",
          margin: "15px 0px",
        }}
      >
        <Paper
          sx={{
            width: "170px",
            height: "130px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Stack
            spacing={2}
            direction="row"
            sx={{
              width: "fit-content",
            }}
          >
            <PersonIcon />
            <Box sx={{ width: "50px" }}>
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: "18px",
                  color: "#00acff",
                }}
              >
                1000+
              </Typography>
            </Box>
          </Stack>
        </Paper>
        <Paper
          sx={{
            width: "170px",
            height: "130px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Stack
            spacing={2}
            direction="row"
            sx={{
              width: "fit-content",
            }}
          >
            <DomainIcon />
            <Box sx={{ width: "50px" }}>
              <CountUp start={0} end={1000} duration={10} />
            </Box>
          </Stack>
        </Paper>
        <Paper
          sx={{
            width: "170px",
            height: "130px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Stack
            spacing={2}
            direction="row"
            sx={{
              width: "fit-content",
            }}
          >
            <SchoolIcon />
            <Box sx={{ width: "50px" }}>
              <CountUp start={0} end={1000} duration={10} />
            </Box>
          </Stack>
        </Paper>
        <Paper
          sx={{
            width: "170px",
            height: "130px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Stack
            spacing={2}
            direction="row"
            sx={{
              width: "fit-content",
            }}
          >
            <SchoolIcon />
            <Box sx={{ width: "50px" }}>
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: "18px",
                  color: "#00acff",
                }}
              >
                100%
              </Typography>
            </Box>
          </Stack>
        </Paper>
      </Stack>
      <Typography variant="body1">Some dummy text</Typography>
    </Box>
  );
}

export default Counts;
