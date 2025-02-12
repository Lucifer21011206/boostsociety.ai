import React from "react";
import { Box, Container, Typography, Grid, Card, CardContent, IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import testimonialImage from "../assets/Boy1.svg"; // Replace with actual image path

const TestimonialsSection = () => {
  return (
    <Box sx={{ textAlign: "center", py: 8 }}>
      <Typography variant="h4" sx={{ fontWeight: "bold" }}>
        You Are The Center Of Our Universe
      </Typography>
      <Typography variant="subtitle1" sx={{ color: "#FF6600", mt: 1 }}>
        Testimonials
      </Typography>

      <Container maxWidth="lg" sx={{ mt: 5 }}>
        <Grid container spacing={3} alignItems="center" justifyContent="center">
          {/* Left Navigation */}
          <Grid item xs={12} sm={1} sx={{ display: "flex", justifyContent: "center" }}>
            <IconButton sx={{ backgroundColor: "#FF6600", color: "#fff" }}>
              <ArrowBackIos />
            </IconButton>
          </Grid>

          {/* Testimonial Boxes */}
          {[ 
            { 
              text: "In publishing and graphic design, Lorem Ipsum is a placeholder text commonly used to demonstrate the visual form of a document.", 
              name: "Michel Jochson, Operation Coordinator" 
            },
            { 
              text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has been the industry's standard dummy text ever since.", 
              name: "Sarah Smith, Product Manager" 
            }
          ].map((testimonial, index) => (
            <Grid key={index} item xs={12} sm={5}>
              <Card sx={{ 
                p: 4, 
                borderRadius: 3, 
                boxShadow: 3, 
                minHeight: 250, // Ensures same height for both cards
                display: "flex", 
                flexDirection: "column", 
                justifyContent: "space-between" 
              }}>
                <Box sx={{ display: "flex", justifyContent: "center", mb: 2, mt:0 }}>
                  <img src={testimonialImage} alt="User" style={{ width: 70, height: 70, borderRadius: "50%" }} />
                </Box>
                <CardContent>
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

          {/* Right Navigation */}
          <Grid item xs={12} sm={1} sx={{ display: "flex", justifyContent: "center" }}>
            <IconButton sx={{ backgroundColor: "#FF6600", color: "#fff" }}>
              <ArrowForwardIos />
            </IconButton>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default TestimonialsSection;