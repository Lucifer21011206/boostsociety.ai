import React from "react";
import { Box, TextField, Button, Typography, Container } from "@mui/material";

const Signup = () => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 5, textAlign: "center" }}>
        <Typography variant="h4">Sign Up</Typography>
        <TextField fullWidth label="Email" margin="normal" />
        <TextField fullWidth label="Password" type="password" margin="normal" />
        <Button variant="contained" color="primary" sx={{ mt: 2 }}>Sign Up</Button>
      </Box>
    </Container>
  );
};

export default Signup;
