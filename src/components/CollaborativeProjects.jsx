import React from "react";
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import orange from "../assets/Vector 27.png"; // Orange curved overlay image
import project1 from "../assets/boy.svg"; // Replace with actual images
import project2 from "../assets/boy.svg";
// import { orange } from "@mui/material/colors";

const projects = [
  {
    
    description:
      "VetsFest 2024: Filling Your Bunker for Entrepreneurial Success!, VetsFest 2024, hosted by the Bunker Labs Ambassador Atlanta Team, is a premier event dedicated to empowering veteran and military spouse entrepreneurs.",
    img: "https://storageboostaccount.blob.core.windows.net/test-container-new/1718224796512_BunkerLabs.png",
  },
  {
    // title: "Lunch with a Luminary",
    description:
      "Fascinating conversations with extraordinary individuals. Engage in enlightening exchanges with trailblazers from various sectors and delve into the stories that shaped their paths to success.",
    img: "https://storageboostaccount.blob.core.windows.net/test-container-new/1718226583321_LWLScreenSaver.png",
  },
];

const CollaborativeProjects = () => {
  return (
    <Box sx={{ position: "relative", pb: 10, overflow: "hidden", width:"100vw" }}>
      <Container maxWidth="lg">
        {/* Section Title */}
        <Typography variant="h4" align="center" fontWeight="bold">
          Collaborative Projects
        </Typography>
        <Typography variant="body1" align="center" sx={{ mt: 1, mb: 4, maxWidth: "800px", mx: "auto" }}>
          Our collaborative projects have been at the forefront of innovation, solving complex challenges and achieving remarkable outcomes. Here are some notable projects we have undertaken in collaboration with our partners.
        </Typography>

        {/* Projects Cards */}
        <Grid container spacing={3} justifyContent="center">
          {projects.map((project, index) => (
            <Grid item xs={12} md={5.5} key={index}>
              <Card sx={{ backgroundColor: "#512D6D", borderRadius: "12px", p: 2, color: "#fff" }}>
                {/* Project Image */}
                <Box sx={{ position: "relative", overflow: "hidden", borderRadius: "8px" }}>
                  <CardMedia component="img" image={project.img} alt={project.title} sx={{ width: "100%", height: 200 }} />
                  <Box
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: "5%",
                      transform: "translateY(-50%)",
                      backgroundColor: "rgba(255, 255, 255, 0.2)",
                      padding: "5px",
                      borderRadius: "50%",
                      cursor: "pointer",
                    }}
                  >
                    <ArrowBackIos sx={{ color: "#fff", fontSize: "1rem" }} />
                  </Box>
                </Box>

                <CardContent>
                  <Typography variant="h6" fontWeight="bold">
                    {project.title}
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 1 }}>{project.description}</Typography>
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
      </Container>

      {/* Orange Overlay Image at the Bottom */}
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
    </Box>
  );
};

export default CollaborativeProjects;