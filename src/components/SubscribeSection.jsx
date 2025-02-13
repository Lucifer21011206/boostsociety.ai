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

     

      <Container maxWidth="lg">
        <Grid container spacing={3} alignItems="center">
          {/* Text Content */}
          <Grid item xs={12} md={6}>
           
            
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

     
    </Box>
  );
};

export default SubscribeSection;