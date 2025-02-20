import React, { useState } from "react";
import { Box, Typography, Avatar, IconButton, useMediaQuery } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useTheme } from "@mui/material/styles";

const testimonials = [
  {
    name: "Nathaniel",
    title: "Owner",
    text: "This cohort has been amazing! I am so more confident about myself as a leader and the direction of my business. Thank you, Business BOOST! Society!!!",
    img: "https://storageboostaccount.blob.core.windows.net/test-container-new/1715111550471_blob",
  },
  {
    name: "Beatriz W.",
    title: "Owner",
    text: "Taking over my late father's construction business as a woman in a male-dominated industry is tough. This cohort provided me with the knowledge, connections & confidence needed to navigate city contracts which my father wanted to pursue. Thanks, BOOST!",
    img: "https://storageboostaccount.blob.core.windows.net/test-container-new/1721840222921_BeatrizWillington-construction.png",
  },
  {
    name: "Ta'Nesha Justice",
    title: "Owner",
    text: "Being part of the BOOST! Your Business cohort has been incredible. The guidance and support from my BSA and others were invaluable in helping me achieve several business goals. Thanks to BOOST!, my Comfy Care products are now on Amazon!",
    img: "https://storageboostaccount.blob.core.windows.net/test-container-new/1723667869953_TaNeshaJustice_ComfyCare_biopic.jpg",
  },
];

const TestimonialsSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <Box sx={{ textAlign: "center", py: 10, backgroundColor: "#FAFAFA", position: "relative" }}>
      <Typography variant="h4" fontWeight="600" sx={{ fontSize: "42px", fontFamily: "Outfit", lineHeight: 1.5 }}>
        You Are The Center Of Our Universe
      </Typography>
      <Typography variant="h5" fontWeight="600" mt={1} mb={8} sx={{ fontSize: "32px", fontFamily: "Outfit", lineHeight: 1.5 }}>
        Testimonials
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", px: 2, position: "relative" }}>
        {/* Left Arrow */}
        <IconButton
          sx={{
            position: "absolute",
            left: isMobile ? "5%" : "3%",
            width: isMobile ? "40px" : "50px",
            height: isMobile ? "40px" : "50px",
            backgroundColor: "#f4a261",
            color: "#fff",
            zIndex: 2,
            borderRadius: "50%",
            "&:hover": { backgroundColor: "#e76f51" },
          }}
          onClick={handlePrev}
        >
          <ArrowBackIosNewIcon fontSize="medium" />
        </IconButton>

        {/* Testimonials Container */}
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: isMobile ? 0 : 3, width: "100%", px: 4 }}>
          {isMobile ? (
            // Mobile View: Only one testimonial at a time
            <Box
  sx={{
    width: "100%",
    minHeight: "230px",
    backgroundColor: "rgb(233, 233, 233)",
    borderRadius: "12px",
    padding: "50px 30px 60px",
    textAlign: "center",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    boxShadow: {
      xs: "rgba(0, 0, 0, 0.11) 0px 1px 1px, rgba(0, 0, 0, 0.11) 0px 2px 2px, rgba(0, 0, 0, 0.11) 0px 4px 4px, rgba(0, 0, 0, 0.11) 0px 6px 8px, rgba(0, 0, 0, 0.11) 0px 8px 16px",
      md: "none",
    },
  }}
>
  <Avatar
    src={testimonials[activeIndex].img}
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

<Typography 
  variant="body1" 
  sx={{ 
    mt: 6, 
    fontFamily: "Outfit", 
    fontSize: { xs: "14px", sm: "18px" }, // Font size 14px on mobile, 18px on larger screens
    textAlign: "center" 
  }}
>
  "{testimonials[activeIndex].text}"
</Typography>

  {/* Name & Title Section with Conditional Margin */}
  <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      gap: "3px",
      mt: { xs: "12px", md: "6px" }, // More margin on mobile to avoid crowding
    }}
  >
    <Typography variant="body2" fontWeight="bold" 
     
    sx={{ fontSize: { xs: "14px", sm: "18px" },
    fontWeight: { xs: 400, sm: "bold" },
    fontFamily: "Outfit" }}>
      {testimonials[activeIndex].name},
    </Typography>
    <Typography 
  variant="body2" 
  fontSize="18px" 
  sx={{ 
    fontSize: { xs: "14px", sm: "18px" }, // Font size 14px on mobile, 18px on larger screens
    fontWeight: { xs: 400, sm: "bold" }, // Font weight 400 on mobile, bold on larger screens
    fontFamily: "Outfit", 
    // color: "#525252" 
  }}
>
  {testimonials[activeIndex].title}
</Typography>

  </Box>
</Box>


          ) : (
            // Desktop View: All testimonials visible
            testimonials.map((item, index) => (
              <Box
                key={index}
                sx={{
                  position: "relative",
                  width: "420px", 
                  minHeight: "295px",
                  backgroundColor: index === 1 ? "rgba(82, 49, 104, 0.1)" : "rgb(233, 233, 233)",
                  borderRadius: "12px",
                  padding: "40px 25px 50px",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  boxShadow:
                    "rgba(0, 0, 0, 0.11) 0px 1px 1px, rgba(0, 0, 0, 0.11) 0px 2px 2px, rgba(0, 0, 0, 0.11) 0px 4px 4px, rgba(0, 0, 0, 0.11) 0px 6px 8px, rgba(0, 0, 0, 0.11) 0px 8px 16px",
                }}
              >
                <Avatar
                  src={item.img}
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
               <Typography variant="body1" sx={{lineHeight:1.5, fontsize:"1rem",mt: -2, fontFamily: "Outfit", textAlign: "center" }}>
  "{item.text}"
</Typography>

                <Box
  sx={{
    position: "absolute",
    bottom: "10px",
    right: "10px",
    textAlign: "right",
    display: "flex",
    alignItems: "center",
     // Reduced gap
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
    {item.name},
  </Typography>
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
    {item.title}
  </Typography>
</Box>

              </Box>
            ))
          )}
        </Box>

        {/* Right Arrow */}
        <IconButton
          sx={{
            position: "absolute",
            right: isMobile ? "5%" : "3%",
            minWidth: isMobile ? "40px" : "50px",
            height: isMobile ? "40px" : "50px",
            backgroundColor: "#f4a261",
            color: "#fff",
            borderRadius: "50%",
            "&:hover": { backgroundColor: "#e76f51" },
          }}
          onClick={handleNext}
        >
          <ArrowForwardIosIcon fontSize="medium" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default TestimonialsSection;
