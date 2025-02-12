import React from "react";
import { Box, Container, Typography, Grid, List, ListItem, ListItemText, Button } from "@mui/material";
import girlImage from "../assets/girl.svg"; // Background Image (Girl Image)
import boyImage from "../assets/boy.svg"; // Circular Image (Boy Image)
import o1Image from "../assets/o1.svg"; // Orange Overlay Image

const HowItWorks = () => {
  return (
    <Box
      sx={{
        width:"100vw",
        position: "relative",
        backgroundImage: `url(${girlImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "#fff",
        pb: 10,
        pt: 5,
        overflow: "hidden",
      }}
    >
      {/* Orange Overlay (o1.svg) */}
      <Box
        component="img"
        src={o1Image}
        alt="Overlay"
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "50%",
          zIndex: 1,
        }}
      />

      <Container maxWidth="lg">
        <Grid container spacing={5} alignItems="center">
          {/* Left Side - Text and List */}
          <Grid item xs={12} md={6} sx={{ position: "relative", zIndex: 2 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: "bold", color: "#fff" }}>
              Check Out
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: "bold", color: "#FF6600", mt: 1 }}>
              How Does It Work
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: "bold", mt: 2 }}>
              01. Create an account
            </Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              In publishing and graphic design, Lorem Ipsum is a placeholder text commonly used to demonstrate the visual form of a document.
            </Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              Lorem Ipsum may be used as a placeholder before the final copy is available.
            </Typography>

            {/* Step List */}
            <List sx={{ mt: 3 }}>
              {["Create an account", "Saving Product", "Choose our Plan", "Explore the services"].map((item, index) => (
                <ListItem key={index} sx={{ pl: 0 }}>
                  <ListItemText
                    primary={item}
                    primaryTypographyProps={{
                      sx: { fontWeight: "bold", fontSize: "1rem", color: "#fff" },
                    }}
                  />
                </ListItem>
              ))}
            </List>

            {/* Explore Whitepaper Button */}
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#FF6600",
                color: "#fff",
                borderRadius: "20px",
                px: 3,
                py: 1,
                mt: 3,
                "&:hover": { backgroundColor: "#E65C00" },
              }}
            >
              Explore Whitepaper
            </Button>
          </Grid>

          {/* Right Side - Boy Image inside a Round Circle */}
          <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center", position: "relative", zIndex: 3 }}>
            <Box
              sx={{
                width: "80%",
                maxWidth: 400,
                borderRadius: "50%",
                border: "8px solid #fff",
                overflow: "hidden",
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