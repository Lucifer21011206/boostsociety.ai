import React from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  Link,
  useTheme,
  useMediaQuery,
  MenuItem,
  Select,
} from "@mui/material";
import rightsidesection from "../assets/rigthsidesection.svg";
import logoicon from "../assets/icon.png";

const Signup = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down(1280));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between(900, 1280));

  return (
    <Grid container sx={{ height: "100vh", backgroundColor: "#F9F9F9" }}>
      {/* Left Section - Form */}
      <Grid
        item
        xs={12}
        md={isSmallScreen ? 12 : 6}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: 3,
          pl: isMediumScreen ? 8 : 3,
        }}
      >
        <Box sx={{ position: "fixed", left: 100, top: 20, maxWidth: 100 }}>
          <img src={logoicon} alt="Business Boost Society" style={{ maxWidth: "120px", width: "120px", height: "88px" }} />
        </Box>

        <Box sx={{ width: "100vw", maxWidth: isSmallScreen ? "800px" : "600px", textAlign: "center" }}>
          <Typography sx={{ textAlign: "left", fontSize: "2.125rem", fontWeight: "500", color: "rgb(0, 0, 0)" }}>
            Get Started Now
          </Typography>
          <Typography sx={{ margin: "16px 0px 0px", fontSize: "18px", fontWeight: 400, color: "#555", mb: 3, textAlign: "left" }}>
            Already have an account? {" "}
            <Link href="/login" sx={{ fontWeight: "600", color: "rgb(82, 49, 104)" ,textDecoration:"none"}}>
              Login
            </Link>
          </Typography>

          {/* Form Fields */}
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
               <Typography sx={{ fontSize: "18px", fontWeight: "400", color: "#333", mt: "6%", mb: "4px" }}>
                  First Name
                </Typography>
              <TextField fullWidth 
              variant="outlined" 
              label="First Name" 
              placeholder="Enter your first name" />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField fullWidth variant="outlined" label="Last Name" placeholder="Enter your last name" />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField fullWidth variant="outlined" label="Title (Designation)" placeholder="Enter title" />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField fullWidth variant="outlined" label="Business Name" placeholder="Enter business name" />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField fullWidth variant="outlined" label="Email" placeholder="Enter email address" />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField fullWidth variant="outlined" label="Mobile Number" placeholder="Enter mobile number" />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField fullWidth variant="outlined" label="Create Password" type="password" placeholder="Create your password" />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField fullWidth variant="outlined" label="Confirm Password" type="password" placeholder="Confirm your password" />
            </Grid>
            <Grid item xs={12}>
  <Select fullWidth displayEmpty defaultValue="">
    <MenuItem value="" disabled>
      Select a business industry
    </MenuItem>
    <MenuItem value="tech">Technology</MenuItem>
    <MenuItem value="finance">Finance</MenuItem>
    <MenuItem value="healthcare">Healthcare</MenuItem>
  </Select>
</Grid>

          </Grid>

          <FormControlLabel
            control={<Checkbox color="primary" />}
            label={
              <Typography sx={{ fontSize: "1rem", fontWeight: 400 }}>
                I agree to the <Link href="#">Terms & Conditions</Link> and <Link href="#">Privacy Policy</Link>.
              </Typography>
            }
            sx={{ mt: 2 }}
          />

          <Button
            variant="contained"
            sx={{
              mt: 3,
              width: "28%",
              background: "linear-gradient(98deg, rgb(228, 103, 3) -1.68%, rgb(199, 52, 13) 103.45%)",
              padding: "12px",
              fontSize: "16px",
              fontWeight: 600,
              borderRadius: "8px",
              textTransform: "none",
              "&:hover": { opacity: 0.9 },
            }}
          >
            Sign Up
          </Button>
        </Box>
      </Grid>

      {!isSmallScreen && (
        <Grid item xs={12} md={6} sx={{ backgroundColor: "#4B286D", display: "flex", justifyContent: "center", alignItems: "center", height: "100%", overflow: "hidden" }}>
          <Box component="img" src={rightsidesection} alt="Illustration" sx={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </Grid>
      )}
    </Grid>
  );
};

export default Signup;
