import React, { useState } from "react";
import { Box, Typography, Avatar, Button, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SwipeableViews from "react-swipeable-views";

// Testimonials Data
const testimonials = [
  {
    name: "Nathaniel Owner",
    
    text: "This cohort has been amazing! I am so more confident about myself as a leader and the direction of my business. Thank you, Business BOOST! Society!!!",
    img: "https://storageboostaccount.blob.core.windows.net/test-container-new/1715111550471_blob",
  },
  {
    name: "Beatriz Owner",
    
    text: "Taking over my late father's construction business as a woman in a male-dominated industry is tough. This cohort provided me with the knowledge, connections & confidence needed to navigate city contracts which my father wanted to pursue. Thanks, BOOST!",
    img: "https://storageboostaccount.blob.core.windows.net/test-container-new/1721840222921_BeatrizWillington-construction.png",
  },
  {
    name: "Ta'Nesha Justice Owner",
    
    text: "Being part of the BOOST! Your Business cohort has been incredible. The guidance and support from my BSA and others were invaluable in helping me achieve several business goals. Thanks to BOOST!, my Comfy Care products are now on Amazon!",
    img: "https://storageboostaccount.blob.core.windows.net/test-container-new/1723667869953_TaNeshaJustice_ComfyCare_biopic.jpg",
  },
];

const TestimonialsSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <Box sx={{ textAlign: "center", py: 10, backgroundColor: "#FAFAFA" }}>
      {/* Heading */}
      <Typography variant="h4" sx={{ fontWeight: "600", fontSize: "42px", fontFamily: "Outfit", mb: 3 }}>
        You Are The Center Of Our Universe
      </Typography>
      <Typography variant="h5" sx={{ fontFamily: "Outfit", fontSize: "32px", fontWeight: 600 }} mt={1} mb={12}>
        Testimonials
      </Typography>

      {/* Testimonial Cards Container */}
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", ml:-3,gap: 2.5, px: 2, position: "relative" ,width: isMobile ? "110%":"100%"}}>
        {/* Left Arrow */}
        <Button
          onClick={handlePrev}
          sx={{
            minWidth:isMobile? "40px": "50px",
            height:isMobile? "40px": "50px",
            backgroundColor: "#f4a261",
            color: "#fff",
            zIndex:2,
            right:isMobile?"-7%":"-3%",
            borderRadius: "50%",
            px: 2,
            "&:hover": { backgroundColor: "#e76f51" },
          }}
        >
          <ArrowBackIosNewIcon fontSize="medium" />
        </Button>

        {/* Mobile: Swipeable Carousel */}
        {isMobile ? (
          <SwipeableViews index={activeIndex} onChangeIndex={setActiveIndex} enableMouseEvents>
            {testimonials.map((item, index) => (
              <Box
  key={index}
  sx={{
    position: "relative",
    width: "80%", // Increased width
    minHeight: "330px",
    backgroundColor: index === 1 ? "rgba(82, 49, 104, 0.1)" : "rgb(233, 233, 233)",
    boxShadow: "rgba(0, 0, 0, 0.11) 0px 1px 1px, rgba(0, 0, 0, 0.11) 0px 2px 2px, rgba(0, 0, 0, 0.11) 0px 4px 4px, rgba(0, 0, 0, 0.11) 0px 6px 8px, rgba(0, 0, 0, 0.11) 0px 8px 16px",
    borderRadius: "15px",
    p: 4,
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  }}
>
<Avatar
  src={item.img}
  alt={item.name}
  sx={{
    width: 80,
    height: 80,
    position: "absolute",
    top: isMobile ? "-10px" : "-40px", // Adjusted for mobile
    left: "50%",
    transform: "translateX(-50%)",
    border: "4px solid white",
  }}
/>

  <Typography
    variant="body1"
    color="text.primary"
    sx={{ fontFamily: "Outfit", fontWeight: 400, fontSize: "1rem", mt: -1 }}
  >
    "{item.text}"
  </Typography>

  {/* Name positioned at bottom-right */}
  <Box
    sx={{
      position: "absolute",
      bottom: "10px",
      right: "10px",
      textAlign: "right",
    }}
  >
    <Typography
      variant="body2"
      fontWeight="bold"
      sx={{
        fontFamily: "Outfit",
        fontWeight: 400,
        fontSize: "1rem",
        lineHeight: 1.5,
        letterSpacing: "0.00938em",
        pr: 2,
        pb: 2,
      }}
    >
      {item.name}
    </Typography>
  </Box>
</Box>

            ))}
          </SwipeableViews>
        ) : (
          // Desktop: Show All Three Cards
          testimonials.map((item, index) => (
            <Box
            key={index}
            sx={{
              position: "relative",
              width: "720px", // Increased width from 670px to 720px
              minHeight: "300px",
              backgroundColor: index === 1 ? "rgba(82, 49, 104, 0.1)" : "rgb(233, 233, 233)",
              boxShadow: "rgba(0, 0, 0, 0.11) 0px 1px 1px, rgba(0, 0, 0, 0.11) 0px 2px 2px, rgba(0, 0, 0, 0.11) 0px 4px 4px, rgba(0, 0, 0, 0.11) 0px 6px 8px, rgba(0, 0, 0, 0.11) 0px 8px 16px",
              borderRadius: "15px",
              p: 4,
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
          
              <Avatar
                src={item.img}
                alt={item.name}
                sx={{
                  width: 80,
                  height: 80,
                  position: "absolute",
                  top: "-40px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  border: "4px solid white",
                }}
              />
              <Typography variant="body1"  color="text.primary" sx={{ fontFamily: "Outfit", fontWeight: 400, fontSize: "1rem", mt: -1 }}>
                "{item.text}"
              </Typography>
              <Box
    sx={{
      position: "absolute",
      bottom: "10px",
      right: "10px",
      textAlign: "right",
    }}
  >
    <Typography
      variant="body2"
      fontWeight="bold"
      sx={{
        fontFamily: "Outfit",
        fontWeight: 400,
        fontSize: "1rem",
        lineHeight: 1.5,
        letterSpacing: "0.00938em",
        pr:2,
        pb:2
      }}
    >
      {item.name}
    </Typography>
  </Box>
            </Box>
          ))
        )}

        {/* Right Arrow */}
        <Button onClick={handleNext} sx={{  minWidth:isMobile? "40px": "50px",
            height:isMobile? "40px": "50px", left:isMobile?"-8%":"-2%",backgroundColor: "#f4a261", color: "#fff", borderRadius: "50%", px: 0, "&:hover": { backgroundColor: "#e76f51" } }}>
          <ArrowForwardIosIcon fontSize="medium" />
        </Button>
      </Box>
    </Box>
  );
};

export default TestimonialsSection;
