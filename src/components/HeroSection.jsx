import React, { useState } from "react";
import { Box, Typography, Button, useMediaQuery, useTheme } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import backgroundImg1 from "../assets/BackgroundImg1.png";
import backgroundImg2 from "../assets/BackgroundImg2.png";
import TextContent from "./TextContent";

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
    fontSize: isMobile ? "7vw" : "3.8vw", // 🔽 Reduced for mobile screens
    fontWeight: "700",
    letterSpacing: "1.4px",
    textTransform: "capitalize",
    pr: isMobile ? (slidesData[currentSlide].title.length > 20 ? "8vw" : "5vw") : "0",
    wordBreak: "break-word",
    width: isMobile ? "auto" : "110%", 
  }}
>
  {slidesData[currentSlide].title}
</Typography>

<Typography
  variant="h6"
  sx={{
    color: "#ffffffbf",
    fontFamily: "'Outfit', sans-serif",
    fontSize: isMobile ? "3.5vw" : "20px", // 🔽 Slightly smaller for mobile screens
    fontWeight: "400",
    letterSpacing: ".4px",
    lineHeight: "140%", 
    margin: "0 0 20px",
    width: "110%",
  }}
>
  {slidesData[currentSlide].description}
</Typography>


        {/* Button (No Change) */}
        <Button
  variant="contained"
  sx={{
    mt: { xs: 2, sm: 3, md: 3, lg: -3 }, // ✅ Ensures proper visibility in the 900-1300px range
    backgroundImage: "linear-gradient(to right, #FFA500, #FF4500)",
    background:"var(--Linear,linear-gradient(98deg,#e46703 -1.68%,#c7340d 103.45%))",
    color: "#fff",
    fontWeight: "bold",
    fontFamily: "Outfit",
    borderRadius: "15px",
    px: { xs: 3, md: 6 }, // Reduced padding for smaller screens
    py: { xs: 1.5, md: 2.5 }, // Reduced height for smaller screens
    minWidth: { xs: "200px", md: "280px" }, // Reduced width for smaller screens
    mx: { xs: "auto", md: "0" },
    ml: { xs: "auto", md: "0", lg: "960px" }, // ✅ Keeps it centered in the 900-1300px range
    mr: { xs: "auto", md: "10%" },
  }}
>
  Know More →
</Button>



      </Box>
    </Box>
  );
};

export default HeroSection;