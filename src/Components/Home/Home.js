import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.scss";
import Heading2 from "../../Common/Heading2";

import {
  Paper,
  Button,
  Stack,
  Box,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

import Footer from "../Footer";
import Barchart from "./Barchart";
import Piechart from "./Piechart";

import Carousel from "./Carousel";
import Counts from "./Counts";
import CompaniesList from "./CompaniesList";
function Home() {
  const [navbar, setNavbar] = useState(false);
  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY >= 90) {
        setNavbar(true);
      } else {
        setNavbar(true);
      }
    };
    window.addEventListener("scroll", changeBackground);

    return;
  }, []);

  return (
    <div>
      {navbar && <Navbar />}
      <Carousel />

      <Counts />
      <CompaniesList />

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
                  padding: "5px",
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

      <Footer />
    </div>
  );
}

export default Home;
