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
} from "@mui/material";
import { NightsStay, WbSunny, Login, Menu } from "@mui/icons-material";
import { Link } from "react-router-dom";
import logo from "../assets/icon.png"; // Add your logo path

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.style.backgroundColor = darkMode ? "#fff" : "#121212";
    document.body.style.color = darkMode ? "#000" : "#fff";
  };

  const toggleDrawer = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <AppBar
    position="static"
    elevation={0}
    sx={{
      height: 90, // 🔥 Increased height (was 80 before)
      backgroundColor: "#fff",
      color: "#000",
      padding: "10px 20px", // Slightly more padding for better spacing
    }}
  >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Left Section: Mobile Menu + Logo */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {/* Mobile Menu Icon */}
          <IconButton
            onClick={toggleDrawer}
            sx={{ display: { xs: "block", md: "none" }, color: "#000", mr: 1 }}
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
            }}
          >
            <img src={logo} alt="Business Boost Society" style={{ height: 40 }} />
          </Box>
        </Box>

        {/* Right Section: Navigation Links + Buttons */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          {/* Desktop Navigation Links (Hidden on Mobile) */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            <Button component={Link} to="/about" sx={{ color: "#000", textTransform: "none" }}>
              About Us
            </Button>
            <Button component={Link} to="/cohort" sx={{ color: "#000", textTransform: "none" }}>
              Cohort
            </Button>
            <Button component={Link} to="/accelerator" sx={{ color: "#000", textTransform: "none" }}>
              Accelerator
            </Button>
            <Button component={Link} to="/contact" sx={{ color: "#000", textTransform: "none" }}>
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
              whiteSpace: "nowrap", // 🔥 Ensures text stays on one line
              minWidth: "fit-content", // Prevents excessive stretching
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
              borderRadius: "10px",
              whiteSpace: "nowrap", // 🔥 Prevents wrapping
              minWidth: "fit-content",
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

      {/* Mobile Drawer (Opens from the Left) */}
      <Drawer anchor="left" open={mobileOpen} onClose={toggleDrawer}>
        <List sx={{ width: 250 }}>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/about" onClick={toggleDrawer}>
              <ListItemText primary="About Us" />
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
    </AppBar>
  );
};

export default Navbar;
