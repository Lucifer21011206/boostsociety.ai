import React from "react";
import { Box, Typography, Button } from "@mui/material";
import backgroundImg from "../assets/home.svg"; // Background image
import extraOverlay from "../assets/ai.png"; // AI overlay image (Middle Layer)
import overlayImg from "../assets/orange.svg"; // Orange curved overlay (Top Layer)

const HeroSection = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100vw", // Full screen width
        height: "87vh", // Full viewport height
        overflow: "hidden",
      }}
    >
      {/* Background Image (Bottom Layer) */}
      <img
        src={backgroundImg}
        alt="Business Boost Society"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          zIndex: 1,
        }}
      />

      {/* Optional Dark Overlay for better text visibility */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0, 0, 0, 0.4)", // 40% dark overlay
          zIndex: 2,
        }}
      />

      {/* AI Extra Overlay Image (Middle Layer) */}
      <img
        src={extraOverlay}
        alt="Extra Overlay"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          top: 0,
          width: "100%",
          height: "auto",
          zIndex: 3, // Above background, below orange
          opacity: 0.9, // Adjust opacity if needed
        }}
      />

      {/* Text Content (Above Everything Except Orange Overlay) */}
      <Box
        sx={{
          position: "absolute",
          top: "35%",
          left: "50%",
          transform: "translate(-50%, -35%)",
          textAlign: "center",
          color: "white",
          width: { xs: "90%", md: "80%" }, // Responsive width
          zIndex: 4, // Above background & AI overlay, but below orange
        }}
      >
        <Typography variant="h2" fontWeight="bold" sx={{ fontSize: { xs: "2rem", md: "3.5rem" ,mr:300}, ml:-50 }}>
          Business Boost Society
        </Typography>
        <Typography variant="h6" sx={{ mt: 2, maxWidth: "600px", margin: "auto", fontSize: { xs: "1rem", md: "1.2rem" } ,ml:0,mr:50}}>
          Unlock your full potential through our exclusive community of entrepreneurs & 
          achieve success through group accountability and support.
        </Typography>
        <Button
          variant="contained"
          sx={{
            mt: 3,
            mr:-125,
            backgroundColor: "#FF6600",
            color: "#fff",
            fontWeight: "bold",
            borderRadius: "20px",
            px: 4,
            py: 1,
            fontSize: { xs: "0.8rem", md: "1rem" }, // Responsive button text
          }}
        >
          Know More →
        </Button>
      </Box>

      {/* Orange Overlay (Top Layer) */}
      <img
        src={overlayImg}
        alt="Orange Overlay"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "auto",
          zIndex: 5, // TOP layer above everything
        }}
      />
    </Box>
  );
};

export default HeroSection;
