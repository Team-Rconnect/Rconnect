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
import Statistics from "./Statistics";
import { AddBoxSharp } from "@mui/icons-material";
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
    <Box>
      <Carousel />

      <Counts />
      <CompaniesList />

      <Statistics />

      <Footer />
    </Box>
  );
}

export default Home;
