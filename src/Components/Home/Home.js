import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.scss";

import { Box } from "@mui/material";
import Footer from "../Footer";
import Carousel from "./Carousel";
import Counts from "./Counts";
import CompaniesList from "./CompaniesList";
import Statistics from "./Statistics";
import HomeNavbar from "./HomeNavbar";
import CarouselMatter from "./CarouselMatter";

function Home() {
  return (
    <Box>
      <Box sx={{ position: "relative" }}>
        <HomeNavbar />
        <CarouselMatter />
        <Carousel />
      </Box>
      <Counts />
      <CompaniesList />
      <Statistics />
      <Footer />
    </Box>
  );
}

export default Home;
