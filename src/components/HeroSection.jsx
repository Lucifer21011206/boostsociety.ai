import React, { useState } from "react";
import { Box, Typography, Button, useMediaQuery, useTheme } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import backgroundImg1 from "../assets/BackgroundImg1.png";
import backgroundImg2 from "../assets/BackgroundImg2.png";

const slidesData = [
  {
    image: backgroundImg1,
    title: "BoostSociety.ai",
    description:
      "We offer a cutting-edge platform for hosting various programs, featuring expert-led cohorts & advanced tools. Explore dynamic partnership opportunities and see how we can elevate your organization or help you join one of our transformative cohorts!",
  },
  {
    image: backgroundImg2,
    title: "Business BOOST! Society™",
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
    arrows:true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    swipe: true,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    appendDots: (dots) => (
      <Box
        sx={{
          position: "absolute",
          bottom: isMobile ? "10px" : "20px",
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
    <Box sx={{ position: "relative", width: "100vw", height: "90vh", overflow: "hidden" }}>
      <Slider {...settings}>
        {slidesData.map((slide, index) => (
          <Box key={index} sx={{ position: "relative", width: "100%", height: "90vh" }}>
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
            <Box sx={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "rgba(0, 0, 0, 0.4)" }} />
          </Box>
        ))}
      </Slider>

      {/* Text Content */}
      <Box
        sx={{
          position: "absolute",
          top: isMobile ? "5.3%" : isTablet ? "5.3%" : "19.3%",
          left: isMobile ? "4%" : "8%", // Keeping text aligned
          textAlign: "left",
          color: "white",
          width: isMobile ? "90%" : isTablet ? "60%" : "40%",
        }}
      >
        {/* Title with New Styling */}
        <Typography
          variant="h2"
          sx={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "4vw", // Responsive font size
            fontStyle: "normal",
            fontWeight: "700",
            letterSpacing: "1.4px",
            marginBottom: "0",
            overflow: "hidden",
            textOverflow: "ellipsis",
            textTransform: "capitalize",
            whiteSpace: "nowrap",
            width: "100%",
          }}
        >
          {slidesData[currentSlide].title}
        </Typography>

        {/* Updated Description with New Styling */}
        <Typography
          variant="h6"
          sx={{
            color: "#ffffffbf", // Slightly transparent white
            fontFamily: "'Outfit', sans-serif",
            fontSize: "20px",
            fontStyle: "normal",
            fontWeight: "400",
            letterSpacing: ".4px",
            lineHeight: "139%",
            margin: "0 0 20px",
            width: "56%",
          }}
        >
          {slidesData[currentSlide].description}
        </Typography>

        {/* Button Aligned to Right */}
        {/* Button Aligned More to the Right */}
{/* Button Aligned More to the Right */}
{/* Button Aligned Even More to the Right */}
{/* Button Aligned Even More to the Right */}
<Button
  variant="contained"
  sx={{
    mt: -13,
    backgroundImage: "linear-gradient(to right, #FFA500, #FF4500)", // Left side light orange, right side dark orange
    color: "#fff",
    fontWeight: "bold",
    borderRadius: "8px",
    px: 6, // Padding बढ़ाई ताकि text proper fit हो
    py: 1.5, // Height same रहे
    minWidth: "210px", // Minimum width set ताकि arrow और text साथ रहे
    display: "block",
    ml: "900px", // Pushes button to the right
    mr: isMobile ? "-45%" : isTablet ? "-30%" : "15%", // Right shift 3X times
  }}
>
  Know More →
</Button>




      </Box>
    </Box>
  );
};

export default HeroSection;
