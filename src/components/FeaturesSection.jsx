import React from "react";
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Button } from "@mui/material";
import featureIcon1 from "../assets/heart.png";
import featureIcon2 from "../assets/suitcase.png";
import featureIcon3 from "../assets/file.png";
import featureIcon4 from "../assets/file.png";
import vectorImage from "../assets/Vector 25.svg"; // Decorative vector image

const features = [
  {
    title: "Monitor & Measure",
    description:
      "Feature: Track quantifiable and qualitative results to monitor progress and performance. Benefit: Make data-driven decisions and continuously improve your strategies by measuring the impact of your efforts with clear metrics.",
    icon: featureIcon1,
  },
  {
    title: "Scheduling Functionality",
    description:
      "Feature: Schedule meetings and collaboration sessions between business owners and strategic advisors. Benefit: Optimize your time and enhance productivity by coordinating effectively with your advisors for regular check-ins.",
    icon: featureIcon2,
  },
  {
    title: "Cohort-based Learning",
    description:
      "Feature: Join exclusive cohorts led by industry experts to enhance your business skills and knowledge. Benefit: Collaborate with like-minded entrepreneurs and accelerate your business growth through expert guidance.",
    icon: featureIcon3,
  },
  {
    title: "Personalized Business Support",
    description:
      "Feature: Utilize our advanced AI-powered tool to identify the best funding opportunities tailored to your business needs. Benefit: Save time in securing capital by accessing a curated list of funding options that match your requirements.",
    icon: featureIcon4,
  },
];

const FeaturesSection = () => {
  return (
    <Box sx={{ py: 10, backgroundColor: "#fff" }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          {/* Left Content */}
          <Grid item xs={12} md={6}>
            <Typography variant="body2" sx={{ color: "#FF6600", fontWeight: "bold" }}>
              Key Features & Benefits
            </Typography>
            <Typography variant="h3" fontWeight="bold" sx={{ mt: 1, mb: 2 }}>
              Unlock Exclusive Resources and Opportunities
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7, fontSize: "1.1rem", color: "#333" }}>
              Introducing the BoostSociety.ai portal - your gateway to advanced business and technical functionality.{' '}
              <strong>Partner with us</strong> to host your educational, community, and business programs on our platform,
              benefiting from dynamic, expert-led cohorts and innovative tools. Enhance learning with interactive courses, robust
              community features, and seamless communication. Track progress efficiently and gain valuable insights with our
              monitoring tools. Elevate your organization and unlock your programs' full potential with BoostSociety.ai.{' '}
              <strong>Interested in joining one of our cohorts?</strong> Explore our offerings and apply TODAY!
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#FF6600",
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
              View All Features →
            </Button>
          </Grid>

          {/* Feature Cards */}
          <Grid item xs={12} md={6}>
            <Grid container spacing={3}>
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
                      height: "100%",
                    }}
                  >
                    {/* Decorative Image */}
                    <Box
                      component="img"
                      src={vectorImage}
                      alt="Decorative Vector"
                      sx={{
                        position: "absolute",
                        top: -7,
                        right: 0,
                        width: { xs: 50, md: 90 },
                        height: { xs: 50, md: 90 },
                        zIndex: 1,
                      }}
                    />
                    <CardContent sx={{ p: 3, display: "flex", flexDirection: "column", flexGrow: 1 }}>
                      <Box display="flex" alignItems="center" sx={{ mb: 1 }}>
                        <CardMedia
                          component="img"
                          image={feature.icon}
                          alt={feature.title}
                          sx={{ width: 36, height: 36, mr: 1 }}
                        />
                        <Typography variant="h6" fontWeight="bold">
                          {feature.title}
                        </Typography>
                      </Box>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#555",
                          fontSize: "0.95rem",
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
