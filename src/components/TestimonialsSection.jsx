import React, { useState } from "react";
import { Box, Typography, Avatar, Button, useMediaQuery } from "@mui/material";
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
    text: "Taking over my late father's construction business as a woman in a male-dominated industry is tough. This cohort provided me with the knowledge.",
    img: "https://storageboostaccount.blob.core.windows.net/test-container-new/1721840222921_BeatrizWillington-construction.png",
  },
  {
    name: "Ta'Nesha Justice",
    title: "Owner",
    text: "Being part of the 'BOOST! Your Business' cohort has been incredible. The guidance and support from my BSA and others were invaluable.",
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
    <Box sx={{ textAlign: "center", py: 10, backgroundColor: "#FAFAFA" }}>
      <Typography
        variant="h4"
        fontWeight="600"
        sx={{
          fontSize: "42px",
          fontFamily: "Outfit",
          lineHeight: 1.5,
          letterSpacing: "0.00938em",
        }}
      >
        You Are The Center Of Our Universe
      </Typography>
      <Typography
        variant="h5"
        fontWeight="600"
        mt={1}
        mb={15}
        sx={{
          fontSize: "32px",
          fontFamily: "Outfit",
          lineHeight: 1.5,
          letterSpacing: "0.00938em",
        }}
      >
        Testimonials
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 6,
          px: isMobile ? 2 : 4,
          height: isMobile ? "300px" : "auto",
          width: isMobile ? "100%" : "auto",
        }}
      >
        <Button
          sx={{
            minWidth: "50px",
            height: "50px",
            backgroundColor: "#f4a261",
            color: "#fff",
            borderRadius: "50%",
            px: 2,
            "&:hover": { backgroundColor: "#e76f51" },
          }}
          onClick={handlePrev}
        >
          <ArrowBackIosNewIcon fontSize="medium" />
        </Button>

        {testimonials.map((item, index) => (
          <Box
            key={index}
            sx={{
              position: "relative",
              width: isMobile ? "150px" : index === activeIndex ? "400px" : "320px",
              minHeight: isMobile ? "100px" : index === activeIndex ? "300px" :  "250px",
              backgroundColor:
                index === activeIndex ? "rgba(82, 49, 104, 0.1)" : "#fff",
              boxShadow:
                index === activeIndex
                  ? "0px 8px 20px rgba(82, 49, 104, 0.3)"
                  : "0px 4px 10px rgba(0,0,0,0.1)",
              borderRadius: "12px",
              p: 4,
              mt: isMobile ? 21 : 3,
              mb: isMobile ? 17 : 0,
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              transform: index === activeIndex ? "translate(-10px, -20px) scale(1.05)" : "none",
              transition: "all 0.3s ease-in-out",
              display: isMobile && index !== activeIndex ? "none" : "flex",
            }}
          >
            <Avatar
              src={item.img}
              sx={{
                width: 70,
                height: 70,
                position: "absolute",
                top: "-40px",
                left: "50%",
                transform: "translateX(-50%)",
                border: "4px solid white",
              }}
            />
            <Typography variant="body1" fontStyle="italic" color="text.primary" sx={{mt:2, fontFamily:"Outfit", fontWeight:400}}>
              "{item.text}"
            </Typography>
            <Typography variant="body2" fontWeight="bold" mt={2}>
              {item.name}, {item.title}
            </Typography>
          </Box>
        ))}

        <Button
          sx={{
            minWidth: "50px",
            height: "50px",
            backgroundColor: "#f4a261",
            color: "#fff",
            borderRadius: "50%",
            px: 2,
            mr:4,
            "&:hover": { backgroundColor: "#e76f51" },
          }}
          onClick={handleNext}
        >
          <ArrowForwardIosIcon fontSize="medium" />
        </Button>
      </Box>
    </Box>
  );
};

export default TestimonialsSection;
