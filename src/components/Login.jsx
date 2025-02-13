import React from "react";
import { Box, TextField, Button, Typography, Container } from "@mui/material";

const Login = () => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 5, textAlign: "center" }}>
        <Typography variant="h4">Login</Typography>
        <TextField fullWidth label="Email" margin="normal" />
        <TextField fullWidth label="Password" type="password" margin="normal" />
        <Button variant="contained" color="primary" sx={{ mt: 2 }}>Login</Button>
      </Box>
    </Container>
  );
};

export default Login;
