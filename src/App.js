import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/ Navbar"
import HeroSection from "./components/HeroSection";
import CollaborativeSection from "./components/CollaborativeSection";
import TestimonialsSection from "./components/TestimonialsSection";
import HowItWorks from "./components/HowItWorks"; 
import SubscribeSection from "./components/SubscribeSection";
import Footer from "./components/Footer";
import Signup from "./components/Signup";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <HeroSection />
            <CollaborativeSection />
            <HowItWorks /> {/* Added HowItWorks after CollaborativeSection */}
            <TestimonialsSection /> {/* Added Testimonials Section before the footer */}
            <SubscribeSection /> {/* Add Subscribe Section here */}
          </>
        } />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

