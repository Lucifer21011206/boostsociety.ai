import React from "react";
import { Box, Container, Typography, Grid, Card, CardContent, Avatar, IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

// Dummy images (Replace these with actual image paths)
import user1 from "../assets/boy.svg";
import user2 from "../assets/boy.svg";
import user3 from "../assets/boy.svg";

const testimonials = [
  {
    text: "This cohort has been amazing! I am so more confident about myself as a leader and the direction of my business. Thank you, Business BOOST! Society!!!",
    name: "Nathaniel, Owner",
    image: "https://storageboostaccount.blob.core.windows.net/test-container-new/1715111550471_blob",
  },
  {
    text: "Taking over my late father's construction business as a woman in a male-dominated industry is tough. This cohort provided me with the knowledge, connections & confidence needed.",
    name: "Beatriz W., Owner",
    image: "https://storageboostaccount.blob.core.windows.net/test-container-new/1721840222921_BeatrizWillington-construction.png",
  },
  {
    text: "Being part of the 'BOOST! Your Business' cohort has been incredible. The guidance and support from my BSA and others were invaluable in helping me achieve several business goals.",
    name: "Ta'Nesha Justice, Owner",
    image: "https://storageboostaccount.blob.core.windows.net/test-container-new/1723667869953_TaNeshaJustice_ComfyCare_biopic.jpg",
  },
];

const TestimonialsSection = () => {
  return (
    <Box sx={{ textAlign: "center", py: 8 }}>
      <Typography variant="h4" sx={{ fontWeight: "bold" }}>
        Testimonials
      </Typography>

      <Container maxWidth="lg" sx={{ mt: 5 }}>
        <Grid container spacing={2} alignItems="center" justifyContent="center">
          {/* Left Arrow */}
          <Grid item>
            <IconButton sx={{ backgroundColor: "#FF6600", color: "#fff", "&:hover": { backgroundColor: "#E65C00" } }}>
              <ArrowBackIos />
            </IconButton>
          </Grid>

          {/* Testimonial Cards - Ensuring they stay in a single row */}
          <Grid item xs={12} md={10}>
            <Grid container spacing={3} justifyContent="center">
              {testimonials.map((testimonial, index) => (
                <Grid key={index} item xs={12} sm={4}>
                  <Card
                    sx={{
                      height: 270, // Fixed height for uniformity
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      p: 4,
                      borderRadius: 3,
                      boxShadow: 3,
                      textAlign: "center",
                      position: "relative",
                      gap: 2,
                    }}
                  >
                    {/* User Image on Top */}
                    <Avatar
                      src={testimonial.image}
                      alt="User"
                      sx={{
                        width: 70,
                        height: 70,
                        position: "absolute",
                        top: -35,
                        left: "50%",
                        transform: "translateX(-50%)",
                      }}
                    />

                    <CardContent sx={{ width: "100%", flexGrow: 1, mt: 4 }}>
                      <Typography variant="body1" sx={{ fontStyle: "italic" }}>
                        "{testimonial.text}"
                      </Typography>
                      <Typography variant="h6" sx={{ fontWeight: "bold", mt: 2 }}>
                        {testimonial.name}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* Right Arrow */}
          <Grid item>
            <IconButton sx={{ backgroundColor: "#FF6600", color: "#fff", "&:hover": { backgroundColor: "#E65C00" } }}>
              <ArrowForwardIos />
            </IconButton>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default TestimonialsSection;