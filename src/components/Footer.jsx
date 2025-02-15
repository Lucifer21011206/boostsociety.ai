import React from "react";
import { Box, Grid, Typography, Link, IconButton, Divider } from "@mui/material";
import { Telegram, Language, Twitter, Instagram } from "@mui/icons-material";
import logo from "../assets/icon.png"; // Add your logo path

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#fff", color: "#000", pt: 4, width: "100vw" }}>
      <Box sx={{ maxWidth: "1500px", margin: "0 auto", px: { xs: 2, md: 3 } }}>
        <Grid container spacing={3} alignItems="center">
          
          {/* Left Section: Logo */}
          <Grid item xs={12} sm={3} sx={{ display: "flex", justifyContent: { xs: "center", sm: "flex-start" } }}>
            <img src={logo} alt="Business Boost Society" style={{ height: 50 }} />
          </Grid>

          {/* Center Section: Social Media & Navigation Links */}
          <Grid item xs={12} sm={6} sx={{ textAlign: "center", width:"100%" }}>
            {/* Social Icons */}
            <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mb: 2 }}>
              <IconButton href="#" sx={{ color: "#ff6600" }}><Telegram /></IconButton>
              <IconButton href="#" sx={{ color: "#ff6600" }}><Language /></IconButton>
              <IconButton href="#" sx={{ color: "#ff6600" }}><Twitter /></IconButton>
              <IconButton href="#" sx={{ color: "#ff6600" }}><Instagram /></IconButton>
            </Box>
            
            {/* Navigation Links */}
            <Box sx={{ display: "flex", justifyContent: "center", gap: { xs: 2, md: 3 }, flexWrap: "wrap" }}>
              {["Home", "About Us", "Learning & Lives", "Monitor & Measure", "Contact Us"].map((text) => (
                <Link key={text} href="#" color="inherit" sx={{ textDecoration: "none", fontSize: "14px" }}>
                  {text}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Right Section: Contact Info */}
          <Grid item xs={12} sm={3} sx={{ textAlign: { xs: "center", sm: "right" , width:"113%"} }}>
            <Typography variant="h6" sx={{ fontSize: "14px", fontWeight: "bold" }}>Contact Us</Typography>
            <Typography variant="body2">INTEGRAL ENTERPRISE LIMITED</Typography>
            <Typography variant="body2">Jadola Place, 1st Floor, Ngong Lane, Off Ngong Road</Typography>
            <Typography variant="body2">connect@enterprise.com</Typography>
            <Typography variant="body2">Tel: +254 797 717717</Typography>
          </Grid>
        </Grid>
      </Box>

      {/* Bottom Divider */}
      <Divider sx={{ my: 3 }} />

      {/* Footer Bottom Section */}
      <Box sx={{ backgroundColor: "#4B286D", color: "#fff", py: 2, width: "100vw" }}>
  <Box
    sx={{
      maxWidth: "1500px",
      margin: "0 auto",
      px: { xs: 2, md: 3 },
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
    }}
  >
    <Typography variant="body2" sx={{ cursor:"pointer",fontSize: "14px" , fontFamily:"Outfit", fontWeight:"400", lineHeight:1.5}}>
    © 2024 Give Me a Boost | BOOST STRATEGY GROUP™ LLC
    </Typography>
    <Box sx={{ display: "flex", flexWrap: "wrap", gap: { xs: 1, md: 5 }, cursor:"pointer",fontSize: "1rem" , fontFamily:"Outfit", fontWeight:"400", lineHeight:1.5 }}>
      {["Terms & Conditions", "Privacy Policy", "Cookies Policies", "FAQs", "Contact Us"].map((text) => (
        <Link key={text} href="#" color="inherit" sx={{ textDecoration: "none", fontSize: "14px", letterSpacing: "0.00938em", color: "rgba(255, 255, 255, 0.75)", fontWeight:400 }}>
          {text}
        </Link>
      ))}
    </Box>
  </Box>
</Box>


    </Box>
  );
};

export default Footer;
