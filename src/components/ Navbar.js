import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Box,
} from "@mui/material";
import { NightsStay, WbSunny, Login } from "@mui/icons-material";
import { Link } from "react-router-dom";
import logo from "../assets/icon.png"; // Add your logo path

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.style.backgroundColor = darkMode ? "#fff" : "#121212";
    document.body.style.color = darkMode ? "#000" : "#fff";
  };

  return (
    <AppBar position="static" elevation={0} sx={{ heigh:550,backgroundColor: "#fff", color: "#000", padding: "5px 20px"}}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        
        {/* Logo */}
        <Box component={Link} to="/" sx={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
          <img src={logo} alt="Business Boost Society" style={{ height: 40 ,marginLeft:"100%"}} />
        </Box>

        {/* Navigation Links */}
        <Box sx={{ display: "flex", gap: 3 ,mr:-130}}>
          <Button component={Link} to="/about" sx={{ color: "#000", textTransform: "none" }}>About Us</Button>
          <Button component={Link} to="/cohort" sx={{ color: "#000", textTransform: "none" }}>Cohort</Button>
          <Button component={Link} to="/accelerator" sx={{ color: "#000", textTransform: "none" }}>Accelerator</Button>
          <Button component={Link} to="/contact" sx={{ color: "#000", textTransform: "none" }}>Contact Us</Button>
        </Box>

        {/* Signup, Login, Dark Mode Toggle */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Button component={Link} to="/signup" sx={{ fontWeight: "bold", color: "#000", textTransform: "none" }}>
            Sign Up
          </Button>
          <Button
            component={Link}
            to="/login"
            variant="outlined"
            sx={{
              borderColor: "#ff6600",
              color: "#ff6600",
              textTransform: "none",
              fontWeight: "bold",
              borderRadius: "10px",
            }}
            startIcon={<Login />}
          >
            Login
          </Button>
          <IconButton onClick={toggleDarkMode} sx={{ color: "#000" }}>
            {darkMode ? <WbSunny /> : <NightsStay />}
          </IconButton>
        </Box>

      </Toolbar>
    </AppBar>
  );
};

export default Navbar;