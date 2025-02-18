import React from "react";
import { Box, Container, Typography, Grid, List, ListItem, ListItemText } from "@mui/material";
import girlImage from "../assets/girl.png"; // Background Image (Girl Image)
import boyImage from "../assets/boy.svg"; // Circular Image (Boy Image)
import TextContent from "./TextContent";

const HowItWorks = () => {
  return (
    <Box
      sx={{
        position: "relative",
        backgroundImage: `url(${girlImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "#fff",
        pb: 10,
        pt: 5,
        pr: 2,
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5} alignItems="center">
          {/* Left Side - Text and List */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              position: "relative",
              zIndex: 2,
              // Increase the negative margin for larger screens to move it further left
              ml: { xs: 0, md: -20 }, // Increased negative margin to -20 for larger screens
            }}
          >
            <Typography variant="subtitle1" fontFamily="Sans serif" sx={{ fontWeight: 600, fontSize: "20px", lineHeight: 1.5, letterSpacing: "0.00938em", color: "#fff" }}>
              {TextContent.howitworkssection.minimainheading}
            </Typography>
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                color: "#FF6600",
                mt: 1,
                fontFamily: "Outfit",
                lineHeight: 1.5,
                letterSpacing: "0.00938em",
                fontWeight: 500,
                background: "linear-gradient(98deg, rgb(228, 103, 3) -1.68%, rgb(199, 52, 13) 103.45%) padding-box text",
                fontSize: { xs: "20px", md: "40px", lg: "58px" }, // Responsive font sizes
              }}
            >
              {TextContent.howitworkssection.mainheading}
            </Typography>

            {/* For Prospective Partners */}
            <Typography variant="h6" sx={{ fontSize: "30px", fontWeight: "600", fontFamily: "Outfit", mt: 3, lineHeight: 1.5, letterSpacing: "0.00938em" }}>
            {TextContent.howitworkssection.subheading1}
            </Typography>
            <List sx={{ mt: 2, pl: 2 }}>
              {[
                TextContent.howitworkssection.content11,
                TextContent.howitworkssection.content12,
                TextContent.howitworkssection.content13,
              ].map((item, index) => (
                <ListItem key={index} sx={{ pl: 0, mb: 0, fontFamily: "Outfit" }}>
                  <ListItemText
                    primary={`${index + 1}. ${item}`}
                    primaryTypographyProps={{
                      sx: { fontWeight: 500, fontFamily: "Outfit", color: "#fff", lineHeight: 1, letterSpacing: "0.00938em", fontSize: "18px" },
                    }}
                  />
                </ListItem>
              ))}
            </List>

            {/* For Students, Entrepreneurs, or Business Owners */}
            <Typography variant="h6" sx={{ fontWeight: 500, mt: 3, fontSize: "30px", fontFamily: "Outfit", lineHeight: 1.5 }}>
            {TextContent.howitworkssection.subheading2}
            </Typography>
            <List sx={{ mt: 2, pl: 2 }}>
              {[
                TextContent.howitworkssection.content11,
                "Browse our list of cohorts, select a cohort and apply! You can expect a decision according to the info included in the application details.",
                "Join BusinessBoostSociety.com for personalized insights, expert advice, exclusive events, and collaboration opportunities.",
              ].map((item, index) => (
                <ListItem key={index} sx={{ pl: 0 }}>
                  <ListItemText
                    primary={`${index + 1}. ${item}`}
                    primaryTypographyProps={{
                      sx: { fontWeight: 500, fontFamily: "Outfit", color: "#fff", lineHeight: 1, letterSpacing: "0.00938em", fontSize: "18px" },
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </Grid>

          {/* Right Side - Boy Image inside a Round Circle */}
          <Grid 
  item 
  xs={12} 
  md={6} 
  sx={{ 
    display: "flex", 
    justifyContent: "center", 
    position: "relative", 
    zIndex: 3, 
    ml: { xs: 0, md: 18 } // Set margin-left to 18 for medium and larger screens
  }}
>
  <Box
    sx={{
      width: "100%",
      borderRadius: "50%",
      border: "8px solid #fff",
      overflow: "hidden",
      height: "100%",
      mr: { xs: 0, sm: -2, md: -5 }, // No negative margin on small screens, gradually increasing for larger screens
    }}
  >
    <img src={boyImage} alt="Boy Image" style={{ width: "100%", display: "block" }} />
  </Box>
</Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HowItWorks;
