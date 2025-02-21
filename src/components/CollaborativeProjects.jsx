import React, { useState } from "react";
import { Box, IconButton, Container, Typography, Grid, Card, CardContent, CardMedia, useMediaQuery } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import { useSwipeable } from "react-swipeable";
import orange from "../assets/Vector 27.png"; // Orange curved overlay image
import TextContent from "./TextContent";

const projects = [
  {
    description:
      "VetsFest 2024: Filling Your Bunker for Entrepreneurial Success! VetsFest 2024, hosted by the Bunker Labs Ambassador Atlanta Team, is a premier event dedicated to empowering veteran and military spouse entrepreneurs.",
    img: "https://storageboostaccount.blob.core.windows.net/test-container-new/1718224796512_BunkerLabs.png",
  },
  {
    description:
      "Fascinating conversations with extraordinary individuals. Engage in enlightening exchanges with trailblazers from various sectors and delve into the stories that shaped their paths to successto empowering veteran.",
    img: "https://storageboostaccount.blob.core.windows.net/test-container-new/1718226583321_LWLScreenSaver.png",
  },
];

const CollaborativeProjects = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(600)); // Mobile (< 600px)
  const isTablet = useMediaQuery(theme.breakpoints.between(600, 900)); // Tablet (600px - 900px)
  const isLargeScreen = useMediaQuery(theme.breakpoints.up(900)); // Large screens (>= 900px)
  const [currentIndex, setCurrentIndex] = useState(0);

  // Swipe handlers for mobile
  const handlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handlePrev(),
    preventScrollOnSwipe: true,
    trackMouse: true, // Allows swipe on desktop using mouse
  });

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
  };

  return (
    <Box sx={{ position: "relative", pb: 10, overflow: "hidden", width: "100vw" }}>
      <Container maxWidth="lg">
        {/* Section Title */}
        <Typography
          margin="0px"
          boxSizing="inherit"
          variant="h4"
          align="center"
          fontWeight="600"
          fontFamily="Outfit"
          lineHeight="1.5"
          letterSpacing="0.00938em"
          sx={{
            fontSize: { xs: "25px", md: "42px" }, // 25px for <900px, 42px otherwise
          }}
        >
          {TextContent.collaborativeprojects.heading}
        </Typography>

        <Typography
          variant="body1"
          align="center"
          sx={{ mt: 1, mb: 4, maxWidth: "1200px", mx: "auto", fontFamily: "Outfit", fontWeight: 400, letterSpacing: "0em", lineHeight: 1.334, fontSize: "18px", color: "rgba(63, 60, 60, 0.87)" }}
        >
          {TextContent.collaborativeprojects.subheading}
        </Typography>

        {/* Mobile View: Carousel */}
        {isMobile ? (
          <Box {...handlers} sx={{ display: "flex", justifyContent: "center", alignItems: "center", position: "relative" }}>
            <Card 
  sx={{ 
    backgroundColor: "#512D6D", 
    borderRadius: "17px", 
    p: 2, 
    color: "#fff", 
    width: { xs: "95%", sm: "80%", md: "50%" }, 
    mx: { xs: "auto", sm: 4, md: 2, lg: 8, xl: 10 }, 

    // Apply correct left margins for 900px-1520px, 1200px-1340px, and 1400px-1480px in one line
    ml: { 
      xs: "auto",  
      sm: "10%",    
      md: "6%",    
      lg: "19%",    
      "@media (min-width: 900px) and (max-width: 1520px), (min-width: 1200px) and (max-width: 1340px), (min-width: 1400px) and (max-width: 1480px)": {
        ml: "6%",
      },
    }
  }}
>

              {/* Project Image */}
              <Box sx={{ position: "relative", borderRadius: "8px", width: "100%", height: "auto" }}>
                <CardMedia
                  component="img"
                  image={projects[currentIndex].img}
                  alt="Project Image"
                  sx={{ width: "100%", height: 200, borderRadius: "10px" }}
                />
              </Box>

              <CardContent>
                <Typography variant="h6" fontWeight="bold">
                  {projects[currentIndex].title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: "16px",
                    mt: 1,
                    fontFamily: "Outfit",
                    color: "rgba(255, 255, 255, 0.75)",
                    lineHeight: 1.75,
                    fontWeight: 400,
                    letterSpacing: "0.00938em",
                  }}
                >
                  {projects[currentIndex].description}
                </Typography>
              </CardContent>

              {/* Learn More */}
              <Typography
                variant="body2"
                sx={{ color: "#FFA500", fontWeight: "bold", mt: 2, cursor: "pointer", textDecoration: "none" }}
              >
                Learn more →
              </Typography>
            </Card>

            {/* Navigation Arrows */}
            <IconButton
              onClick={handlePrev} // Always allow clicking
              sx={{
                position: "absolute",
                left: "5%",
                color: "#fff",
                "&:hover": {
                  backgroundColor: "#FF6600",
                  opacity: 1,
                },
                fontSize: "1.5rem",
                cursor: "pointer",
                display: { xs: "block", md: "block" }, // Ensure it's visible on normal screens (md and above)
              }}
            >
              <ArrowBackIos />
            </IconButton>

            <IconButton
              onClick={handleNext}
              sx={{
                position: "absolute",
                right: "5%",
                color: "#fff",
                "&:hover": {
                  backgroundColor: "#FF6600",
                },
                fontSize: "1.5rem",
                cursor: "pointer",
                
              }}
            >
              <ArrowForwardIos />
            </IconButton>
          </Box>
        ) : (
          <Grid container spacing={1} sx={{ 
            display :'flex',
            width: isTablet ? "40%" : "80%", 
            height: isTablet? "600px":"430px",
            marginLeft: isTablet 
            ? "5%" 
            : (window.innerWidth >= 900 && window.innerWidth <= 1520)
            ? "6%" 
            : "-14%",
            marginRight: isTablet ? "5%" : "0%",
            flexDirection:"column",
           borderRadius: "30px" }}>
            {projects.map((project, index) => (
              <Grid 
              item 
              xs={12} 
              md={isTablet ? 6 : 5.5} 
              key={index} 
              sx={{ 
                display: "flex",
                gap: window.innerWidth >= 900 ? "5%" : "inherit", // Reducing horizontal gap on normal screens
              }}
            >
            
                <Card sx={{ backgroundColor: "#512D6D", borderRadius: "17px", p: 2, color: "#fff", width: "100%" }}>
                  {/* Project Image */}
                  <Box sx={{ position: "relative", borderRadius: "8px", width: "100%", height: "auto" }}>
                    <CardMedia
                      component="img"
                      image={project.img}
                      alt="Project Image"
                      sx={{ width: "100%", height: 200, borderRadius: "10px" }}
                    />
                  </Box>

                  <CardContent>
                    <Typography variant="h6" fontWeight="bold">
                      {project.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        ml: -2,
                        fontSize: "16px",
                        mt: 1,
                        fontFamily: "Outfit",
                        color: "rgba(255, 255, 255, 0.75)",
                        lineHeight: 1.75,
                        fontWeight: 400,
                        letterSpacing: "0.00938em",
                      }}
                    >
                      {project.description}
                    </Typography>
                  </CardContent>

                  {/* Learn More */}
                  <Typography
                    variant="body2"
                    sx={{ color: "#FFA500", fontWeight: "bold", mt: 2, cursor: "pointer", textDecoration: "none", fontFamily:"Outfit" , fontWeight:400, lineHeight:1.5, fontSize:"22px"}}
                  >
                    {TextContent.collaborativepartners.learnmore}
                  </Typography>
                </Card>
                <IconButton
  onClick={handlePrev}
  disabled={currentIndex === 0}
  sx={{
    position: "absolute",
    left: "5%",
    top: "50%",
    transform: "translateY(-50%)",
    backgroundColor: "#FF6600",
    borderRadius: "50%", // Ensures a perfect circular shape
    width: "45px", // ✅ Fixed width
    height: "45px", // ✅ Fixed height
    minWidth: "45px", // ✅ Prevents shrinking
    minHeight: "45px", // ✅ Prevents shrinking
    display: "flex", // ✅ Centers the icon inside
    alignItems: "center",
    justifyContent: "center",
    zIndex: 2,
    color: "#fff",
    cursor: currentIndex === 0 ? "not-allowed" : "pointer",
    "&:hover": {
      backgroundColor: "#FF6600",
    },
    "&.Mui-disabled": {
      backgroundColor: "#FF6600",
      color: "#fff",
      opacity: 0.3,
    },
  }}
>
  <ArrowBackIos sx={{ fontSize: "20px" }} /> {/* ✅ Adjusted icon size if needed */}
</IconButton>

<IconButton
  onClick={handleNext}
  disabled={currentIndex === 0}
  sx={{
    position: "absolute",
    right: "5%",
    top: "50%",
    transform: "translateY(-50%)",
    backgroundColor: "#FF6600",
    borderRadius: "50%", // Ensures a circular shape
    width: "45px", // ✅ Fixed width
    height: "45px", // ✅ Fixed height (same as width for a perfect circle)
    minWidth: "45px", // ✅ Ensures no shrinkage
    minHeight: "45px", // ✅ Ensures no shrinkage
    display: "flex", // ✅ Ensures proper alignment
    alignItems: "center",
    justifyContent: "center",
    zIndex: 2,
    color: "#fff",
    cursor: currentIndex === 0 ? "not-allowed" : "pointer",
    "&:hover": {
      backgroundColor: "#FF6600",
    },
    "&.Mui-disabled": {
      backgroundColor: "#FF6600",
      color: "#fff",
      opacity: 0.3,
    },
  }}
>
  <ArrowForwardIos sx={{ fontSize: "20px" }} /> {/* ✅ Adjust icon size if needed */}
</IconButton>



              </Grid>
            ))}
          </Grid>
        )}
      </Container>

      {/* Orange Overlay Image - Hides when screen size < 900px */}
      {isLargeScreen && (
        <Box
          component="img"
          src={orange}
          alt="Overlay"
          sx={{
            position: "absolute",
            bottom: -5,
            left: 0,
            width: "100%",
            zIndex: -1,
          }}
        />
      )}
    </Box>
  );
};

export default CollaborativeProjects;