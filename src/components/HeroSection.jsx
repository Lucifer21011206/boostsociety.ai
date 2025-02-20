import React, { useState } from "react";
import { Box, Typography, Button, useMediaQuery, useTheme } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import backgroundImg1 from "../assets/BackgroundImg1.png";
import backgroundImg2 from "../assets/BackgroundImg2.png";
import TextContent from "./TextContent";
import EastIcon from "@mui/icons-material/East";

 <Button
  variant="contained"
  sx={{
    mt: { xs: 1.5, sm: 2.5, md: 2.5, lg: -5.5 }, // 🔼 Moves it slightly up
    backgroundImage: "linear-gradient(to right, #FFA500, #FF4500)",
    background: "var(--Linear,linear-gradient(98deg,#e46703 -1.68%,#c7340d 103.45%))",
    lineHeight:1.5,
    color: "#fff",
    letterSpacing:"0.00938em",
    fontWeight: "600",
    fontFamily: "Outfit",
    fontSize: "1.2rem",
    borderRadius: "15px",
    textTransform: "none",
    px: { xs: 3, md: 6 },
    py: { xs: 1.5, md: 2 }, 
    minWidth: { xs: "200px", md: "275px" },
    mx: { xs: "auto", md: "0" },
    ml: { xs: "auto", md: "2%", lg: "970px" }, // 🔼 Moves it slightly right
    mr: { xs: "auto", md: "9%" },
  }}
>
  Know More →
</Button>

const slidesData = [
  {
    image: backgroundImg1,
    title: "BoostSociety.ai",
    description:
      "We offer a cutting-edge platform for hosting various programs, featuring expert-led cohorts & advanced tools. Explore dynamic partnership opportunities and see how we can elevate your organization or help you join one of our transformative cohorts!",
  },
  {
    image: backgroundImg2,
    title: "Business BOOST! Society™ ",
    description:
      "Welcome to Business BOOST! Society™. Join a community of like-minded business owners committed to positive impact and sustainable growth. At Business BOOST! Society™, we connect strategic vision with tangible results.",
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    swipe: true,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    appendDots: (dots) => (
      <Box
        sx={{
          position: "absolute",
          bottom: isMobile ? "385px" : "20px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "4px",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 2,
        }}
      >
        {dots}
      </Box>
    ),
    customPaging: (i) => (
      <Box
        sx={{
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          border: "2px solid white",
          backgroundColor: currentSlide === i ? "white" : "transparent",
          transition: "0.3s",
          cursor: "pointer",
        }}
      />
    ),
  };

  return (
    <Box sx={{ position: "relative", width: "100vw",
     height: isMobile? "40vh":"80vh", 
     overflow: "hidden" }}>
      <Slider {...settings}>
        {slidesData.map((slide, index) => (
          <Box key={index} sx={{ position: "relative", width: "100%", height: "80vh" }}>
            {/* Background Image */}
            <img
              src={slide.image}
              alt="Hero Background"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />

            {/* Dark Overlay */}
            {/* <Box sx={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "rgba(0, 0, 0, 0.4)" }} /> */}
          </Box>
        ))}
      </Slider>

      {/* Text Content */}
      <Box
        sx={{
          position: "absolute",
          top: isMobile ? "8%" : isTablet ? "12%" : "18%",
          left: isMobile ? "2%" : "4%", // ✅ Moved more towards the left
          right: isMobile ? "2%" : "4%",
          textAlign: "left",
          color: "white",
          width: isMobile ? "85%" : isTablet ? "50%" : "45%", // ✅ Adjusted width to fit well
        }}
      >
  <Typography
  variant="h2"
  sx={{
    fontFamily: "'Outfit', sans-serif",
    fontSize: isMobile ? "7vw" : "4vw",
    fontWeight: "700",
    letterSpacing: "1.4px",
    textTransform: "capitalize",
    pr: isMobile ? (slidesData[currentSlide].title.length > 20 ? "8vw" : "5vw") : "0",
    wordBreak: "break-word",
    width: isMobile ? "372px" : "115%",
    mt: isMobile ? "8px" : "17px",
    ml: isMobile ? "5px" : "-4px", // 🔼 Shifted slightly to the right on mobile
  }}
>
  {slidesData[currentSlide].title}
</Typography>

<Typography
  variant="h6"
  sx={{
    color: "#ffffffbf",
    fontFamily: "'Outfit', sans-serif",
    fontSize: isMobile ? "3.5vw" : "20px",
    fontWeight: "400",
    letterSpacing: ".4px",
    lineHeight: "140%", 
    margin: "0 0 20px",
    width: "115%",
    mt: isMobile ? "8px" : "10px",
    ml: isMobile ? "5px" : "-4px", // 🔼 Shifted slightly to the right on mobile
  }}
>
  {slidesData[currentSlide].description}
</Typography>

{/* Button */}
<Button
  variant="contained"
  sx={{
    mt: { xs: 1.5, sm: 2.5, md: 2.5, lg: -6 },
    backgroundImage: "linear-gradient(to right, #FFA500, #FF4500)",
    background: "var(--Linear,linear-gradient(98deg,#e46703 -1.68%,#c7340d 103.45%))",
    lineHeight: 1.5,
    color: "#fff",
    letterSpacing: "0.00938em",
    fontWeight: "700",
    fontFamily: "Outfit",
    fontSize: { xs: "1em", md: "1.2rem" }, // 🔼 Set to 1em on mobile screens
    borderRadius: "12px",
    textTransform: "none",
    px: { xs: 3, md: 6 },
    py: { xs: 1.5, md: 2 },
    minWidth: { xs: "200px", md: "270px" },
    mx: { xs: "auto", md: "0" },
    ml: { xs: "10px", md: "2%", lg: "970px" },
    mr: { xs: "auto", md: "8%" },
  }}
>
  Know more <EastIcon sx={{ ml: 4, fontSize: "1.4rem" }} />
</Button>







      </Box>
    </Box>
  );
};

export default HeroSection;