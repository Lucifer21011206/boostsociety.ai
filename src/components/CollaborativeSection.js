import React from "react";
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia ,Button } from "@mui/material";
import partner1 from "../assets/icon.png"; // Replace with actual images
import partner2 from "../assets/icon.png";
import partner3 from "../assets/icon.png";
import project1 from "../assets/Rectangle 65.png";
import project2 from "../assets/Rectangle 67.png";
import project3 from "../assets/Rectangle 67(1).png";
import overlayImg from "../assets/Vector 27.png"; // Orange curved overlay image
import icon1 from "../assets/Bussiness.png"; // Replace with actual icons
import icon2 from "../assets/LegalMatters.png";
import icon3 from "../assets/Policies.png";

const CollaborativeSection = () => {

  const handleViewAllFeatures = () => {
    console.log("Navigating to Features Page..."); // Replace with navigation logic
  };

  return (
    <Box sx={{ position: "relative", backgroundColor: "#fff", pb: 10, overflow: "hidden" ,width:"100vw"}}>
      <Container maxWidth="lg">
        {/* Collaborative Partners Section */}
        <Typography variant="h4" align="center" fontWeight="bold" sx={{ mt: 6 }}>
          Collaborative Partners 
        </Typography>
        <Typography variant="body1" align="center" sx={{ mt: 1, mb: 4 }}>
          Business Boost Society is proud to collaborate with industry-leading partners who share our vision for innovation and excellence.These strategic partnerships allow us to combine our expertise and resources to deliver exceptional solutions to our clients. Here are some of our valued collaborative partners
        </Typography>

        {/* Partners Row - Fixed Layout */}
        <Box sx={{ display: "flex", justifyContent: "center", gap: 3, flexWrap: "wrap" }}>
          {[{ name: "Mobilitte Technologies", img: partner1 },
            { name: "Disney Enterprises", img: partner2 },
            { name: "LinkedIn", img: partner3 }].map((partner, index) => (
            <Card
              key={index}
              sx={{
                width: 300,
                height: 200,
                textAlign: "center",
                p: 2,
                backgroundColor: "#F5F5F5",
                borderRadius: "8px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <CardMedia
                component="img"
                height="40"
                image={partner.img}
                alt={partner.name}
                sx={{ objectFit: "contain", m: "auto", mt: 1 }}
              />
              <CardContent>
                <Typography variant="h6" fontWeight="bold" sx={{ fontSize: "1rem" }}>{partner.name}</Typography>
                <Typography variant="body2" sx={{ mt: 1, fontSize: "0.8rem" }}>
                  Our partnership with {partner.name} has been instrumental in driving technological advancements.
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>

        {/* Collaborative Projects Section */}
        <Box sx={{ position: "relative", mt: 8, pb: 8 }}>
          <Typography variant="h4" align="center" fontWeight="bold">
            Collaborative Projects
          </Typography>
          <Typography variant="body1" align="center" sx={{ mt: 1, mb: 4 }}>
            Our collaborative projects have been at the forefront of innovation, solving complex challenges and achieving remarkable outcomes.
          </Typography>

          {/* Orange Background Image (Inside Collaborative Projects, Behind Cards) */}
          <Box
            component="img"
            src={overlayImg}
            alt="Orange Overlay"
            sx={{
              position: "absolute",
              bottom: -30, // Adjust position if needed
              left: 0,
              marginLeft:-55,
              marginRight:-10,
              width: "100vw",
              zIndex: 1, // Keeps it behind project cards
            }}
          />

          {/* Projects Row - Cards (Placed Above the Orange Overlay) */}
          <Grid container spacing={3} justifyContent="center" sx={{ position: "relative", zIndex: 2 }}>
            {[project1, project2, project3].map((project, index) => (
              <Grid item xs={12} sm={4} key={index}>
                <Card
                  sx={{
                    width: 300,
                    textAlign: "center",
                    p: 2,
                    borderRadius: "8px",
                    backgroundColor: "#523168",
                    color: "#fff",
                  }}
                >
                  <CardMedia
                    component="img"
                    height="160"
                    image={project}
                    alt="Project"
                    sx={{ borderRadius: "8px" }}
                  />
                  <CardContent>
                    <Typography variant="body2" sx={{ mt: 1 }}>
                      In publishing and graphic design, Lorem Ipsum is a placeholder text commonly used.
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#FFCC00", fontWeight: "bold", mt: 1 }}>
                      Learn more →
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>








      

            {/* Features Section (After Collaborative Projects) */}
            <Container maxWidth="lg" sx={{ mt: 10 }}>
        <Grid container spacing={5} alignItems="center">
          {/* Left Side - Text and Button */}
          <Grid item xs={12} md={6}>
            <Typography variant="subtitle1" color="primary" sx={{ fontWeight: "bold" }}>
              Key Features & Benefits
            </Typography>
            <Typography variant="h4" fontWeight="bold" sx={{ mt: 1 }}>
              Unlocking Entrepreneurs Potential:
            </Typography>
            <Typography variant="body1" sx={{ mt: 2, mb: 4 }}>
              Unlock your full potential through our exclusive community of entrepreneurs & achieve success through group accountability and support.
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#FF6600",
                color: "#fff",
                borderRadius: "20px",
                px: 3,
                py: 1,
                "&:hover": { backgroundColor: "#E65C00" },
              }}
              onClick={handleViewAllFeatures}
            >
              View All Features →
            </Button>
          </Grid>

          {/* Right Side - Feature Cards */}
          <Grid item xs={12} md={6}>
            <Grid container spacing={2} sx={{mt:3}}>
              {[{
                title: "Business Operations",
                img: icon1,
              
              }, {
                title: "Legal Matters",
                img: icon2
              }, {
                title: "Policies",
                img: icon3
              }, {
                title: "Business Operations",
                img: icon1
              }].map((feature, index) => (
                <Grid item xs={6} key={index}>
                  <Card
                    sx={{
                      borderRadius: "12px",
                      p: 2,
                      backgroundColor: "#F5F5F5",
                      boxShadow: "none",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      textAlign: "center",
                      position: "relative",
                    }}
                  >
                    <Box
                      component="img"
                      src={feature.img}
                      alt={feature.title}
                      sx={{
                        width: 40,
                        height: 40,
                        position: "absolute",
                        top: 10,
                        left: 10,
                      }}
                    />
                    <CardContent>
                      <Typography variant="h6" fontWeight="bold" sx={{ fontSize: "1rem",mt:9 }}>
                        {feature.title}
                      </Typography>
                      <Typography variant="body2" sx={{ fontSize: "0.85rem", mt: 1, mb:-2 }}>
                        In publishing and graphic design, Lorem Ipsum is a placeholder text.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CollaborativeSection;