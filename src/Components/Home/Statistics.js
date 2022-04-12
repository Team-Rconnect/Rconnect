import { Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import HeadingLG from "../../Common/HeadingLG";
import { grey } from "../../Common/Pallete";
import Barchart from "./Barchart";
import Piechart from "./Piechart";

function Statistics() {
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
      <HeadingLG text="statistics" />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          width: "100%",
          margin: "40px 0px",
        }}
      >
        <Box
          sx={{
            width: "40%",
            // boxShadow: "0 0 10px -2px #d1e3fa",
            borderRadius: "4px",
            margin: "0px 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            padding: "25px 10px",
            border: "1px solid "+grey,
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontSize: "18px",
              fontWeight: "550",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Placed students per year
          </Typography>
          <Barchart />
        </Box>
        <Box
          sx={{
            width: "40%",
            // boxShadow: "0 0 10px -2px #d1e3fa",
            borderRadius: "4px",
            margin: "0px 20px",
            padding: "25px 10px",
            border: "1px solid "+grey,
          }}
        >
          <Piechart />
        </Box>
      </Box>
      {/* <Grid container spacing={2}>
        <Grid item xs={7}>
          <Paper>
            <Typography
              variant="body1"
              sx={{
                fontSize: "18px",
                fontWeight: "550",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Placed students per year
            </Typography>
            <Barchart />
          </Paper>
        </Grid>
        <Grid item xs={5}>
          <Paper>
            <Piechart />
          </Paper>
        </Grid>
      </Grid> */}
    </Box>
  );
}

export default Statistics;
