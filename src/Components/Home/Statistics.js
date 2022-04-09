import { Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import Barchart from "./Barchart";
import Piechart from "./Piechart";

function Statistics() {
  return (
    <Box sx={{ paddingTop: "15px", marginBottom: "50px" }}>
      <Grid container spacing={2}>
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
      </Grid>
    </Box>
  );
}

export default Statistics;
