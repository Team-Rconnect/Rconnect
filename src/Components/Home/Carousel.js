import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Box, CardMedia } from "@mui/material";
import Slider from "react-slick";

const PrevArrow = (props) => {
  console.log(props);
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIosNewIcon style={{ color: "#00acff", fontSize: "30px" }} />
    </div>
  );
};
const NextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIosIcon style={{ color: "#00acff", fontSize: "30px" }} />
    </div>
  );
};

function Carousel() {
  var settings = {
    // dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
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
    <Box>
      <Slider {...settings}>
        {data.map((el) => (
          <Box sx={{ height: "100vh" }} key={el.id}>
            <CardMedia component="img" image={el.url} alt="green iguana" />
          </Box>
        ))}
      </Slider>
    </Box>
  );
}

export default Carousel;
