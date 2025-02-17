import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { NightsStay, WbSunny, Login, Menu } from "@mui/icons-material";
import { Link } from "react-router-dom";
import logo from "../assets/icon.png";
import loginIcon from "../assets/Layer 2.svg"; 
import line317 from "../assets/Line 317.svg"; // Add your logo path


const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Check if it's mobile screen

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.style.backgroundColor = darkMode ? "#fff" : "#121212";
    document.body.style.color = darkMode ? "#000" : "#fff";
  };

  const toggleDrawer = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      {/* Fixed Navbar */}
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          height: isMobile ? 60 : 72.4, // Decrease height on mobile
          backgroundColor: "#fff",
          color: "#000",
          padding: isMobile ? "5px 15px" : "9px 20px", // Adjust padding for mobile
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: isMobile ? "flex-start" : "space-between", // Move content left on mobile
            minHeight: isMobile ? "60px" : "78px", // Reduce height on mobile
            width: "100%",
          }}
        >
          {/* Left Section: Logo & Mobile Menu - Shifted slightly to the left */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, ml: isMobile ? 0 : 2 }}>
            {/* Mobile Menu Icon */}
            <IconButton
              onClick={toggleDrawer}
              sx={{
                display: { xs: "block", md: "none" },
                color: "#000",
              }}
            >
              <Menu />
            </IconButton>

            {/* Logo */}
            <Box
              component={Link}
              to="/"
              sx={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
                mt: { xs: "-8px", md: "-10px" }, // Move logo up on all screens
              }}
            >
              <img
                src={logo}
                alt="Business Boost Society"
                style={{
                  height: isMobile ? 35 : 60, // Smaller on mobile, bigger on desktop
                  width: "auto",
                  marginLeft: isMobile ? "10px" : "0px", // Move logo slightly left on mobile
                }}
              />
            </Box>
          </Box>

          {/* Right Section: Navigation Links + Buttons */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2, ml: "auto" }}>
            {/* Desktop Navigation Links (Hidden on Mobile) */}
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
              <Button component={Link} to="/about" sx={{ color: "#000", textTransform: "none" ,fontFamily: "Outfit", fontStyle:"normal", fontSize:"15px", fontWeight:400, whiteSpace:"nowrap", gap:"30%"}}>
                About Us <img src={line317} alt="Login Icon" style={{width: "20px", height: "20px" }} />
              </Button>
              <Button component={Link} to="/cohort" sx={{ color: "#000", textTransform: "none" ,fontFamily: "Outfit", fontStyle:"normal", fontSize:"15px", fontWeight:400, whiteSpace:"nowrap",gap:"30%" }}>
                Cohort <img src={line317} alt="Login Icon" style={{width: "20px", height: "20px" }} />
              </Button>
              <Button component={Link} to="/accelerator" sx={{ color: "#000", textTransform: "none" ,fontFamily: "Outfit", fontStyle:"normal", fontSize:"15px", fontWeight:400, whiteSpace:"nowrap", gap:"20%"}}>
                Accelerator <img src={line317} alt="Login Icon" style={{width: "20px", height: "20px" }} />
              </Button>
              <Button component={Link} to="/contact" sx={{ color: "#000", textTransform: "none" ,fontFamily: "Outfit", fontStyle:"normal", fontSize:"15px", fontWeight:400, whiteSpace:"nowrap" }}>
                Contact Us
              </Button>
            </Box>

            {/* Sign Up, Login, Dark Mode Toggle */}
            <Button
              component={Link}
              to="/signup"
              sx={{
                fontWeight: "bold",
                color: "#000",
                textTransform: "none",
                whiteSpace: "nowrap",
                minWidth: "fit-content",
              }}
            >
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
                borderRadius: "5px",
                whiteSpace: "nowrap",
                minWidth: "fit-content",
                gap:"10%"
              }}
              // startIcon={<Login />}
            >
              Login   <img src={loginIcon} alt="Login Icon" style={{width: "20px", height: "20px" }} />
            </Button>
            <IconButton onClick={toggleDarkMode} sx={{ color: "#000", pr:6}}>
              {darkMode ? <WbSunny /> : <NightsStay />}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Spacer to prevent content from overlapping */}
      <Box sx={{ height: isMobile ? 60 : 72.4 }} />

      {/* Mobile Drawer (Opens from the Left) */}
      <Drawer anchor="left" open={mobileOpen} onClose={toggleDrawer}>
        <List sx={{ width: 250 }}>
          <ListItem disablePadding>
          <ListItemButton component={Link} to="/about" onClick={toggleDrawer}>
  <ListItemText 
    primary="About Us"  
    
  />
</ListItemButton>

          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/cohort" onClick={toggleDrawer}>
              <ListItemText primary="Cohort" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/accelerator" onClick={toggleDrawer}>
              <ListItemText primary="Accelerator" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/contact" onClick={toggleDrawer}>
              <ListItemText primary="Contact Us" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
