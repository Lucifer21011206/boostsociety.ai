import React from "react";
import { Box, Container, Typography, Grid, TextField, Button } from "@mui/material";
import topCornerImage from "../assets/Vector 25.svg"; // Top-left image
import bottomCornerImage from "../assets/Vector 24.svg"; // Bottom-right image

const SubscribeSection = () => {
  return (
    <Box 
      sx={{ width:"100vw",
        backgroundColor: "#4B2A69", 
        color: "#fff", 
        py: 6, 
        borderTopLeftRadius: 0, 
        borderTopRightRadius: 0, 
        position: "relative", 
        overflow: "hidden"
      }}
    >
      {/* Top-Left Corner Image */}
      <Box 
        component="img" 
        src={bottomCornerImage} 
        alt="Top Corner Design" 
        sx={{ 
          position: "absolute", 
          top: 120, 
          left: 0, 
          width: 100, 
          height: "auto"
        }} 
      />

      <Container maxWidth="lg">
        <Grid container spacing={3} alignItems="center">
          {/* Text Content */}
          <Grid item xs={12} md={6}>
            <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
              Be The First To Know
            </Typography>
            <Typography variant="body1" sx={{ opacity: 0.8 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </Grid>

          {/* Subscription Form */}
          <Grid item xs={12} md={6}>
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <TextField
                  fullWidth
                  variant="outlined"
                  placeholder="Your email address"
                  sx={{ backgroundColor: "#fff", borderRadius: 1 }}
                />
              </Grid>
              <Grid item xs={4}>
                <Button fullWidth variant="contained" sx={{ backgroundColor: "#FF6600", color: "#fff", height: "100%" }}>
                  Subscribe
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>

      {/* Bottom-Right Corner Image */}
      <Box 
        component="img" 
        src={topCornerImage} 
        alt="Bottom Corner Design" 
        sx={{ 
          position: "absolute", 
          bottom: 120, 
          right: 0, 
          width: 100, 
          height: "auto"
        }} 
      />
    </Box>
  );
};

export default SubscribeSection;