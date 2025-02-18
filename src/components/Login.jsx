import React, { useState } from "react";
import { Box, Grid, Typography, TextField, Button, FormControlLabel, Checkbox, Link, useTheme, useMediaQuery } from "@mui/material";

import rightsidesection from "../assets/rigthsidesection.svg";
import logoicon from "../assets/icon.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form
    const newErrors = { email: "", password: "" };

    if (!email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email address is invalid.";
    }

    if (!password) {
      newErrors.password = "Password is required.";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long.";
    }

    setErrors(newErrors);

    if (!newErrors.email && !newErrors.password) {
      // Form is valid, proceed with login
      console.log("Form Submitted");
    }



  };

  const isSmallHeight = useMediaQuery("(max-height: 640px)");
  const isMediumHeight = useMediaQuery("(min-height: 641px) and (max-height: 790px)");
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down(1280)); // Hide right image below 1280px
  const isMediumScreen = useMediaQuery(theme.breakpoints.between(900, 1280)); // Adjust width when image is hidden

  // Form validation schema
  // const validationSchema = Yup.object({
  //   email: Yup.string()
  //     .email("Invalid email address")
  //     .required("Email is required"),
  //   password: Yup.string()
  //     .min(6, "Password must be at least 6 characters")
  //     .required("Password is required"),
  // });

  return (
    <Grid
      container
      sx={{
        height: "100vh",
        backgroundColor: "#F9F9F9",
      }}
    >
      {/* Left Section - Form */}
      <Grid
        item
        xs={12}
        md={isSmallScreen ? 12 : 6} // Expands to full width when image is removed
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: 3,
          pl: isMediumScreen ? 8 : 3, // Adds left padding between 900px - 1280px
        }}
      >
        {/* Logo Section */}
        <Box sx={{ position: "fixed", left: 100, top: 20, maxWidth: 100 }}>
          <img
            src={logoicon}
            alt="Business Boost Society"
            style={{ maxWidth: "120px", width: "120px", height: "88px" }}
          />
        </Box>

        <Box sx={{ width: "100vw", maxWidth: isSmallScreen ? "800px" : "600px", textAlign: "center" }}>
          <Typography
            sx={{
              marginTop: isSmallHeight ? "15%" : isMediumHeight ? "10%" : "-25%",
              textAlign: "left",
              fontSize: "2.125rem",
              fontWeight: "500",
              color: "rgb(0, 0, 0)",
            }}
          >
            Welcome Back
          </Typography>

          <Typography sx={{ margin: "16px 0px 0px", fontSize: "18px", fontWeight: 400, color: "#555", mb: 3, textAlign: "left" }}>
            Don't have an account?{" "}
            <Link href="/signup" sx={{ fontWeight: "600", color: "rgb(82, 49, 104)" }}>
              SignUp
            </Link>
          </Typography>

          {/* Form Fields */}
          <Box sx={{ textAlign: "left", mt: 2 }}>
            <Typography sx={{ fontSize: "18px", fontWeight: "400", color: "#333", mt: "6%", mb: "4px" }}>
              Email
            </Typography>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{ "& .MuiOutlinedInput-root": { borderRadius: "10px" } }}
              error={!!errors.email}
              helperText={errors.email}
              FormHelperTextProps={{
                sx: {
                  textAlign: "left", // Align helper text to the left
                  ml:0,
                  fontSize: "14px",
                  color: "red",
                },
              }}
            />

            <Typography sx={{ mt: 3, fontSize: "18px", fontWeight: "400", color: "#333", mb: "4px" }}>
              Password
            </Typography>
            <TextField
              fullWidth
              variant="outlined"
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{ "& .MuiOutlinedInput-root": { borderRadius: "10px" } }}
              error={!!errors.password}
              helperText={errors.password}
              FormHelperTextProps={{
                sx: {
                  textAlign: "left", // Align helper text to the left
                  ml:0,
                  fontSize: "14px",
                  color: "red",
                },
              }}
            />
          </Box>

                {/* Remember me and Forgot Password */}
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: 2 }}>
                  <FormControlLabel control={<Checkbox color="primary" />} label={<Typography sx={{ fontSize: "1rem", fontWeight: 400 }}>Remember me</Typography>} />
                  <Link href="#" sx={{ fontWeight: "700", fontSize: "14px", color: "#4B286D" }}>
                    Forgot Password?
                  </Link>
                </Box>

          {/* Login Button */}
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
            onClick={handleSubmit}
          >
            Login Now
          </Button>
        </Box>
      </Grid>

      {/* Right Section - Image (Hidden below 1280px, space removed) */}
      {!isSmallScreen && (
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            backgroundColor: "#4B286D",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            overflow: "hidden",
          }}
        >
          <Box
            component="img"
            src={rightsidesection}
            alt="Illustration"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Grid>
      )}
    </Grid>
  );
};

export default Login;
