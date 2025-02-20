import React from "react";
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Button, useMediaQuery } from "@mui/material";
import featureIcon1 from "../assets/heart.png";
import featureIcon2 from "../assets/suitcase.png";
import featureIcon3 from "../assets/file.png";
import featureIcon4 from "../assets/file.png";
import vectorImage from "../assets/Vector 25.svg"; // Decorative vector image
import { useTheme } from "@mui/material/styles";
import TextContent from "./TextContent";

const features = [
  {
    title: TextContent.features.cardtitle1,
    description: TextContent.features.carddescription1,
    icon: featureIcon1,
  },
  {
    title: TextContent.features.cardtitle2,
    description: "Feature: Schedule meetings and collaboration sessions between business owners and strategic advisors. Benefit: Optimize your time and enhance productivity by coordinating effectively with your advisors for regular check-ins.",
    icon: featureIcon2,
  },
  {
    title: "Cohort-based L..",
    description: "Feature: Join exclusive cohorts led by industry experts to enhance your business skills and knowledge. Benefit: Collaborate with like-minded entrepreneurs and accelerate your business growth through expert guidance.",
    icon: featureIcon3,
  },
  {
    title: "Personalized Busine..",
    description: "Feature: Utilize our advanced AI-powered tool to identify the best funding opportunities tailored to your business needs. Benefit: Save time in securing capital by accessing a curated list of funding options that match your req..",
    icon: featureIcon4,
  },
];

const FeaturesSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(600)); // Mobile (< 600px)

  return (
    <Box sx={{
      maxWidth: "100vw",
      py: 10,
      backgroundColor: "#fff",
      ml: { md: -6, lg: -20 }, // Shift left only on larger screens
      px: { xs: "5%", sm: "7%", md: "0%" }, // Add padding for smaller screens
    }}>
      <Container width="100%">
        <Grid container spacing={8} alignItems="flex-start" width="100vw">
          {/* Left Content */}
          <Grid item xs={12} md={6} sx={{ pl: { md: "5%", lg: 0 }, width: "50%" }}>
            <Typography variant="body2" fontFamily="Alumni Sans" fontSize="20px" lineHeight="1.5" sx={{ mt: 2, fontWeight: "600", color: "rgb(251, 63, 16)",  }}>
              Key Features & Benefits
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
              Unlock Exclusive Resources and Opportunities
            </Typography>
            <Typography
  variant="body1"
  sx={{
    mb: 3,
    lineHeight: 1.7,
    fontSize: { xs: "18px", md: "1.1rem" }, // 18px on mobile, 1.1rem on larger screens
    color: "#333",
    fontFamily: "Outfit",
    width: "80%",
  }}
>
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
              View All Features →
            </Button>
          </Grid>

          {/* Feature Cards */}
          <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: isMobile ? 'center' : 'flex-end', ml: isMobile ? 0 : -17 }}>
            <Grid container sx={{ maxWidth: '95%', columnGap: '0px', rowGap: '40px', justifyContent: isMobile ? 'center' : 'flex-end' }}>
              {features.map((feature, index) => (
                <Grid item xs={12} sm={6} key={index} sx={{ ml: '-6px', mr: '-6px' }}>
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
                      height: "280px",
                      width: "85%" // Slightly reduced width
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
                        width: { xs: 90, md: 90 },
                        height: { xs: 90, md: 90 },
                        zIndex: 1,
                      }}
                    />
                    <CardContent sx={{ p: 3, display: "flex", flexDirection: "column", flexGrow: 1 }}>
                      <Box display="flex" flexDirection="column" alignItems="flex-start" sx={{ mb: 1 }}>
                        <CardMedia
                          component="img"
                          image={feature.icon}
                          alt={feature.title}
                          sx={{ width: 44, height: 40, mt: -1 }}
                        />
                       <Typography 
  variant="h6" 
  sx={{ 
    fontFamily: "Outfit", 
    fontWeight: "500", 
    mt: 1, 
    fontSize: { xs: "18px", md: "24px" }, // 18px on mobile, 24px on larger screens
    color: "rgba(0, 0, 0, 0.87)" 
  }}
>
  {feature.title}
</Typography>

                      </Box>
                      <Typography
  variant="body2"
  sx={{
    color: "#555",
    fontSize: { xs: "12px", md: "0.95rem" }, // 12px on mobile, 0.95rem on larger screens
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