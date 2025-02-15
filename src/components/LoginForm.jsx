import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  Link,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import rightsidesection from "../assets/rigthsidesection.svg"

const LoginForm = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          width: "90%",
          maxWidth: "1100px",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
          borderRadius: "12px",
          overflow: "hidden",
        }}
      >
        {/* Left Section */}
        <Box
          sx={{
            flex: 1,
            padding: isMobile ? "40px" : "60px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h4"
            fontWeight="600"
            sx={{
              fontFamily: "Outfit",
              mb: 2,
            }}
          >
            Welcome Back
          </Typography>
          <Typography sx={{ mb: 3 }}>
            Don't have an account?{" "}
            <Link href="#" sx={{ fontWeight: "bold" }}>
              Sign Up
            </Link>
          </Typography>

          {/* Form Fields */}
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            margin="normal"
          />
          <TextField
            fullWidth
            label="Password"
            variant="outlined"
            type="password"
            margin="normal"
          />

          {/* Remember me and Forgot Password */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mt: 1,
            }}
          >
            <FormControlLabel
              control={<Checkbox color="primary" />}
              label="Remember me"
            />
            <Link href="#" sx={{ fontWeight: "bold" }}>
              Forgot Password?
            </Link>
          </Box>

          {/* Login Button */}
          <Button
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              background: "linear-gradient(to right, #FF7E5F, #FD3A69)",
              padding: "12px",
              fontSize: "16px",
              fontWeight: "bold",
              "&:hover": { opacity: 0.9 },
            }}
          >
            Login Now
          </Button>
        </Box>

        {/* Right Section */}
        {/* {!isMobile && (
          <Box
            sx={{
              flex: 1,
              backgroundColor: "#4B286D",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "40px",
            }}
          >
            <img
              src={rightsidesection}
              alt="Right Section"
              style={{
                maxWidth: "100%",
                height: "auto",
                borderRadius: "8px",
              }}
            />
          </Box>
        )} */}
      </Box>
    </Box>
  );
};

export default LoginForm;
