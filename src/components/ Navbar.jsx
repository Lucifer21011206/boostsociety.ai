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
import TextContent from "./TextContent";


const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Check if it's mobile screen
  const isMidRange = useMediaQuery("(min-width:600px) and (max-width:1600px)");

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
          height: isMobile ? 70 : 72.4, // Decrease height on mobile
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
            {/* Mobile Menu Icon */}
<IconButton
  onClick={toggleDrawer}
  sx={{
    display: { xs: "block", md: "none" },
    color: "#000",
    ml: "-28px", // Move it more to the left on mobile
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
                mt: { xs: "-8px", md: "-18px" }, // Move logo up on all screens
              }}
            >
              <img
  src={logo}
  alt="Business Boost Society"
  style={{
    height: isMobile ? 60 : 60, // Keep height 60 on all screens
    width: isMobile ? 78 : "auto", // Set width to 78px on mobile
    marginLeft: isMobile ? "10px" : "4px", // Move logo slightly left on mobile
  }}
/>

            </Box>
          </Box>

          {/* Right Section: Navigation Links + Buttons */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 0, ml: "auto" ,mt:"-8px"}}>
            {/* Desktop Navigation Links (Hidden on Mobile) */}
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
              <Button component={Link} to="/about" sx={{ color: "#000", textTransform: "none" ,fontFamily: "Outfit", fontStyle:"normal", fontSize:"15px", fontWeight:400, whiteSpace:"nowrap", gap:"10%"}}>
                {TextContent.navbar.aboutus} <img src={line317} alt="Login Icon" style={{width: "20px", height: "20px" }} />
              </Button>
              <Button component={Link} to="/cohort" sx={{ 
                ml:"-4%", color: "#000", textTransform: "none" ,fontFamily: "Outfit", fontStyle:"normal", fontSize:"15px", fontWeight:400, whiteSpace:"nowrap",gap:"10%" }}>
              {TextContent.navbar.cohort} <img src={line317} alt="Login Icon" style={{width: "20px", height: "20px" }} />
              </Button>
              <Button component={Link} to="/accelerator" sx={{ 
                ml:"-4%",color: "#000", textTransform: "none" ,fontFamily: "Outfit", fontStyle:"normal", fontSize:"15px", fontWeight:400, whiteSpace:"nowrap", gap:"10%"}}>
              {TextContent.navbar.accelerator} <img src={line317} alt="Login Icon" style={{width: "20px", height: "20px" }} />
              </Button>
              <Button component={Link} to="/contact" sx={{ 
                ml:"-4%",color: "#000", textTransform: "none" ,fontFamily: "Outfit", fontStyle:"normal", fontSize:"15px", fontWeight:400, whiteSpace:"nowrap" }}>
              {TextContent.navbar.contactus}
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
                ml:"-5%",
                mr:"1%",
                mt:"0.5%"
              }}
            >
              {TextContent.navbar.signup}
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
    width: "130px",
    height: "42px",
    gap: "10%",
    border: "2px solid var(--Linear, #E46703)",

    // Mobile responsiveness
    "@media (max-width:600px)": {
      width: "83.8px",
      height: "30.75px",
    },
  }}
>
  {TextContent.navbar.login}  
  <img src={loginIcon} alt="Login Icon" style={{ width: "20px", height: "20px" }} />
</Button>

            <IconButton
  onClick={toggleDarkMode}
  sx={{
    color: "#000",
    pr: 6,
    mr: { xs: -4, sm: 0, md: 2, lg: -1 }, // ✅ Adjusts margin for both mobile & 600-1600px range
    ml:"1%"
    
  }}
>
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
