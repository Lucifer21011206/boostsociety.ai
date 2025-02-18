import React from "react";
import { Box, Grid, Typography, Link, IconButton, Divider } from "@mui/material";
import { Telegram, Language, Twitter, Instagram } from "@mui/icons-material";
import logo from "../assets/icon.png"; // Add your logo path
import TextContent from "./TextContent";

const Footer = () => {
  return (
    <Box sx={{ background: "#rgb(82, 49, 104)", color: "#000", pt: 4, width: "100vw" }}>
      <Box sx={{ maxWidth: "1500px", margin: "0 auto", px: { xs: 2, md: 3 } }}>
        <Grid container spacing={3} alignItems="center">
          
          {/* Left Section: Logo */}
          <Grid item xs={12} sm={3} sx={{ display: "flex", justifyContent: { xs: "center", sm: "flex-start" } }}>
            <img src={logo} alt="Business Boost Society" style={{ height: 110, width:150 }} />
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
            <Box sx={{ fontFamily:"Outfit",fontWeight:"400",color:"rgba(38, 38, 38, 0.87)",display: "flex", justifyContent: "center", gap: { xs: 2, md: 3 }, flexWrap: "wrap" }}>
              {["Home", "About Us", "Learning & Lives", "Monitor & Measure", "Contact Us"].map((text) => (
                <Link key={text} href="#" color="inherit" sx={{ textDecoration: "none", fontSize: "14px" }}>
                  {text}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Right Section: Contact Info */}
          <Grid item xs={12} sm={3} sx={{ textAlign: { xs: "center", sm: "right" , width:"113%"} }}>
            <Typography variant="h6" sx={{ fontSize: "14px", fontWeight: "bold", fontFamily:"Outfit"}}>{TextContent.footer.contactus}</Typography>
            <Typography sx={{fontFamily:"Outfit",color:"rgba(38, 38, 38, 0.87)"}} variant="body2">{TextContent.footer.integrallimited}</Typography>
            <Typography sx={{fontFamily:"Outfit",color:"rgba(38, 38, 38, 0.87)"}} variant="body2">{TextContent.footer.location}</Typography>
            <Typography sx={{fontFamily:"Outfit",color:"rgba(38, 38, 38, 0.87)"}} variant="body2">{TextContent.footer.website}</Typography>
            <Typography sx={{fontFamily:"Outfit",color:"rgba(38, 38, 38, 0.87)"}} variant="body2">{TextContent.footer.number}</Typography>
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
    {TextContent.footer.copyright}
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
