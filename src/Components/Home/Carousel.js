import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Box } from "@mui/material";
import Slider from "react-slick";

const PrevArrow = (props) => {
  // console.log(props);
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
      style={{
        ...style,
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "50px",
        height: "50px",
        backgroundColor: "rgba(0, 0, 0,0.15)",
      }}
    >
      <ArrowBackIosNewIcon
        style={{
          fontSize: "25px",
          color: "rgba(255, 255, 255,0.2)",
        }}
      />
    </div>
  );
};
const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
      style={{
        ...style,
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "50px",
        height: "50px",
        backgroundColor: "rgba(0, 0, 0,0.15)",
      }}
    >
      <ArrowForwardIosIcon
        style={{
          fontSize: "25px",
          color: "rgba(255, 255, 255,0.2)",
        }}
      />
    </div>
  );
};

function Carousel() {
  var settings = {
    // dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    lazyLoad: true,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    pauseOnHover: false,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };
  const data = [
    {
      id: 1,
      url: "https://rguktsklm.ac.in/admin/uploads/slider/1634043332.jpg",
    },
    {
      id: 2,
      url: "https://rguktsklm.ac.in/admin/uploads/slider/1634043331.jpg",
    },
    {
      id: 3,
      url: "https://rguktsklm.ac.in/admin/uploads/slider/1634043329.jpg",
    },
  ];
  return (
    <Box>
      <Slider {...settings}>
        {data.map((el) => (
          <Box sx={{ height: "100vh" }} key={el.id}>
            <img
              src={el.url}
              alt={"dotswhite"}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            {/* <CardMedia component="img" image={el.url} alt="green iguana" /> */}
          </Box>
        ))}
      </Slider>
    </Box>
  );
}

export default Carousel;
