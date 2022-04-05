import React from "react";
import Navbar from "../Navbar/Navbar";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.scss";
import {
  Paper,
  Button,
  Box,
  Card,
  CardMedia,
  Grid,
  Divider,
  Typography,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Footer from "../Footer";
import Barchart from "./Barchart";
import Piechart from "./Piechart";

function Home() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <ArrowForwardIosIcon />,
    prevArrow: <ArrowBackIosNewIcon />,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const data = [
    {
      id: 1,
      url: "https://rguktn.ac.in/assets_new/gallery/a.jpg",
    },
    {
      id: 2,
      url: "https://rguktn.ac.in/assets_new/gallery/c.jpg",
    },
    {
      id: 3,
      url: "https://i.ytimg.com/vi/kalj-HS5P9M/hqdefault.jpg",
    },
    {
      id: 4,
      url: "https://assets.thehansindia.com/hansindia-bucket/3686_students.jpg",
    },
  ];
  return (
    <div>
      <Navbar />
      <Box
        sx={{
          padding: "100px 20px 20px 20px",
          margin: "0 8px",
          width: `calc(100% - 60px)`,
        }}
      >
        <Box sx={{ marginBottom: "20px" }}>
          <Slider {...settings}>
            {data.map((el) => (
              <Card
                key={el.id}
                sx={{
                  maxWidth: 480,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "4px",
                }}
              >
                <CardMedia
                  component="img"
                  height="240"
                  image={el.url}
                  alt="green iguana"
                />
              </Card>
            ))}
          </Slider>
        </Box>

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
      </Box>
      <Footer />
    </div>
  );
}

export default Home;
