import React from "react";
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Button } from "@mui/material";
import featureIcon1 from "../assets/heart.png";
import featureIcon2 from "../assets/suitcase.png";
import featureIcon3 from "../assets/file.png";
import featureIcon4 from "../assets/file.png";
import vectorImage from "../assets/Vector 25.svg"; // Decorative vector image
import TextContent from "./TextContent";

const features = [
  {
    title: "Monitor & Measure",
    description:
      "Feature: Track quantifiable and qualitative results to monitor progress and performance. Benefit: Make data-driven decisions and continuously improve your strategies by measuring the impact of your efforts with clear metrics.",
    icon: featureIcon1,
  },
  {
    title: "Scheduling Funct.",
    description:
      "Feature: Schedule meetings and collaboration sessions between business owners and strategic advisors. Benefit: Optimize your time and enhance productivity by coordinating effectively with your advisors for regular check.",
    icon: featureIcon2,
  },
  {
    title: "Cohort-based L..",
    description:
      "Feature: Join exclusive cohorts led by industry experts to enhance your business skills and knowledge. Benefit: Collaborate with like-minded entrepreneurs and accelerate your business growth through expert guidance.",
    icon: featureIcon3,
  },
  {
    title: "Personalized Busine..",
    description:
      "Feature: Utilize our advanced AI-powered tool to identify the best funding opportunities tailored to your business needs. Benefit: Save time in securing capital by accessing a curated list of funding options that match your requirements.",
    icon: featureIcon4,
  },
];

const FeaturesSection = () => {
  return (
    <Box sx={{
      maxWidth: "100vw",
      height: "auto",
      py: 10,
      backgroundColor: "#fff",
      ml: { md: -6, lg: -20 },
      px: { xs: "5%", sm: "7%", md: "0%" },
    }}>
      <Container width="100%">
        <Grid container spacing={6} alignItems="flex-start" width="100vw">
          {/* Left Content */}
          <Grid item xs={12} md={6} sx={{ 
            pl: { xs: 2, sm: 3, md: 5, lg: 0 }, // Add padding based on screen size
            width: "50%",
            '@media (min-width: 900px) and (max-width: 1500px)': {
              pl: "4rem", // Apply padding only in the 900px-1500px range
            },
          }}>
            <Typography variant="body2" letterSpacing="0.00938em" fontFamily="sans-serif" fontWeight="600" fontSize="20px" lineHeight="1.5" sx={{ color: "rgb(251, 63, 16)" }}>
              {TextContent.features.heading}
            </Typography>
            <Typography
              variant="h3"
              fontWeight="600"
              lineHeight="1.5"
              letterSpacing="0.00938em"
              overflow="hidden"
              textOverflow="none"
              sx={{
                mt: 1,
                mb: 2,
                fontSize: { xs: "1.5em", md: "2.5em" },
                fontFamily: "Outfit"
              }}
            >
              {TextContent.features.subheading}
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7, fontSize: "1.1rem", color: "#333", fontFamily: "Outfit", width: "80%" }}>
              {TextContent.features.intro}{' '}
              <strong>{TextContent.features.strong1}</strong> {TextContent.features.intro2}{' '}
              <strong>{TextContent.features.strong2}</strong> {TextContent.features.closingpart}
            </Typography>

            <Button
              variant="contained"
              sx={{
                background: "linear-gradient(98deg, rgb(228, 103, 3) -1.68%, rgb(199, 52, 13) 103.45%)",
                color: "#fff",
                borderRadius: "8px",
                px: 4,
                py: 1.5,
                textTransform: "none",
                fontSize: "1rem",
                fontWeight: "bold",
                boxShadow:
                  "rgba(0, 0, 0, 0.11) 0px 1px 1px, rgba(0, 0, 0, 0.11) 0px 2px 2px, rgba(0, 0, 0, 0.11) 0px 4px 4px, rgba(0, 0, 0, 0.11) 0px 6px 8px, rgba(0, 0, 0, 0.11) 0px 8px 16px",
              }}
            >
              {TextContent.features.viewallfeatures}
            </Button>
          </Grid>

          {/* Feature Cards */}
          <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'flex-start', ml: { xs: 0, md: -2 } }}>
            <Grid container spacing={4} sx={{ maxWidth: '100%', width: '100%' }}>
              {features.map((feature, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Card
                    sx={{
                      borderRadius: "16px",
                      backgroundColor: "rgb(218, 218, 218)",
                      position: "relative",
                      overflow: "hidden",
                      display: "flex",
                      flexDirection: "column",
                      boxShadow:
                        "rgba(0, 0, 0, 0.11) 0px 1px 1px, rgba(0, 0, 0, 0.11) 0px 2px 2px, rgba(0, 0, 0, 0.11) 0px 4px 4px, rgba(0, 0, 0, 0.11) 0px 6px 8px, rgba(0, 0, 0, 0.11) 0px 8px 16px",
                      height: { xs: "250px", sm: "280px", md: "300px" },
                      width: { xs: "75%", sm: "90%", md: "80%" },
                      display: "flex",
                      flexDirection: "column",
                      flexGrow: 1,
                      p: 2,
                    }}
                  >
                    {/* Decorative Image */}
                    <Box
  component="img"
  src={vectorImage}
  alt="Decorative Vector"
  sx={{
    position: "absolute",
    top: -10, // Fine-tuning the position for better alignment
    right: 0,
    width: { xs: 60, sm: 80, md: 100, lg: 120 }, // Adjust size for mobile and larger screens
    height: { xs: 60, sm: 80, md: 100, lg: 120 }, // Same for height to maintain aspect ratio
    zIndex: 1,
    objectFit: "contain", // Ensures the image scales without distortion
  }}
/>



                    <CardContent
                      sx={{
                        p: 3,
                        display: "flex",
                        flexDirection: "column",
                        flexGrow: 1,
                        justifyContent: "space-between",
                      }}
                    >
                      {/* Icon and Title */}
                      <Box sx={{ mb: 1 }}>
                        <CardMedia
                          component="img"
                          image={feature.icon}
                          alt={feature.title}
                          sx={{
                            width: 40,
                            height: 35,
                            display: "inline-block",
                            marginBottom: 1,
                          }}
                        />
                        <Typography
                          variant="h6"
                          sx={{
                            letterSpacing: "0.00938em",
                            lineHeight: 1.5,
                            textOverflow: "ellipsis",
                            fontWeight: "500",
                            display: "block",
                            fontFamily: "Outfit",
                            fontSize: { xs: "16px", sm: "20px", md: "24px" },
                          }}
                        >
                          {feature.title}
                        </Typography>
                      </Box>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#555",
                          fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem" },
                          lineHeight: 1.5,
                          flexGrow: 1,
                        }}
                      >
                        {feature.description}
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

export default FeaturesSection;
