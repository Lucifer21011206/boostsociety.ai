import React from "react";
import HeroSection from "../components/HeroSection";
import CollaborativePartners from "../components/CollaborativePartners";
import CollaborativeProjects from "../components/CollaborativeProjects";
import FeaturesBenefits from "../components/FeaturesSection"; // Features & Benefits Section
import HowItWorks from "../components/HowItWorks"; // How It Works Section
import TestimonialsSection from "../components/TestimonialsSection";
import SubscribeSection from "../components/SubscribeSection";
import GuestLayout from "../Layouts/GuestLayout";

function LandingPage() {
    return (
        <GuestLayout>
            <HeroSection/>
            <CollaborativePartners />
            <CollaborativeProjects />
            <FeaturesBenefits />
            <HowItWorks /> 
            <TestimonialsSection />
            <SubscribeSection />
        </GuestLayout>
    )
}

export default LandingPage