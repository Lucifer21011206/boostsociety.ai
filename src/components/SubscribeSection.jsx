import React, { useState } from "react";
import { Box, Container, Typography, Grid, Card, CardContent, Button, TextField, useMediaQuery } from "@mui/material";
import featureIcon1 from "../assets/heart.png";
import featureIcon2 from "../assets/suitcase.png";
import featureIcon3 from "../assets/file.png";
import featureIcon4 from "../assets/file.png";
import { useTheme } from "@mui/material/styles";

const features = [
  {
    title: "Monitor & Measure",
    description: "Feature: Track quantifiable and qualitative results to monitor progress and performance.",
    icon: featureIcon1,
  },
  {
    title: "Scheduling Funct.",
    description: "Feature: Schedule meetings and collaboration sessions between business owners and strategic advisors.",
    icon: featureIcon2,
  },
  {
    title: "Cohort-based L..",
    description: "Feature: Join exclusive cohorts led by industry experts to enhance your business skills and knowledge.",
    icon: featureIcon3,
  },
  {
    title: "Personalized Busine..",
    description: "Feature: Utilize our advanced AI-powered tool to identify the best funding opportunities tailored to your business needs.",
    icon: featureIcon4,
  },
];

const FeaturesSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(600));
  const [email, setEmail] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleChange = (e) => {
    setEmail(e.target.value);
    setIsTyping(e.target.value.length > 0);
  };

  return (
    <Box sx={{ maxWidth: "100vw", py: 10, backgroundColor: "#fff", ml: { md: -6, lg: -20 }, px: { xs: "5%", sm: "7%", md: "0%" } }}>
      <Container width="100%">
        <Grid container spacing={8} alignItems="flex-start" width="100vw">
          <Grid item xs={12} md={6} sx={{ pl: { md: "5%", lg: 0 }, width: "50%" }}>
            <Typography variant="body2" fontFamily="sans-serif" fontSize="20px" fontWeight="600" sx={{ mt: 2, color: "#FF6600" }}>
              Key Features & Benefits
            </Typography>
            <Typography variant="h3" fontWeight="600" lineHeight="1.5" letterSpacing="0.00938em" sx={{ mt: 1, mb: 2, fontSize: { xs: "1.5em", md: "2.5em" }, fontFamily: "Outfit" }}>
              Unlock Exclusive Resources and Opportunities
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7, fontSize: "1.1rem", color: "#333", fontFamily: "Outfit", width: "80%" }}>
              Introducing the BoostSociety.ai portal - your gateway to advanced business and technical functionality.
            </Typography>
            <TextField
              variant="outlined"
              placeholder="Enter your email address"
              value={email}
              onChange={handleChange}
              sx={{ backgroundColor: "#fff", borderRadius: 1, width: { xs: "calc(100% - 40px)", sm: "486px" }, height: "53px", marginLeft: { xs: "20px", sm: 0 } }}
            />
            <Button
              variant="contained"
              sx={{
                minWidth: "120px",
                fontFamily: "Outfit",
                fontWeight: "500",
                display: "inline-flex",
                boxSizing: "border-box",
                lineHeight: "1.75",
                letterSpacing: "0.02857em",
                backgroundColor: "#FF6600",
                color: isTyping ? "#fff" : "rgba(0, 0, 0, 0.26)",
                height: "53px",
                px: { xs: 3, sm: 4, md: 4 },
                background: "linear-gradient(98deg, rgb(228, 103, 3) -1.68%, rgb(199, 52, 13) 103.45%)",
                borderRadius: "5px",
                marginRight: "6%",
              }}
            >
              Subscribe
            </Button>
          </Grid>
          <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: isMobile ? 'center' : 'flex-end', ml: isMobile ? 0 : -17 }}>
            <Grid container sx={{ maxWidth: '95%', columnGap: '0px', rowGap: '40px', justifyContent: isMobile ? 'center' : 'flex-start' }}>
              {features.map((feature, index) => (
                <Grid item xs={12} sm={6} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
                  <Card sx={{ borderRadius: "16px", backgroundColor: "rgb(218, 218, 218)", position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", height: "280px", width: "85%" }}>
                    <CardContent sx={{ p: 3, display: "flex", flexDirection: "column", flexGrow: 1 }}>
                      <Typography variant="h6" sx={{ fontFamily: "Outfit", fontWeight: "500", mt: 1, fontSize: "24px", color: "rgba(0, 0, 0, 0.87)" }}>
                        {feature.title}
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
