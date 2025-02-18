import React from "react";
import { Box, Container, TextField, Button } from "@mui/material";

const SubscribeSection = () => {
  return (
    <Box 
      sx={{ 
        backgroundColor: "#4B2A69", 
        color: "#fff", 
        py: 9,  // Slightly increased the height by changing the padding to 9
        position: "relative", 
        overflow: "hidden",
        display: "flex",
        justifyContent: "flex-end", 
      }}
    >
      <Container 
        maxWidth="none" // Removes unwanted left padding
        sx={{ 
          display: "flex", 
          justifyContent: "flex-end",
          alignItems: "center",
          flexDirection: "row",
          width: "100%",
          px: 0, // Remove default padding
        }}
      >
        {/* Email Input and Subscribe Button */}
        <Box 
          sx={{ 
            display: "flex", 
            gap: 2, 
            flexShrink: 0,
            justifyContent: "flex-end", 
            width: "auto", // Prevents unnecessary stretching
            marginLeft: "auto", // Ensures it's completely right-aligned
          }}
        >
          <TextField
            variant="outlined"
            placeholder="Enter your email address"
            sx={{ 
              backgroundColor: "#fff", 
              borderRadius: 1, 
              width: { xs: "calc(100% - 40px)", sm: "486px" },  // Width for small screens
              height: "53px", 
              marginLeft: { xs: "20px", sm: 0 }, // Margin left for screens smaller than 600px
            }}
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
              color: "rgba(0, 0, 0, 0.26)", 
              height: "53px",
              px: { xs: 3, sm: 4, md: 4 },
              background: "linear-gradient(98deg, rgb(228, 103, 3) -1.68%, rgb(199, 52, 13) 103.45%)",
              borderRadius: "5px",
              marginRight:"6%"
            }}
          >
            Subscribe
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default SubscribeSection;
