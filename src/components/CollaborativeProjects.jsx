import React, { useState } from "react";
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, useMediaQuery } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import { useSwipeable } from "react-swipeable";
import orange from "../assets/Vector 27.png"; // Orange curved overlay image

const projects = [
  {
    description:
      "VetsFest 2024: Filling Your Bunker for Entrepreneurial Success! VetsFest 2024, hosted by the Bunker Labs Ambassador Atlanta Team, is a premier event dedicated to empowering veteran and military spouse entrepreneurs.",
    img: "https://storageboostaccount.blob.core.windows.net/test-container-new/1718224796512_BunkerLabs.png",
  },
  {
    description:
      "Fascinating conversations with extraordinary individuals. Engage in enlightening exchanges with trailblazers from various sectors and delve into the stories that shaped their paths to success.",
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
  Collaborative Projects
</Typography>

        <Typography
          variant="body1"
          align="center"
          sx={{ mt: 1, mb: 4, maxWidth: "1200px", mx: "auto",fontFamily: "Outfit", fontWeight:400, letterSpacing:"0em",lineHeight: 1.334 , fontSize:"18px",   color: "rgba(63, 60, 60, 0.87)"}}
        >
          Our collaborative projects have been at the forefront of innovation, solving complex challenges and achieving remarkable outcomes. Here are some notable projects we have undertaken in collaboration with our partners.
        </Typography>

        {/* Mobile View: Carousel */}
        {isMobile ? (
          <Box {...handlers} sx={{ display: "flex", justifyContent: "center", alignItems: "center", position: "relative" }}>
            <Card sx={{ backgroundColor: "#512D6D", borderRadius: "17px", p: 2, color: "#fff", width: "80%" }}>
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
            <ArrowBackIos
              sx={{
                position: "absolute",
                left: "5%",
                color: "#fff",
                fontSize: "1.5rem",
                cursor: "pointer",
                display: currentIndex === 0 ? "none" : "block",
              }}
              onClick={handlePrev}
            />
            <ArrowForwardIos
              sx={{
                position: "absolute",
                right: "5%",
                color: "#fff",
                fontSize: "1.5rem",
                cursor: "pointer",
                display: currentIndex === projects.length - 1 ? "none" : "block",
              }}
              onClick={handleNext}
            />
          </Box>
        ) : (
          <Grid container spacing={3} sx={{ width: isTablet ? "85%" : "80%", marginLeft: isTablet ? "5%" : "-17%", height: "500px", borderRadius: "30px" }}>
            {projects.map((project, index) => (
              <Grid item xs={12} md={isTablet ? 6 : 5.5} key={index} sx={{ display: "flex" }}>
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
                    sx={{ color: "#FFA500", fontWeight: "bold", mt: 2, cursor: "pointer", textDecoration: "none" }}
                  >
                    Learn more →
                  </Typography>
                </Card>
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
