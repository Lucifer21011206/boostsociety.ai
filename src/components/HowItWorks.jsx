import React from "react";
import { Box, Container, Typography, Grid, List, ListItem, ListItemText } from "@mui/material";
import work from "../assets/work.png"; // Background Image (Girl Image)
import boyImage from "../assets/boy.svg"; // Circular Image (Boy Image)
import TextContent from "./TextContent";

const HowItWorks = () => {
  return (
    <Box
      sx={{
        position: "relative",
        backgroundImage: `url(${work})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "#fff",
        pb: 5,
        pt: 0,
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
            md={7} // Increased width from 6 to 7
            sx={{
              position: "relative",
              zIndex: 2,
              ml: { xs: 0, md: -20 },
            }}
          >
            <Typography variant="subtitle1" fontFamily="Sans serif" sx={{ mt: 2, fontWeight: 600, fontSize: "20px", lineHeight: 1.5, letterSpacing: "0.00938em", color: "#fff", scrollbarWidth: "none" }}>
              {TextContent.howitworkssection.minimainheading}
            </Typography>
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                color: "#FF6600",
                mt: 0,
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
            <Typography variant="h6" sx={{ fontSize: "30px", fontWeight: "600", fontFamily: "Outfit", mt: 1, lineHeight: 1.5, letterSpacing: "0.00938em", ml:2 ,width:"110%"}}>
              {TextContent.howitworkssection.subheading1}
            </Typography>
            <List sx={{ mt: 0, pl: 2 , width:"105%"}}>
              {[
                TextContent.howitworkssection.content11,
                TextContent.howitworkssection.content12,
                TextContent.howitworkssection.content13,
              ].map((item, index) => (
                <ListItem key={index} sx={{ pl: 0, fontFamily: "Outfit", mb: -2.0 }}> 
                  <ListItemText
                    primary={`${index + 1}. ${item}`}
                    primaryTypographyProps={{
                      sx: { 
                        fontWeight: 500, 
                        fontFamily: "Outfit", 
                        color: "#fff", 
                        lineHeight: 1.2, 
                        letterSpacing: "0.00938em", 
                        fontSize: "18px" 
                      },
                    }}
                  />
                </ListItem>
              ))}
            </List>

            {/* For Students, Entrepreneurs, or Business Owners */}
            <Typography variant="h6" sx={{ fontWeight: 500, mt: 1, fontSize: "30px", fontFamily: "Outfit", lineHeight: 1.5, ml:2, width:"110%" }}>
              {TextContent.howitworkssection.subheading2}
            </Typography>
            <List sx={{ mt: 0, pl: 2 , width:"110%"}}>
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
            md={5} // Reduced from 6 to 5 to balance with wider content
            sx={{ 
              display: "flex", 
              justifyContent: "center", 
              position: "relative", 
              zIndex: 3, 
              ml: { xs: 0, md: 18 }
            }}
          >
           
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HowItWorks;
